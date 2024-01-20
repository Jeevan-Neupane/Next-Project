"use server";

import connectDB from "@/db/db";
import { User } from "@/model/user.model";
import bcrypt from "bcryptjs"
const { signIn, signOut } = require("./auth");

const handleGithubLogin = async () => {
    await signIn("github");
};



const handleGithubLogout = async () => {

    await signOut("github");
};
const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        connectDB();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db");

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

const Login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
};


export { handleGithubLogin, handleGithubLogout, register, Login }