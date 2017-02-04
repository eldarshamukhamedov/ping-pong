FROM node:slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
COPY server.js /usr/src/app/server.js
RUN npm install && npm cache clean
EXPOSE 12345
CMD ["npm", "start"]
