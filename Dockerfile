FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm install
COPY . .
RUN pnpm run build

FROM nginx:1.24-alpine
COPY --from=build /app/dist /usr/share/nginx/html
