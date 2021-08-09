//schema for validation with JOI
const Joi = require("@hapi/joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  //validate the data before sending user
  return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    });
  
    //validate the data before sending user
    return schema.validate(data);
}

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;