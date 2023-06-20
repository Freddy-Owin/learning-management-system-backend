const { baseResponse } = require("../../helper/utils");
const Enrollment = require("../../models/Enrollment")

let add = async(req, res, next) => {
    let data = await new Enrollment(req.body).save();
    baseResponse(res, data, "Enrolled");
}
module.exports = {
    add,
}