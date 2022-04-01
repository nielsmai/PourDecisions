FROM node:12-alpine

RUN apk update && apk add bash

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend

COPY package*.json /usr/src/app/backend/

RUN sudo npm install --silent

COPY . /usr/src/app/backend/ 

EXPOSE 5000

CMD ["npm", "run", "dev"]
