FROM node:12.2.0-alpine

WORKDIR /usr/src/DEV_area_2019_client_website

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY ./ ./

EXPOSE 8000
CMD ["npm", "start"]
