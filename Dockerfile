FROM node:8-alpine

ADD ./package.json yarn.lock /app/

WORKDIR /app

RUN yarn install

ADD . /app

RUN yarn build

ENV port 3000

CMD yarn start-prod
