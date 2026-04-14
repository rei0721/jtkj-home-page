#!/bin/sh
set -e

# --- 配置 ---
REPO_URL="https://github.com/rei0721/jtkj-home-page.git"
PROJECT_DIR="/app/source"

echo "🚀 容器启动，开始同步代码..."

# 1. Git 逻辑
if [ ! -d "$PROJECT_DIR/.git" ]; then
    echo "🔍 克隆新仓库..."
    git clone "$REPO_URL" "$PROJECT_DIR"
    cd "$PROJECT_DIR"
else
    echo "🔄 同步现有仓库..."
    cd "$PROJECT_DIR"
    git fetch --all
    git reset --hard origin/main
fi

# 2. 构建逻辑
echo "🛠️ 开始安装依赖并构建..."
pnpm install
pnpm build

# 3. 静态托管
echo "🌐 启动静态服务..."
# 使用 npx serve 托管构建出的 dist 目录
exec npx serve -s dist -l 80