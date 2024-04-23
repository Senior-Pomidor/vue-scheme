FROM node:20.12.0-alpine

COPY ./ ./var/www/html/frontend

WORKDIR /var/www/html/frontend

RUN npm install && npm run build
