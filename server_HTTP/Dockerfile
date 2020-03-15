FROM node:12.14.1

WORKDIR /usr/src/DEV_area_2019_server
COPY package.json ./
COPY package-lock.json ./
COPY about.json ./
RUN npm install
COPY ./ ./

EXPOSE 8080
CMD ["npm", "start"]
