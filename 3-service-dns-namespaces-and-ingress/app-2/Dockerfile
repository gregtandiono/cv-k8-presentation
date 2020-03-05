FROM node:10
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
EXPOSE 4001
CMD node index.js
