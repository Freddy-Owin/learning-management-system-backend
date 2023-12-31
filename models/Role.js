const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    created: {
        type: Date,
        default: Date.now
    }, 
});

module.exports = Role = mongoose.model("roles", RoleSchema);