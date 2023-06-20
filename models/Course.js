const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    image: {
        type: String, 
    },
    status : {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    age : {
        type: String,
        required: true,
    },
    fee : {
        type: Number,
        required: true,
    },
    created : {
        type: Date, 
        default: Date.now,
    }
});

module.exports = Course = mongoose.model("courses", CourseSchema);