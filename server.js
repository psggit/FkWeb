const express = require("express");
const path = require("path");
const pinoHttp = require("pino-http");
const pino = require("pino");

//Setup logger
const httpLogger = pinoHttp();
const logger = pino();

const app = express();

app.use(httpLogger);
app.use(express.static(path.join(__dirname, "dist")));

app.listen(8080, () => {
  logger.info({ port: 8080 }, "express started");
});
