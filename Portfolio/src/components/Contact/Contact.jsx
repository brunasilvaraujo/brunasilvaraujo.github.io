import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import gitHub from "../../../assets/contact/githubIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:bruna-nascimento_@hotmail.com">bruna-nascimento_@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/brunasilvaraujo/">linkedin.com/in/brunasilvaraujo/</a>
        </li>
        <li className={styles.link}>
          <img src={gitHub} alt="Github icon" />
          <a href="https://www.github.com/brunasilvaraujo">github.com/brunasilvaraujo</a>
        </li>
      </ul>
    </footer>
  );
};