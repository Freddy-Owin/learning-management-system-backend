const { baseResponse } = require("../../helper/utils");
const Application = require("../../models/Application");
const Course = require("../../models/Course");
const Enrollment = require("../../models/Enrollment");
const Student = require("../../models/Student");
const User = require("../../models/User");

let all = async(req, res, next) => {
    let courses = await Course.find();
    let students = await Student.find();
    let enrollments = await Enrollment.find();
    let applications = await Application.find();
    let users = await User.find();
    // let instructors = user.map()
    let instructors = users.filter(data => {
        return data.user_id.split(" ")[0] == "I";
    })
    let data = {
        students : students.length,
        enrollments : enrollments.length,
        applications : applications.length,
        instructors : instructors.length
    }
    baseResponse(res, data, "All Courses");
}

module.exports = {
    all,
}