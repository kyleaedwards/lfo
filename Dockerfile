FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080
ENV PORT 8080
CMD [ "yarn", "now-start" ]