const { baseResponse } = require("../../helper/utils");
const Lesson = require("../../models/Lesson");
const Student = require("../../models/Student");
const Week = require("../../models/Week");

let getCourse = async(req, res, next) => {
    let courses = await Student.find({user: req.params.user}).select("course").populate("course");
    baseResponse(res, courses, "All Courses");
}

let getWeek = async(req, res, next) => {
    let student = await Student.findOne({user: req.params.user, course: req.params.course}).populate("batch");
    let week = await Week.find({batch: student.batch._id});
    let data = {
        batch:student.batch.name,
        week: week,
    }
    baseResponse(res, data, "Related Weeks");
}

let getLesson = async(req, res, next) => {
    let week = await Week.findById(req.params.week);
    let lessons = await Lesson.find({week: req.params.week});
    let data = {week: week, lessons: lessons};
    baseResponse(res, data, "All Lessons for related week");
}

let getDetailLesson = async(req, res, next) => {
    let lesson = await Lesson.findById(req.params.id).populate("course batch week");
    baseResponse(res, lesson, "Detail Lesson")
}

module.exports = {
    getCourse,
    getWeek,
    getLesson,
    getDetailLesson,
}