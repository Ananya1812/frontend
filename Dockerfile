# Dockerfile for React app
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]