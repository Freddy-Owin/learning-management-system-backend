const utils = require("../../helper/utils");
const Role = require("../../models/Role");

let all = async(req, res, next) => {
    let data = await Role.find();
    utils.baseResponse(res, data, "All Roles");
}
let add = async(req, res, next) => {
    let data = await new Role(req.body).save();
    utils.baseResponse(res, data, "Role has been added!");
}
let get = async(req, res, next) => {
    let data = await Role.findById(req.params.id);
    utils.baseResponse(res, data, "Role!");
}
let patch = async(req, res, next) => {
    let data = await Role.findByIdAndUpdate(req.params.id);
    utils.baseResponse(res, data, "Role has been updated!");
}
let drop = async(req, res, next) => {
    let data = await Role.findByIdAndDelete(req.params.id);
    utils.baseResponse(res, data, "Role has been deleted!");
}

module.exports = {
    all, add, get, patch, drop
}