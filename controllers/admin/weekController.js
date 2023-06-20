const utils = require("../../helper/utils");
const Lesson = require("../../models/Lesson");
const Week = require("../../models/Week");

let all = async(req, res, next) => {
    let data = await Week.find({course : req.params.course, batch : req.params.batch}).populate("course batch").select("-__v -created");
    utils.baseResponse(res, data, "Week has been created!");
}
let add = async(req, res, next) => {
    let week = await Week.findOne({course: req.body.course, batch: req.body.batch}).populate("course batch").sort({_id: -1}).limit(1);
    if(week) {
        let number = Number(week.name.split(" ")[1]) + 1;
        req.body.name = "Week " + number;
        let data = await new Week(req.body).save();
        utils.baseResponse(res, data, "New Week has been created!");
    } else {
        req.body.name = "Week 1";
        let data = await new Week(req.body).save();
        utils.baseResponse(res, data, "New Week has been created!");
    }
}
let drop = async(req, res, next) => {
    let data = await Week.findByIdAndDelete(req.params.id);
    await Lesson.deleteMany({week: data._id});
    utils.baseResponse(res, data, "Week has been deleted");
}

module.exports = {
    all,
    add,
    drop
}