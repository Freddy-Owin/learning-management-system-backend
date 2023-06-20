const gallery = require("../../helper/gallery");
const utils = require("../../helper/utils");
const Batch = require("../../models/Batch");
const Course = require("../../models/Course");

let all = async(req, res, next) => {
    let data = await Course.find().sort({_id: -1});
    utils.baseResponse(res, data, "All Courses");
}
let add = async(req, res, next) => {
    req.body.image = gallery.uploadCourseImage(req.files.image)
    let data = await new Course(req.body).save();
    utils.baseResponse(res, data, "New course has been created successfully");
}
let available = async(req, res, next) => {
    let data = await Course.findByIdAndUpdate(req.params.id, {available: req.body.available});
    utils.baseResponse(res, data, "Available Changed!");
}
let patch = async(req, res, next) => {
    let course = await Course.findById(req.params.id);
    if (req.files) {
        gallery.deleteCourseImage(course.image);
        req.body.image = gallery.uploadCourseImage(req.files.image);
        let data = await Course.findByIdAndUpdate(req.params.id, req.body);
        utils.baseResponse(res, data, "Course has been updated!");
    } else {
        let data = await Course.findByIdAndUpdate(req.params.id, req.body);
        utils.baseResponse(res, data, "Course has been updated!");
    }
}
let get = async(req, res, next) => {
    let course = await Course.findById(req.params.id);
    utils.baseResponse(res, course, "Match Course");
}
let relatedBatch = async(req, res, next) => {
    let data = await Batch.find({course: req.params.id}).populate("instructors");
    utils.baseResponse(res, data, "Related Batches");
}
let drop = async(req, res, next) => {
    console.log(req.params);
}
module.exports = {
    all, 
    add,
    get,
    available,
    patch,
    relatedBatch
}