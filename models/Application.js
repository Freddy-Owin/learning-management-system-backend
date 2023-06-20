const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
    },
    cv: {
        type: String,
        required: true,
    },
    career: {
        type: Schema.Types.ObjectId,
        ref: "careers",
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Application = mongoose.model("applications", ApplicationSchema);