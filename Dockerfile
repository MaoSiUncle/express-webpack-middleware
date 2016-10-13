# 获取最新版本node 镜像
FROM node:6.7.0
#作者
MAINTAINER YUNLONG

#
WORKDIR /app
ADD ./package.json /app

RUN npm install --registry=https://registry.npm.taobao.org
ADD . /app

ENV PORT 30000
ENV NODE_ENV production

EXPOSE 30000

CMD npm run build