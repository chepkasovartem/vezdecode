FROM node:latest

RUN rm /bin/sh && ln -s /bin/bash /bin/sh && \
  npm install -g nodemon mocha supervisor

WORKDIR /app

COPY package*.json ./

RUN npm config set unsafe-perm true
RUN npm install

COPY . .

CMD [ "nodemon", "config/server.ts" ]