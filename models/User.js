const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    cv: {
        type: String,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "roles",
    },
    phone: {
        type: String,
    },
    education: {
        type: String,
    },
    address: {
        type: String,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);