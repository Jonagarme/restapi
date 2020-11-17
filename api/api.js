const express = require("express");
const app = express();

app.get("*", (req, res) => {
  console.log("hola mundo!");
  res.send({ mensaje: "Chancho feo" });
});

module.exports = app;
