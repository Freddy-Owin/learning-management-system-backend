let gallery = require("../../helper/gallery");
let utils = require("../../helper/utils");
const Lesson = require("../../models/Lesson");

let all = async(req, res, next) => {
    let data = await Lesson.find({week: req.params.week}).populate("course batch week");
    utils.baseResponse(res, data, "All Lessons!");
}
let add = async(req, res, next) => {
    req.body.file = gallery.uploadLessonFile(req.files.file);
    let data = await new Lesson(req.body).save();
    utils.baseResponse(res, data, "Lesson has been created");
}
let get = async(req, res, next) => {
    let data = await Lesson.findById(req.params.id).populate("course batch week");
    utils.baseResponse(res, data, "Lesson");
}
let drop = async(req, res, next) => {
    let data = await Lesson.findByIdAndDelete(req.params.id);
    utils.baseResponse(res, data, "Lesson has been deleted successfully!");
}
module.exports = {
    add,
    all,
    get,
    drop
}