import React from "react";

import styles from "./Hero.module.css";
import hero from "../../../assets/hero/hero2.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou a Bruna</h1>
        <p className={styles.description}>
          Sou uma desenvolvedora FullStack dedicada e criativa, com uma paixão especial pelo Front-End. Estou sempre buscando aprender e crescer como profissional.
        </p>
        <a href="mailto:bruna-nascimento_@hotmail.com" className={styles.contactBtn}>
          Contato
        </a>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};