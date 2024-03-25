FROM node:16.20.0-alpine

COPY ./ ./var/www/html/frontend

WORKDIR /var/www/html/frontend

RUN npm install -g yarn

RUN yarn && yarn build
