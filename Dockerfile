FROM node:14.17.4

WORKDIR /home/api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD npm run dev