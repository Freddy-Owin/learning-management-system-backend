const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }, 
    course: {
        type: Schema.Types.ObjectId,
        ref: "courses"
    },
    batch: {
        type: Schema.Types.ObjectId,
        ref: "batches",
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Student = mongoose.model("students", StudentSchema);