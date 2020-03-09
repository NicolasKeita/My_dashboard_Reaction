FROM node:12.14.1

WORKDIR /usr/src/DEV_area_2019_client_website

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY ./ ./

EXPOSE 8081
CMD ["npm", "start"]
