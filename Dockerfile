FROM node:18.19

WORKDIR /api-nodejs

COPY package*.json /api-nodejs/

RUN npm install

EXPOSE 3001

COPY . /api-nodejs/

CMD [ "npm","run","start" ]