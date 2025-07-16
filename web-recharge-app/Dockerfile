# Stage 1: Build React app
#FROM node:18 as build
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build

# Stage 2: Serve the built app
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the React application
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
# REACT_APP_RECHARGE_SERVICE_URL will be picked up by Create React App at build time
# Replace 'YOUR_CLOUD_RUN_RECHARGE_SERVICE_URL' with the actual URL of your web-app-recharge-service
ARG REACT_APP_RECHARGE_SERVICE_URL
ENV REACT_APP_RECHARGE_SERVICE_URL=$REACT_APP_RECHARGE_SERVICE_URL
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration (optional, but good practice for SPAs)
# This configuration ensures that all requests (except for static files)
# are routed to index.html, which is crucial for client-side routing.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the web server
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
