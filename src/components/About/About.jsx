import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Formación</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Yo, sonriendo"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>DESARROLLO WEB FULL STACK + CIBERSEGURIDAD</h3><br></br>
              <h4>Factoría F-5.2024 (1100h).Madrid</h4>
              <p>Adquisición de conocimientos, en el desarrollo de funciones front-end y back-end.<br></br>
              Configurar la seguridad y prevenir ataques.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Tecn. Acompañamiento en Procesos de Duelo y Muerte</h3><br></br>
              <h4>Universidad Europea Miguel de Cervantes.2023 (6ECTS). Madrid</h4>
              <p> Adquisicion, aprendizaje de conocimientos que profundiza en el acompañamiento a personas en procesos de duelo y/o en tránsito hacia la muerte.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Especialista en Terapia con el Arte</h3><br></br>
              <h4>Universidad Europea Miguel de Cervantes.2022 (6ECTS). Madrid</h4>
              <p>Especialista que profundiza en la expresión artística como vehículo terapútico y de autodescubrimiento.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
