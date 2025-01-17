import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
         
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Multitasking Wizard</h3>
              <p>
              I balanced a rigorous Computer Science degree while contributing to impactful projects like a dynamic university chatbot and a lightweight fine-tuning model, proving that I excel under pressure.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solving Mindset</h3>
              <p>
              I thrive on solving real-world problems using innovative technology. Whether it's optimizing an AI model or building a scalable web application, I love challenges that push boundaries.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Coding Adventurer</h3>
              <p>
              I’ve coded across diverse domains—building full-stack applications, automating CI/CD pipelines, and creating AI models—all with a mission to make technology work smarter and faster.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
