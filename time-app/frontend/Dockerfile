FROM node:22-alpine

WORKDIR /app/frontend

COPY . .

RUN npm install

CMD [ "npm", "run", "build" ]

FROM nginx

COPY ./ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
