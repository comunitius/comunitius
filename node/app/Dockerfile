FROM node:lts-alpine as build-stage
ENV CORS_MAX_AGE: 500

RUN mkdir -p /usr/be/app
WORKDIR /usr/be/app

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .

EXPOSE 8000

CMD [ "npm", "start"]