"use server";
import { revalidatePath } from "next/cache";
import connectDB from "@/db/db";
import { Post } from "@/model/post.model";
import { User, } from "@/model/user.model";

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

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};


export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectDB();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const addUser = async (prevState, formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        connectDB();
        const newUser = new User({
            username,
            email,
            password,
            img,
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectDB();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const addPost = async (prevState, formData) => {

    const { title, desc, slug, userId, img } = Object.fromEntries(formData);

    try {
        connectDB();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const getPosts = async () => {
    try {
        connectDB();
        const posts = await Post.find();
        console.log(posts);
    } catch (error) {
        console.log(error);
        return { error: "Error while getting post" };
    }
}
export const getPost = async (slug) => {
    try {
        connectDB();
        const post = await Post.find({ slug });
        return post[0];
    } catch (error) {
        console.log(error);
        return { error: "Error while getting post" };
    }
}

export const getUser = async (userId) => {
    try {
        connectDB();
        const user = await User.find({ _id: `${userId}` });

        return user;
    } catch (error) {
        console.log(error);
        return { error: "Error while getting user" }
    }
}

export const findUser=async (email)=>{
    try {
        connectDB();
        const user = await User.find({ email });

        return user;
    } catch (error) {
        console.log(error);
        return { error: "Error while getting user" }
    }
}
export const login = async (prevState, formData) => {
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
  

export { handleGithubLogin, handleGithubLogout, register }