const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const baseResponse = (response, data, message) => {
    response.status(200).send({condition: true, data, message});
};
const encodePassword = (payload) => {
    return bcrypt.hashSync(payload, 10);
}
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "30d"});
}
const comparePassword = (plainText, hashCode) => {
    return bcrypt.compareSync(plainText, hashCode)
}
module.exports = {
    baseResponse,
    encodePassword,
    generateToken,
    comparePassword
}