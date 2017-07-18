FROM node:slim

# Create application directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install application dependencies
COPY package.json /usr/src/app/
Run cd /usr/src/app/
Run npm install
Run node --version

# Bundle application source
COPY . /usr/src/app

#expose ports
EXPOSE 3000 27017

#start server
CMD [ "npm", "start" ]