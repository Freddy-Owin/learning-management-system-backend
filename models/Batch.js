const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BatchSchema = new Schema({
    name : {
        type: String,
        required: true
    }, 
    course : {
        type: Schema.Types.ObjectId,
        ref: "courses"
    },
    instructors: [
        {
            type: Schema.Types.ObjectId,
            ref: "users",
        }
    ],

    date: {
        type: String,
        required: true,
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Batch = mongoose.model("batches", BatchSchema);