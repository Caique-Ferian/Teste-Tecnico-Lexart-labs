FROM node:16.14-alpine
WORKDIR /usr/src/app/market-products-search-backend
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT ["npm", "start"]