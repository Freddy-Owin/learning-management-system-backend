const utils = require("../../helper/utils");
const Career = require("../../models/Career");

let all = async(req, res, next) => {
    let data = await Career.find();
    utils.baseResponse(res, data, "All Careers");
}
let add = async (req, res, next) => {
    let data = await new Career(req.body).save();
    utils.baseResponse(res, data, "Career has been added successfully");
}
module.exports = {
    all,
    add
}