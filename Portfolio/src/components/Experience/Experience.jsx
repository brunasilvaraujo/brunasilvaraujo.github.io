import React from "react";

import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";

export const Experience = () => {

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Stacks</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};