import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>Where creativity meets technology</h1>
        <p className={styles.desc}>
          Welcome to WonderWords, where creativity meets technology. We're
          passionate about empowering individuals to share their stories
          effortlessly. Discover a seamless blogging experience that transforms
          your thoughts into captivating narratives. Join us on this journey of
          expression and connection
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1 K+</h1>
            <p>Followers</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Blogs</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Daily Users</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src='/about.svg'
          alt='About Image'
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
