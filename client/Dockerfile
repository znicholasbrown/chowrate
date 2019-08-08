# Light version of Linux to run Node ~50mb
FROM node:8.16.0-alpine

RUN mkdir -p /srv/chowrate-client
WORKDIR /srv/chowrate-client

# Wildcard gets package.json && package-lock.json
COPY package*.json /srv/chowrate-client/

# Copy local code to the container
COPY . /srv/chowrate-client/

# This adds python to the container
# before running `npm install` to ensure it's
# available for any packages that need it (looking at you node-sass >.>)
# Python and its associates are removed after npm install has finished
RUN apk add --no-cache --virtual .build-deps alpine-sdk python \
  && npm install --production --silent \
  && apk del .build-deps

# Start the server
CMD ["npm", "run", "start"]