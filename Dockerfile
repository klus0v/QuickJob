FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install 
EXPOSE 80
EXPOSE 8080
EXPOSE 3000
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
