const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const routers = require("./routes");

//ejs setting
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);

module.exports = app;
