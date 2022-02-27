FROM node:12-alpine

WORKDIR .

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

