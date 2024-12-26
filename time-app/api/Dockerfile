FROM node:22-alpine

WORKDIR /app/api

COPY . .

RUN npm install

EXPOSE  5001:5000

CMD [ "npm", "start" ]