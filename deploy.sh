#!/usr/bin/env bash
set -Eeuo pipefail

#######################################
# 可修改配置
#######################################
CONTAINER_NAME="my_frontend_app"
IMAGE_NAME="node:20-bookworm"
HOST_PORT="2345"
CONTAINER_PORT="3000"

# Git 仓库地址
REPO_URL="https://github.com/rei0721/jtkj-home-page.git"

# 容器内项目目录
APP_DIR="/workspace/app"

# Git 分支，可选
GIT_BRANCH="main"

#######################################
# 检查 docker 是否可用
#######################################
if ! command -v docker >/dev/null 2>&1; then
  echo "错误: 未检测到 docker，请先安装 Docker。"
  exit 1
fi

#######################################
# 容器启动后执行的脚本
#######################################
CONTAINER_BOOTSTRAP_SCRIPT=$(cat <<'EOF'
set -Eeuo pipefail

APP_DIR="${APP_DIR:-/workspace/app}"
REPO_URL="${REPO_URL:?REPO_URL is required}"
GIT_BRANCH="${GIT_BRANCH:-main}"
CONTAINER_PORT="${CONTAINER_PORT:-3000}"

echo ">>> 容器启动，准备环境..."

# 安装 git / curl / ca-certificates（仅 Debian/Ubuntu 类镜像）
if ! command -v git >/dev/null 2>&1; then
  echo ">>> 安装 git ..."
  apt-get update
  apt-get install -y git curl ca-certificates
fi

# 安装 pnpm
if ! command -v pnpm >/dev/null 2>&1; then
  echo ">>> 安装 pnpm ..."
  npm install -g pnpm
fi

# 安装 serve
if ! command -v serve >/dev/null 2>&1; then
  echo ">>> 安装 serve ..."
  npm install -g serve
fi

mkdir -p "$(dirname "$APP_DIR")"

if [ -d "$APP_DIR/.git" ]; then
  echo ">>> 检测到仓库已存在，开始更新..."
  cd "$APP_DIR"
  git fetch --all
  git reset --hard "origin/$GIT_BRANCH"
  git clean -fd
elif [ -d "$APP_DIR" ] && [ -n "$(ls -A "$APP_DIR" 2>/dev/null || true)" ]; then
  echo "错误: $APP_DIR 存在但不是 git 仓库，且目录非空。"
  exit 1
else
  echo ">>> 未检测到仓库，开始克隆..."
  git clone -b "$GIT_BRANCH" "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

echo ">>> 安装依赖..."
pnpm install

echo ">>> 构建项目..."
pnpm build

if [ ! -d "$APP_DIR/dist" ]; then
  echo "错误: 构建完成后未找到 dist 目录。"
  exit 1
fi

echo ">>> 启动静态服务: $CONTAINER_PORT"
cd "$APP_DIR"
exec npx serve -s dist -l "$CONTAINER_PORT"
EOF
)

#######################################
# 判断容器是否存在
#######################################
container_exists() {
  docker ps -a --format '{{.Names}}' | grep -Fxq "$CONTAINER_NAME"
}

container_running() {
  docker ps --format '{{.Names}}' | grep -Fxq "$CONTAINER_NAME"
}

#######################################
# 创建容器
#######################################
create_container() {
  echo ">>> 容器不存在，开始创建: $CONTAINER_NAME"

  docker run -d \
  --name "$CONTAINER_NAME" \
  -p "${HOST_PORT}:${CONTAINER_PORT}" \
  -v "$(pwd)/app_data:/workspace" \
  -e REPO_URL="$REPO_URL" \
  -e APP_DIR="$APP_DIR" \
  -e GIT_BRANCH="$GIT_BRANCH" \
  -e CONTAINER_PORT="$CONTAINER_PORT" \
  "$IMAGE_NAME" \
  bash -lc "$CONTAINER_BOOTSTRAP_SCRIPT"
}

#######################################
# 启动已有容器
#######################################
start_existing_container() {
  echo ">>> 容器存在但未运行，开始启动: $CONTAINER_NAME"
  docker start "$CONTAINER_NAME"
}

#######################################
# 重启运行中的容器
#######################################
restart_existing_container() {
  echo ">>> 容器存在且正在运行，开始重启: $CONTAINER_NAME"
  docker restart "$CONTAINER_NAME"
}

#######################################
# 主逻辑
#######################################
if container_exists; then
  if container_running; then
    restart_existing_container
  else
    start_existing_container
  fi
else
  create_container
fi

echo ">>> 当前容器状态:"
docker ps -a --filter "name=^${CONTAINER_NAME}$"

echo
echo ">>> 查看日志命令:"
echo "docker logs -f ${CONTAINER_NAME}"