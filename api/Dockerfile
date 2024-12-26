# Download target image
FROM node:22-alpine

# Create dir inside image
WORKDIR /app

# Copy files relatively Dockerfile to /app root folder
COPY . .

# Run commands
RUN npm install

ARG API_PORT

RUN API_PORT=${API_PORT}

# Bind port
EXPOSE 3000

# Run commands on container start
CMD ["npm", "run", "dev"]
