const { baseResponse } = require("../../helper/utils");
const Batch = require("../../models/Batch");
const Enrollment = require("../../models/Enrollment");
const Student = require("../../models/Student");

let accept = async(req, res, next) => {
    let data = await new Student(req.body).save();
    baseResponse(res, data, "Student accepted!");
}
let all = async(req, res, next) => {
    let data = await Student.find().populate("course batch user").sort({_id: -1});
    baseResponse(res, data, "Students");
}
module.exports = {
    accept,
    all
}