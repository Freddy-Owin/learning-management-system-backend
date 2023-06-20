const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "courses",
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    }, 
    created: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Enrollment = mongoose.model("enrollments", EnrollmentSchema);