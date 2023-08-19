import Joi = require("joi");

export const registerSchema = Joi.object().keys({
    fullName: Joi.string().required().min(3).max(20),
    userName: Joi.string().required().min(3).max(50),
    email:Joi.string().email().required(),
    password: Joi.string().required()
})
export const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})