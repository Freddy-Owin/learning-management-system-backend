const { baseResponse } = require("../../helper/utils");
const Enrollment = require("../../models/Enrollment")

let all = async(req, res, next) => {
    let data = await Enrollment.find().populate("course user");
    baseResponse(res, data, "All Enrollments");
}
let drop = async(req, res, next) => {
    let data = await Enrollment.findByIdAndDelete(req.params.id);
    baseResponse(res, data, "Enrollment has been removed!");
}

module.exports = {
    all,
    drop,
}