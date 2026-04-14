#!/bin/bash
set -euo pipefail

# --- 配置区 ---
IMAGE_NAME="jtkj-dynamic-app"
CONTAINER_NAME="jtkj-frontend"
PORT_MAPPING="8080:80"
# 获取脚本执行时的所在目录
WORK_DIR=$(pwd)

echo "🚀 [Host] 准备环境并重启容器..."

# 1. 安全检查：确保当前目录下有 Dockerfile
if [ ! -f "$WORK_DIR/Dockerfile" ]; then
    echo "❌ 错误: 在 $WORK_DIR 未找到 Dockerfile，请确保脚本在项目配置目录运行。"
    exit 1
fi

# 2. 构建或更新基础镜像
echo "🛠️ 正在检查/构建基础镜像..."
docker build -t "$IMAGE_NAME":latest .

# 3. 容器清理
if [ "$(docker ps -aq -f name=^/${CONTAINER_NAME}$)" ]; then
    echo "🔄 移除旧容器: $CONTAINER_NAME"
    docker rm -f "$CONTAINER_NAME"
fi

# 4. 启动容器 (加入 pnpm 缓存挂载，极大提升安装速度)
echo "🚢 启动容器并挂载持久化卷..."
docker run -d \
    --name "$CONTAINER_NAME" \
    --restart always \
    -p "$PORT_MAPPING" \
    -v jtkj_node_modules:/app/source/node_modules \
    -v jtkj_pnpm_store:/root/.local/share/pnpm/store \
    "$IMAGE_NAME":latest

echo "------------------------------------------------"
echo "✅ [Success] 容器已在后台启动！"
echo "📡 访问地址: http://服务器IP:${PORT_MAPPING%%:*}"
echo "📜 查看实时构建日志: docker logs -f $CONTAINER_NAME"
echo "------------------------------------------------"