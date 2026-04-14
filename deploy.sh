#!/bin/bash
set -euo pipefail

IMAGE_NAME="jtkj-dynamic-app"
CONTAINER_NAME="jtkj-frontend"
PORT_MAPPING="8080:80"

echo "🚀 [Host] 执行容器重启序列..."

# 1. 检查并构建镜像 (如果 Dockerfile 有变动)
docker build -t "$IMAGE_NAME":latest .

# 2. 容器重启逻辑
if [ "$(docker ps -aq -f name=^/${CONTAINER_NAME}$)" ]; then
    echo "🔄 发现旧容器，正在移除并重新启动以触发代码同步..."
    docker rm -f "$CONTAINER_NAME"
fi

# 3. 运行容器
# 注意：这里需要挂载一个 volume 才能持久化 node_modules，否则每次重启安装会很慢
docker run -d \
    --name "$CONTAINER_NAME" \
    --restart always \
    -p "$PORT_MAPPING" \
    -v jtkj_node_modules:/app/source/node_modules \
    "$IMAGE_NAME":latest

echo "✅ [Success] 容器已启动。代码拉取与构建正在容器内部异步执行。"
echo "📝 你可以使用 'docker logs -f $CONTAINER_NAME' 查看构建进度。"