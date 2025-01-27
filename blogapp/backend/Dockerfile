FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 3003

CMD ["npm", "run", "start"]
