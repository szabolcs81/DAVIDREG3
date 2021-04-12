require("./dbconnection");
const routeU = require("./routes/routes");
const debug = require("debug")("app:express");
const express = require("express");
const app = express("express");
const { City } = require("./pojo/city");

app.use(express.json());
app.use("/user", routeU);
app.listen(3000, () => debug("server start on 3000"));
