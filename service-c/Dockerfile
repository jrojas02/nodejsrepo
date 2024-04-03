FROM node:14
WORKDIR /usr/src/appo
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]

#docker build -t jrojas02/servicio-c-sumar .