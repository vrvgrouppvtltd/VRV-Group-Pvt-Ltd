# Stage 1: Build the Vite React Application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy project source files
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Serve using ultra-lightweight Nginx Alpine
FROM nginx:alpine

ENV PORT=80

# Clean default Nginx web root
RUN rm -rf /usr/share/nginx/html/*

# Copy built production assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration template with SPA routing & dynamic PORT support
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose HTTP port
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
