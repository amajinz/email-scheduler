require("dotenv").config();

import express from "express";

const app = express();
const port = 3000;
const { database } = require("../config");

// Routers
const indexRouter = require("./routes/index");

// database connection
database.connect();

app.use("/", indexRouter);

app
  .listen(port, () => {
    console.log("Listening on port: ", port);
  })
  .on("error", (e) => {
    console.log("Error happened: ", e.message);
  });
