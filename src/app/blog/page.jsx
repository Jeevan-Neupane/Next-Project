import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPost, getPosts } from "@/utils/utils";

async function BlogPage() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}

export default BlogPage;
