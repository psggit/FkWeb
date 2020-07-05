FROM node:14.5.0-stretch
COPY . .
RUN yarn build-prod
EXPOSE 8080
ENTRYPOINT ["node", "server.js"]
