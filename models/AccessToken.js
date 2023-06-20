const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccessTokenSchema = new Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    token : {
        type: String,
    },
    created : {
        type: Date,
        default: Date.now,
    }
});

module.exports = AccessToken = mongoose.model("access_tokens", AccessTokenSchema);