FROM nginx:latest
LABEL MAINTAINER="wangliang"

# 删除 nginx 默认的静态资源
RUN rm -rf /usr/share/nginx/html/*

# 将 myapp 文件夹下的所有文件复制到 nginx 的静态资源文件夹
COPY dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
