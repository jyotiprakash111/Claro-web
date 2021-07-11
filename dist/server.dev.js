"use strict";

var express = require("express");

var app = express();

var fs = require("fs");

var PORT = 8081;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use("/", express["static"](__dirname + "/build"));
app.use("*", function (req, res) {
  res.redirect("/");
});
app.listen(PORT, function () {
  console.log("Frontend Server Started ", PORT);
});