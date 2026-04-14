FROM node:20-slim

# 安装 git 和基础工具
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 复制启动脚本并赋予权限
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 暴露端口
EXPOSE 80

# 执行启动脚本
ENTRYPOINT ["/entrypoint.sh"]