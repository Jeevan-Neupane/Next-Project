import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.unsplash.com/photo-1586516612497-350f5995c33d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YSUyMGxpcGF8ZW58MHx8MHx8fDA%3D'
          alt='about image'
          fill
        />
      </div>
    </div>
  );
}

export default AboutPage;
