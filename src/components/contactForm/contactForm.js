import React from "react";
import "./contactform.css";

const ContactForm = () => {
  return (
    <div className="container" style={{ padding: 0 }}>
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="row">
          <div className="col-md-6">
            <input type="text" name="name" placeholder="Ονομα" />
          </div>
          <div className="col-md-6">
            <input type="text" name="email" placeholder="Email" />
          </div>
        </div>
        <textarea name="message" placeholder="Μηνυμα" rows="4" />
        <button className="button" type="submit">
          Αποστολή{" "}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
