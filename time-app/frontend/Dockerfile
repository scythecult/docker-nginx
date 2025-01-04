# Создаём контейнер на основе ноды
FROM node:22-alpine AS builder
WORKDIR /app/frontend
# Для оптимизации, сначала копируем только package-файлы
# Как правило зависимости меняются радко в отличии от основных файлов приложения
# Для то
COPY package*.json ./
RUN npm ci && npm cache clean -f
COPY . ./
RUN npm run build

# Создаём контейнер на основе nginx
FROM nginx
COPY --from=builder /app/frontend/dist /usr/share/nginx/html/
EXPOSE 8000:80
CMD ["nginx", "-g", "daemon off;"]
