# pull official base image
FROM node:14.16.1-alpine

# set working directory
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /loginpage-project/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . ./

EXPOSE 3000
EXPOSE $PORT

# start app
CMD ["npm", "start"]