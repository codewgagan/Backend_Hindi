require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Gagans Account");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login Before Shopping</h1>");
});
app.get("/bookish", (req, res) => {
  res.send("<h2>Best Books for Soul</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
