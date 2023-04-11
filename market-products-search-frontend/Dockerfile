FROM node:16.14-alpine
WORKDIR /usr/src/app/market-products-search-frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm","start" ]