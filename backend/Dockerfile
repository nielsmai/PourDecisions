FROM node:12-alpine

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend

COPY package*.json /usr/src/app/backend/

RUN npm install

COPY . /usr/src/app/backend/ 

EXPOSE 5000

CMD ["npm", "run", "dev"]
