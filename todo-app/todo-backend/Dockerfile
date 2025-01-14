FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm install dotenv

EXPOSE 3000

ENV MONGO_URL=mongodb://localhost:27017/todos
ENV REDIS_URL=redis://localhost:6379

CMD ["npm", "start"]
