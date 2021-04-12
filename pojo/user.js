const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 1024,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

const JoiSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .message("name min 3")
    .max(255)
    .message("name max 255")
    .required(),
  email: Joi.string().email().message("nem email formatum ").required(),
  password: Joi.string().min(5).message("tul rovid a pasword"),
});

function validateUser(value) {
  const { error } = JoiSchema.validate(value);
  if (error) throw error;
  return true;
}

module.exports.User = User;
module.exports.validateUser = validateUser;
