// En tu archivo Contact.jsx
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsFormSubmitted(true);
    
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>Si soy el perfil que estás buscando</p>
        <h2>Contáctame!</h2>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <label>
            Nombre:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Apellidos:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {isFormSubmitted && (
          <p className={styles.successMessage}>
            Formulario de contacto enviado con éxito!
          </p>
        )}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
          />
          <a href="mailto:mmarprietogarcia@gmail.com">
            mmarprietogarcia@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mar-prieto-garcia">
            linkedin.com/in/mar-prieto-garcia
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
          />
          <a href="https://www.github.com/MarPrieto7">
            github.com/MarPrieto7
          </a>
        </li>
      </ul>
    </footer>
  );
};
