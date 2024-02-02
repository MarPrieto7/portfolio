import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, Soy Mar</h1>
        <p className={styles.description}>
        una desarrolladora web con 1 año de experiencia, pero capacitada en tecnologías avanzadas como React, y Node.js, además de HTML, CSS, JavaScript.<br></br>
        <br></br>Organizada y con capacidad de multitarea, con experiencia en programación de proyectos, mejora de diseños, verificación del código y con capacidad para cumplir con los objetivos de compatibilidad y al mismo tiempo cumplir y superar las demandas del cliente.
        <br></br><br></br>Mi enfoque se centra en diseñar y ejecutar soluciones tecnológicas innovadoras que optimizan la eficiencia y la experiencia del usuario. <br></br>
        En la actualidad estoy buscando un empleo en el que siga ampliando mi experiencia y que me permita sumir nuevas responsabilidades.
        </p>
        <a href="mailto:mmarprietogarcia@gmail.com" className={styles.contactBtn}>
          Contacto
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Imagen mía"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
