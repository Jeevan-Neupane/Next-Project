import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Write Thought,Experiences and Feelings</h1>
        <p className={styles.desc}>
          Explore the thoughts,feelings and experiences of others and gain knowledge from it.
        </p>
        <div className={styles.buttons}>
          <a href="/login" className={styles.button} >Read Blogs</a>
          <a href="/contact" className={styles.button}>Contact</a>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.svg" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
