FROM node:18.19

WORKDIR /backend-medix

COPY package*.json .
RUN npm install
COPY . .

CMD [ "npm","run","start" ]