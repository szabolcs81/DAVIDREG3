const mongoose = require("mongoose");
const Joi = require("joi");

const citySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 255,
  },
  postcode: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 255,
  },
});

const City = mongoose.model("City", citySchema);
const joiSchema = Joi.object({
  nam: Joi.string()
    .min(2)
    .message("tul rovid")
    .max(255)
    .message("tul hosszu")
    .required(),
  postcode: Joi.string()
    .min(3)
    .message("tul rovid")
    .max(255)
    .message("tul hossu")
    .required(),
});

async function validateCity(value) {
  const { error } = joiSchema.validate(value);
  if (error) throw error;

  return true;
}
module.exports.validateCity = validateCity;
module.exports.City = City;
