const express = require("express");
const path = require("path");
const pino = require("pino-http");

const app = express();

app.use(pino());
app.use(express.static(path.join(__dirname, "dist")));

app.listen(8080, () => console.log(`Listening on port 8080`));
