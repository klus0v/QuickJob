FROM node:16-alpine
RUN apk add --no-cache make gcc g++ python3
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 80
EXPOSE 3000
CMD ["npm", "start"]
