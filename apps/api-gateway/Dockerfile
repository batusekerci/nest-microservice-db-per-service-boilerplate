FROM node:alpine 

WORKDIR /app

COPY package*.json ./

RUN yarn install 

COPY . .

CMD ["node", "dist/apps/api-gateway/main"]