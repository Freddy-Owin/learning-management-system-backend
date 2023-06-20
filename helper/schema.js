const Joi = require("joi");

module.exports = {
    AuthSchema : {
        register: Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
            password: Joi.string().min(6).required(),
            phone: Joi.string().required(),
            dob: Joi.date().required(),
            gender: Joi.string().required(),
            education: Joi.required(),
            address: Joi.required()
        }),
        login: Joi.object({
            email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
            password: Joi.string().min(6).required(),
        })
    }
}
