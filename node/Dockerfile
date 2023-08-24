FROM node:alpine
RUN apk update && apk add curl
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
CMD [ "node","index.js" ]