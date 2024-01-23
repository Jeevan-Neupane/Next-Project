import Image from "next/image";
import styles from "./singlePost.module.css";
import { getPost, getUser } from "@/utils/actions";
import dayjs from "dayjs";

async function SingleBlogPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  console.log(post);

  const user = await getUser(post.userId);
  console.log(user);

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
            src={user[0]?.img}
            alt='img'
            className={styles.avatar}
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{user[0].username}</span>
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
