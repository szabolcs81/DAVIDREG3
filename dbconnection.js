const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DavidUser3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
