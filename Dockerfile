FROM node:16.13.0-alpine

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn install && yarn cache clean
RUN yarn build

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "dev" ]