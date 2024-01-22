import Image from "next/image";
import styles from "./singlePost.module.css";
import { getPost } from "@/utils/actions";
import dayjs from "dayjs";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

async function SingleBlogPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post?.img}
          fill
          alt='img'
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src='https://images.unsplash.com/photo-1704913427603-6cb736d51f05?q=80&w=3265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='img'
            className={styles.avatar}
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jeevan Neupane</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {dayjs(post?.createdAt).format("DD-MM-YY")}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
