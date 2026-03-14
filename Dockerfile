# Etapa 1: Build da aplicação Angular
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Servir com Nginx
FROM nginx:alpine

# Copiar build do Angular para o Nginx
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
