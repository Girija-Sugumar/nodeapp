FROM node:alpine
RUN apk update && apk add curl
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node","index.js" ]
