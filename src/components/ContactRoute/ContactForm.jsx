import React, { useState, useRef } from "react";
import "../../css/ContactRoute/ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [msg, setMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.current.name.value.trim() !== "" &&
      form.current.mail.value.trim() !== "" &&
      form.current.message.value.trim() !== ""
    ) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICEID,
          process.env.REACT_APP_EMAILJS_TEMPLATEID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLICID
        )
        .then(
          () => {
            setMsg("Message sended.");
            setTimeout(() => {
              setMsg("");
              form.current.name.value = "";
              form.current.mail.value = "";
              form.current.message.value = "";
            }, 2000);
          },
          (error) => {
            alert(error.text);
          }
        );
    } else {
      alert("Complete the fields before send.");
    }
  };

  return (
    <>
      <form className="contactform" ref={form} onSubmit={handleSubmit}>
        <h4 className="contactform-title">Send us a question</h4>
        <label htmlFor="name" className="contactform-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="contactform-input"
        />
        <label htmlFor="mail" className="contactform-label">
          Mail
        </label>
        <input
          type="mail"
          name="mail"
          id="mail"
          className="contactform-input"
        />
        <label htmlFor="message" className="contactform-label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="contactform-textarea"
        ></textarea>
        <button className="contactform-button">Send</button>
      </form>

      {/**  MODAL  **/}
      {msg && (
        <section className="contactform-modal">
          <div className="contactform-modal_signal">
            <p className="contactform-modal_signal--msg">
              Message sended successfully
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactForm;
