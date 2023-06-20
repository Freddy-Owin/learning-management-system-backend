const gallery = require("../../helper/gallery");
const utils = require("../../helper/utils");
const Course = require("../../models/Course");

let home = async(req, res, next) => {
    let data = await Course.find().sort({_id: -1}).select("-__v -fee -description -available -age -fee -created -batches").limit(4);
    utils.baseResponse(res, data, "All Courses");
}
let detail = async(req, res, next) => {
    let data = await Course.findById(req.params.id).sort({_id: -1}).select("-__v -created -batches").limit(4);
    utils.baseResponse(res, data, "All Courses");
}
let all = async(req, res, next) => {
    let data = await Course.find().sort({_id: -1});
    utils.baseResponse(res, data, "All Courses");
}
module.exports = {
    home,
    all,
    detail,
}