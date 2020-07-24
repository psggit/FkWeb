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

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(8080, () => {
  logger.info({ port: 8080 }, "express started");
});
