FROM node:6.11.5

WORKDIR /serv
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
