#!/bin/sh
set -e

REPO_URL="https://github.com/rei0721/jtkj-home-page.git"
SOURCE_DIR="/app/source"

# 1. 自动同步代码
if [ ! -d "$SOURCE_DIR/.git" ]; then
    echo "📦 正在初始化克隆仓库..."
    git clone "$REPO_URL" "$SOURCE_DIR"
    cd "$SOURCE_DIR"
else
    echo "🔄 正在同步最新代码..."
    cd "$SOURCE_DIR"
    git fetch --all
    git reset --hard origin/main
fi

# 2. 安装与构建
echo "🏗️ 正在执行 pnpm install..."
pnpm install

echo "⚡ 正在执行 pnpm build..."
pnpm build

# 3. 启动服务 (使用 exec 确保信号传递)
echo "🌟 服务启动成功，开始托管 dist 目录..."
exec npx serve -s dist -l 80