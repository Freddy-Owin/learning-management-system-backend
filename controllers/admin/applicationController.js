const { baseResponse, encodePassword } = require("../../helper/utils");
const gallery = require("../../helper/gallery");
const Application = require("../../models/Application");
const Role = require("../../models/Role");
const User = require("../../models/User");
let all = async(req, res, next) => {
    let data = await Application.find().sort({_id: -1}).populate("career");
    baseResponse(res, data, "All Applications");
}
let drop = async(req, res, next) => {
    let application = await Application.findById(req.params.id);
    gallery.deleteCv(application.cv);
    let data = await Application.findByIdAndDelete(req.params.id);
    baseResponse(res, data, "Application Canceled");
}
let confirmAsInstructor = async(req, res, next) => {
    let role = await Role.findOne({name: req.body.role});
    req.body.role = role._id;
    let instructor = await User.findOne({role: req.body.role}).sort({_id: -1}).limit(1);
    if (instructor) {
        let number = Number(instructor.user_id.split(" ")[2]) + 1;
        req.body.user_id = "I - 0"+number;
    } else {
        req.body.user_id = "I - 01";
    }
    let data = await new User({
        user_id: req.body.user_id,
        name: req.body.name,
        email: req.body.email,
        password: encodePassword(req.body.password),
        cv: req.body.cv,
        role: role._id
    }).save();
    await Application.findByIdAndDelete(req.body.application);
    baseResponse(res, data, "Successfully confirmed as an instructor.")
}

module.exports = {
    all,
    drop,
    confirmAsInstructor
}