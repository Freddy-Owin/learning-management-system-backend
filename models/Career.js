const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CareerSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    jd : {
        type: String,
        required: true,
    },
    jr : {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true
    },
    salary_period: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
    },
    vacancy: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
    },
    employment_status: {
        type: String, 
        required: true,
    },
    published_on: {
        type: Date,
        default: Date.now,
    },
    deadline: {
        type: Date,
        required: true
    },
});

module.exports = Career = mongoose.model("careers", CareerSchema);