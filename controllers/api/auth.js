const { uploadProfile } = require("../../helper/gallery");
const { generateToken, baseResponse, encodePassword } = require("../../helper/utils");
const AccessToken = require("../../models/AccessToken");
const Role = require("../../models/Role");
const User = require("../../models/User");
const jwt = require('jsonwebtoken')

let adminRegister = async(req, res, next) => {
    let role = await Role.findOne({name: req.body.role});
    req.body.role = role._id;
    let admin = await User.findOne({role: req.body.role}).sort({_id: -1}).limit(1);
    if (admin) {
        let number = Number(admin.user_id.split(" ")[2]) + 1;
        req.body.user_id = "A - 0"+number;
    } else {
        req.body.user_id = "A - 01";
    }
    req.body.password = encodePassword(req.body.password);
    let user = await new User(req.body).save();
    let userObj = user.toObject();
    delete userObj.password;
    userObj.role = role;
    userObj.token = generateToken(userObj);
    await new AccessToken({user: user._id, token: userObj.token}).save();
    baseResponse(res, userObj, "Registered Success");
}
let register = async (req, res, next) => {
    let role = await Role.findOne({name: req.params.role});
    req.body.role = role._id;
    let student = await User.findOne({role: req.body.role}).sort({_id: -1}).limit(1);
    if (student) {
        let number = Number(student.user_id.split(" ")[2]) + 1;
        req.body.user_id = "S - 0"+number;
    } else {
        req.body.user_id = "S - 01";
    }
    req.body.password = encodePassword(req.body.password);
    req.body.image = uploadProfile(req.files.image);
    let user = await new User(req.body).save();
    let userObj = user.toObject();
    delete userObj.password;
    userObj.role = role;
    userObj.token = generateToken(userObj);
    await new AccessToken({user: user._id, token: userObj.token}).save();
    baseResponse(res, userObj, "Registered Success");
};
let login = async(req, res, next) => {
    let user = req.user.toObject();
    user.token = generateToken(user);
    await new AccessToken({user: user._id, token: user.token}).save();
    baseResponse(res, user, "Logged In!");
}
let logout = async(req, res, next) => {
    let token = req.headers.authorization.split(" ")[1];
    let data = await AccessToken.deleteOne({token: token});
    baseResponse(res, data, "Logged out!");
}
let authData = async(req, res, next) => {
    if(req.headers.authorization) {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY);
        let data = await AccessToken.findOne({token: token}).populate([
            {
                path: "user",
                model: User,
                populate: {
                    path: "role",
                    model: Role
                }
            }
        ]);
        let user = data.user;
        baseResponse(res, user, "Auth Data");
    } else {
        next (new Error ("Token not found"))
    }
}
module.exports = {
    register,
    login,
    authData,
    logout,
    adminRegister,
}