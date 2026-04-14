#!/bin/bash

# 遇到错误立即退出
set -e

# --- 配置区 ---
PROJECT_PATH="/home/rei0721/jtkj-home-page"
REPO_URL="https://github.com/your-username/jtkj-home-page.git" # 请替换为实际地址
IMAGE_NAME="jtkj-home-page"
CONTAINER_NAME="jtkj-frontend"
PORT_MAPPING="8080:80" # 宿主机 8080 映射 容器 80

echo "🚀 开始自动化部署流程..."

# 1. 源码管理
if [ ! -d "$PROJECT_PATH" ]; then
    echo "📂 目录不存在，正在克隆仓库..."
    git clone "$REPO_URL" "$PROJECT_PATH"
    cd "$PROJECT_PATH"
else
    echo "🔄 目录已存在，正在拉取最新代码..."
    cd "$PROJECT_PATH"
    git reset --hard HEAD  # 防止本地修改冲突
    git pull
fi

# 2. 构建镜像
echo "🛠️ 正在构建 Docker 镜像: $IMAGE_NAME..."
docker build -t "$IMAGE_NAME":latest .

# 3. 服务部署 (无缝重启)
echo "🌐 正在检查旧容器..."
if [ "$(docker ps -aq -f name=^/${CONTAINER_NAME}$)" ]; then
    echo "🛑 停止并移除旧容器: $CONTAINER_NAME"
    docker rm -f "$CONTAINER_NAME"
fi

echo "🚢 启动新容器..."
docker run -d \
    --name "$CONTAINER_NAME" \
    --restart always \
    -p "$PORT_MAPPING" \
    "$IMAGE_NAME":latest

# 4. 清理残留
echo "🧹 清理无用的虚悬镜像 (dangling images)..."
docker image prune -f

echo "✅ 部署完成！服务运行在 http://localhost:${PORT_MAPPING%%:*}"