const utils = require("../../helper/utils");
const gallery = require("../../helper/gallery");
const Application = require("../../models/Application");
const Career = require("../../models/Career");

let all = async(req, res, next) => {
    let data = await Career.find().sort({_id: -1});
    utils.baseResponse(res, data, "All Careers");
}
let get = async(req, res, next) => {
    let data = await Career.findById(req.params.id);
    utils.baseResponse(res, data, "Career You Search");
}
let apply = async(req, res, next) => {
    req.body.cv = gallery.uploadCv(req.files.cv);
    let data = await new Application(req.body).save();
    utils.baseResponse(res, data, "You have applied successfully. We will send to your eamil if you have been selected");
}
module.exports = {
    all,
    get,
    apply
}