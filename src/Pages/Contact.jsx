import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, subject, message } = form;

    if (!firstname || !lastname || !email || !message) {
      setStatus("⚠ Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setStatus("⏳ Envoi en cours...");

    try {
      const templateParams = {
        name: firstname,
        to_name: firstname,
        title: subject,
        reply_to: email,
        message: message,
        from_name: `${firstname} ${lastname}`,
      };

      await emailjs.send(
        'service_ez48etf',
        'template_t5x3k4n',
        templateParams,
        'ZBosopER8AkskJV6y'
      );

      setStatus("✓ Message envoyé ! Je vous répondrai sous 24h.");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setStatus("⚠ Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <div className="Contact">

      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-eyebrow">Contact</div>
        <h1 className="page-header-title">Me Contacter</h1>
        <p className="page-header-sub">
          Freelance & opportunités professionnelles
        </p>
      </div>

      {/* WRAP */}
      <div className="contact-wrap">

        {/* INFO */}
        <div className="contact-info">

          <p className="contact-intro">
            Vous avez un projet de jeu vidéo ? Parlons-en.
          </p>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-item-label">Localisation</div>
              <div className="contact-item-value">Roanne / Lyon, France</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">
                ethan.faure25@gmail.com
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-item-label">Téléphone</div>
              <div className="contact-item-value">07 69 69 97 75</div>
            </div>
          </div>

          <div className="social-row">
            <a className="social-btn" href="https://github.com/ethanFAURE" target="_blank">GH</a>
            <a className="social-btn" href="https://ethanfaure.itch.io" target="_blank">io</a>
          </div>

        </div>

        {/* FORM */}
        <div className="contact-form">

          <div className="form-row">
            <input
              id="firstname"
              className="form-input"
              placeholder="Prénom"
              value={form.firstname}
              onChange={handleChange}
            />

            <input
              id="lastname"
              className="form-input"
              placeholder="Nom"
              value={form.lastname}
              onChange={handleChange}
            />
          </div>

          <input
            id="email"
            className="form-input"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            id="subject"
            className="form-input"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            id="message"
            className="form-textarea"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />

          <button className="form-submit" onClick={handleSubmit}>
            ▶ Envoyer le message
          </button>

          {status && (
            <div className="submit-msg">
              {status}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}