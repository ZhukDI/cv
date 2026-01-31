# ---- Stage 1: Build the Astro site ----
FROM node:24-alpine AS build
# Set the working directory
WORKDIR /app
# Copy package files and install dependencies
# This leverages Docker's layer caching
COPY package*.json ./
RUN npm install
# Copy the rest of the application source code
COPY . .
# Build the site for production
RUN npm run build

# ---- Stage 2: Serve the static files with Nginx ----
FROM nginx:1.29.3-alpine AS runtime

# Copy ALL nginx config files
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/security-headers.conf /etc/nginx/security-headers.conf

# Copy built site
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80