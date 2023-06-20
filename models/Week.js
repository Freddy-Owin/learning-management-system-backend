const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    course : {
        type: Schema.Types.ObjectId,
        ref: "courses"
    },
    batch : {
        type: Schema.Types.ObjectId,
        ref: "batches"
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Week = mongoose.model("weeks", WeekSchema);