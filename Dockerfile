# 第一阶段：构建阶段
FROM node:20-slim AS builder

# 安装 pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# 利用 Docker 缓存：只有 package.json 变动时才重新安装依赖
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 复制源码并构建
COPY . .
RUN pnpm build

# 第二阶段：运行阶段 (使用轻量级 nginx)
FROM nginx:stable-alpine

# 从构建阶段复制静态文件到 nginx 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]