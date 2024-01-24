import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blogs</div>
      <div className={styles.text}>Jeevan Neupane © All rights reserved.</div>
    </div>
  );
};

export default Footer;
