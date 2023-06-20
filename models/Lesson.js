const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    file : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    course : {
        type: Schema.Types.ObjectId,
        ref: "courses",
    },
    batch : {
        type: Schema.Types.ObjectId,
        ref: "batches",
    },
    week : {
        type: Schema.Types.ObjectId,
        ref: "weeks",
    }, 
    created : {
        type: Date,
        default: Date.now,
    } ,
});

module.exports = Lesson = mongoose.model("lessons", LessonSchema);