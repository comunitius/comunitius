# Stage 0
# Frontend build based on Node.js
FROM node:lts-alpine as builder

RUN mkdir -p /usr/web/app

WORKDIR /usr/web/app

ENV PATH /usr/web/app/node_modules/.bin:$PATH

COPY package.json /usr/web/app/package.json
COPY package-lock.json /usr/web/app/package-lock.json

RUN npm install
COPY . .

RUN npm run build

# Stage 1
# Production build based on Nginx with artefacts from Stage 0
FROM nginx:1.17.3-alpine
COPY --from=builder /usr/web/app/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
