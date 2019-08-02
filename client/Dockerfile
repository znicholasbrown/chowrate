# Light version of Linux to run Node ~50mb
FROM node:8.16.0-alpine

RUN mkdir -p /srv/chowrate-client
WORKDIR /srv/chowrate-client

# Wildcard gets package.json && package-lock.json
COPY package*.json /srv/chowrate-client/

# Copy local code to the container
COPY . /srv/chowrate-client/

RUN npm install

# Start the server
CMD ["npm", "run", "start"]