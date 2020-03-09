FROM node:12.14.1

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY ./ ./

EXPOSE 8081

RUN ["ln", "-s", "/public_shared/client.apk", "/public/client.apk"]
CMD ["npm", "start"]
