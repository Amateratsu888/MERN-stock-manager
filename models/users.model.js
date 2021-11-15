const mongoose = require("mongoose");
const { isEmail } = require("validator")

const usersSchema = new mongoose.Schema(
    {
    login: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15,
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: [isEmail],
    },

    role: {
        type: String,
        required: true,
        
    },
    },
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("User", usersSchema);