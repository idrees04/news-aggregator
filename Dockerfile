# Use official Node.js image as the base image
FROM node:lts-alpine3.19 AS build

WORKDIR /app

# Copy package files to install dependencies
COPY package.json package-lock.json ./

# Install build dependencies
# RUN apk add --no-cache --virtual .build-deps build-deps && \
#     npm install --only=production

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve React application with Nginx
FROM nginx:alpine

# Copy build files from previous stage to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration file if needed
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
