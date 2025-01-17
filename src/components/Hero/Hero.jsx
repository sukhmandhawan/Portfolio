import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sukhman Dhawan</h1>
        <p className={styles.description}>
        I am a Computer Science graduate passionate about building innovative solutions. With experience in software development, AI, and cloud technologies, I've worked on impactful projects like a lightweight fine-tuning model and a dynamic university chatbot. My skills in Python, Java, and Docker, combined with industry experience at Cognizant, drive my goal to create efficient, scalable solutions. Let’s connect and innovate together!
        </p>
        <a href="mailto:sukhmandhawan88@gmail.com" className={styles.contactBtn}>
          Contact Me via Email
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
