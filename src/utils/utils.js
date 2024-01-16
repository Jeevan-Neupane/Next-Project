import connectDB from "@/db/db";
import { Post } from "@/model/post.model"
import { User } from "@/model/user.model";

//*We will use the routes rather than these things

export const getPosts = async () => {
    try {
        connectDB();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log("Error while getting posts");
        throw new Error("Failed to Fetch Posts");
    }
}

export const getPost = async (slug) => {
    try {
        connectDB();
        const post = Post.find({ slug });
        return post;
    } catch (error) {
        console.log("Error while getting posts");
        throw new Error("Failed to Fetch single Post");
    }
}
export const getUser = async (userId) => {
    try {
        connectDB();
        const user = User.findById({ userId });
        return user;
    } catch (error) {
        console.log("Error while getting posts");
        throw new Error("Failed to Fetch User ");
    }
}

export const getUsers = async () => {
    try {
        connectDB();
        const users = User.find();
        return users;
    } catch (error) {
        console.log("Error while getting posts");
        throw new Error("Failed to Fetch Users ");
    }
}

