import connectDB from "@/db/db";
import { Post } from "@/model/post.model";
import { NextResponse } from "next/server"
export const GET = async (request, { params }) => {
    const { slug } = params;
    try {
        connectDB();
        const post = await Post.findOne({ slug });
        console.log(post);

        return NextResponse.json(post);

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post")
    }
}
export const DELETE = async (request, { params }) => {
    const { slug } = params;
    try {
        connectDB();
        await Post.deleteOne({ slug });

        return NextResponse.json("Post Deleted");

    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete post")
    }
}