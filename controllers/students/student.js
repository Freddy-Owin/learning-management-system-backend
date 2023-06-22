const { baseResponse } = require("../../helper/utils");
const Student = require("../../models/Student");
const Week = require("../../models/Week");

let getCourse = async(req, res, next) => {
    let courses = await Student.find({user: req.params.user}).select("course").populate("course");
    baseResponse(res, courses, "All Courses");
}

let getWeek = async(req, res, next) => {
    let student = await Student.findOne({user: req.params.user, course: req.params.course}).populate("batch")
    let week = await Week.find({batch: student.batch._id})
    let data = {
        batch:student.batch.name,
        week: week,
    }
    baseResponse(res, data, "Related Weeks");
}

module.exports = {
    getCourse,
    getWeek
}