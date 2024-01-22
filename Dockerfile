FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 80
EXPOSE 8080
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
