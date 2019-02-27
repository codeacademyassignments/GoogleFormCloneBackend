const Joi = require('joi');

module.exports = () => Joi.object().keys({
  formName: Joi.string().required(),
  fields: Joi.array().items(Joi.string()).required(),
});
