const { User, validateUser } = require("../pojo/user");
const { City } = require("../pojo/city");
const mongoose = require("mongoose");
const express = require("express");
const debug = require("debug")("app:routes");
const bcrypt = require("bcrypt");

const route = express.Router();
route.post("/save", async (req, res) => {
  try {
    let isCityExist = await City.findOne({ _id: req.body.address });
    if (!isCityExist) return res.status(404).send("ez a varos nem letezik");
    let isExist = await User.findOne({ email: req.body.email });
    if (isExist) return res.status(404).send("mar letezik");

    let u = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    const genpassword = await bcrypt.hash(u.password, salt);
    debug(genpassword);
    u.password = genpassword;
    const result = await u.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = route;
