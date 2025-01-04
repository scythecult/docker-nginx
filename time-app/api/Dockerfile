FROM node:22-alpine
WORKDIR /app/api
COPY package*.json ./
RUN npm ci && npm cache clean -f
COPY . ./
EXPOSE 5555:5000
CMD [ "npm", "start" ]