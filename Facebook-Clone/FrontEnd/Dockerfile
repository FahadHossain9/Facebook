FROM node:16.17.0
WORKDIR /client
COPY package*.json .
RUN npm i @material-ui/core --legacy-peer-deps
COPY . . 
EXPOSE 3000
CMD ["npm", "start","--host", "0.0.0.0"]