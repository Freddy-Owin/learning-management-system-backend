let collections = {
    user : require('../models/User'),
    course : require("../models/Course"),
    application: require("../models/Application"),
    role : require("../models/Role"),
    career: require("../models/Career"),
    batch: require("../models/Batch"),
    week: require("../models/Week"),
    lesson: require("../models/Lesson"),
    student: require("../models/Student"),
    access_token: require("../models/AccessToken"),
    enrollment: require("../models/Enrollment"),
};

module.exports = collections;