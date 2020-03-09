FROM node:12.14.1

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY ./ ./

EXPOSE 8081
CMD ["npm", "start"]
