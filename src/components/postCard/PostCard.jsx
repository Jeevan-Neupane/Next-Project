import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import { getUser } from "@/utils/actions";

const PostCard = async ({ post }) => {
  let id = post.userId.toString();
  const user = await getUser(post.userId);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post?.img}
            alt=''
            fill
            className={styles.img}
          />
        </div>

        <span className={styles.date}>
          {dayjs(post?.createdAt).format("DD.MM.YY")}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link
          className={styles.link}
          href={`blog/${post?.slug}`}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
