# pull official base image
FROM node:14.16.1-alpine

# set working directory
WORKDIR /backend

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . ./

EXPOSE 5000
EXPOSE $PORT

# start app
CMD ["npm", "start"]