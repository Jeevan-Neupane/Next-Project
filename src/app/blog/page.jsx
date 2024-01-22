import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

async function BlogPage() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div
            className={styles.post}
            key={post._id}
          >
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default BlogPage;
