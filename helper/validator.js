const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { comparePassword } = require('./utils');
module.exports = {
    validateBody : schema => {
        return (req, res, next) => {
            let result = schema.validate(req.body);
            if (result.error) {
                next( new Error( result.error.details[0].message));
            } else {
                next();
            }
        }
    },

    validateParam : (schema, key) => {
        return (req, res, next) => {
            let obj = {};
            obj[`${key}`] = req.params[`${key}`];
            let result = schema.validate(obj);
            if (result.error) {
                next( new Error( result.error.details[0].message));
            } else {
                next();
            }
        }
    },
    verifyEmail : () => {
        return async(req, res, next) => {
            req.user = await User.findOne({email: req.body.email}).populate("role");
            if(req.user) {
                next();
            } else {
                next(new Error("Email is incorrect"));
            }
        }
    },
    verifyPassword : () => {
        return async(req, res, next) => {
            if(comparePassword(req.body.password, req.user.password)) {
                next();
            } else {
                next(new Error("Password is incorrect"))
            }
        }
    },
    validateEmail : () => {
        return async(req, res, next) => {
            let user = await User.findOne({email: req.body.email}).populate("role");
            if(user) {
                next(new Error(req.body.email + " is already in use!"));
            } else {
                next();
            }
        }
    },
    validateToken : () => {
        return (req, res, next) => {
            if(req.headers.authorization) {
                let token = req.headers.authorization.split(" ")[1];
                jwt.verify(token, process.env.SECRET_KEY);
                next();
            } else {
                next(new Error("Token not Found!"));
            }
        }
    }
}