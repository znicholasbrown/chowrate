FROM node
WORKDIR /code

RUN npm install

RUN node app.js

