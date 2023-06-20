const gallery = require('../../helper/gallery');
const utils = require('../../helper/utils');
const Role = require('../../models/Role');
const User = require('../../models/User');

let all = async(req, res, next) => {
    let role = await Role.findOne({name : "instructor"})
    let data = await User.find({role: role._id}).sort({_id: -1});
    utils.baseResponse(res, data, "All Instructors");
}

module.exports = {
    all,
}