const utils = require("../../helper/utils");
const Batch = require("../../models/Batch");
const Week = require("../../models/Week");
const Lesson = require("../../models/Lesson");
const Student = require("../../models/Student");

let getToAccept = async(req, res, next) => {
    let data = await Batch.find({course: req.params.course, status: true}).select("name").populate('course');
    utils.baseResponse(res, data, "get to accept batch");
}
let add = async(req, res, next) => {
    let data = await new Batch(req.body).save();
    utils.baseResponse(res, data, "new batch has been created!");
}
let closeBatch = async(req, res, next) => {
    let data = await Batch.findByIdAndUpdate(req.params.id, {status : req.body.status});
    utils.baseResponse(res, data, "Batch has been closed");
}
let drop = async(req, res, next) => {
    let batch = await Batch.findById(req.params.id);
    await Week.deleteMany({batch: batch._id});
    await Lesson.deleteMany({batch: batch._id});
    await Student.deleteMany({batch: batch._id});
    utils.baseResponse(res, data, "Batch has been deleted");
}
module.exports = {
    getToAccept,
    add,
    closeBatch,
    drop,
}
