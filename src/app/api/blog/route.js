import connectDB from "@/db/db";
import { Post } from "@/model/post.model";
import { NextResponse } from "next/server"
export const GET = async (request) => {

    try {
        connectDB();
        const posts = await Post.find();

        return NextResponse.json(posts);

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts")
    }
}