import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,

    },
    img: {
        type: String,

    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export const User = models?.User || model("User", userSchema);