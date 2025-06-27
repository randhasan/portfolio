import React, { useState } from 'react';
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xdkzgboo", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setMessage("");
          form.reset();
          alert("Message sent!");
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("Network error. Try again later."));
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch!</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <p className="contact__details">Let's chat! Send me an email.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact__form-div--message">
            <textarea
              name="message"
              className="contact__form-input message"
              placeholder="Write your message"
              maxLength={1000}
              rows={12}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="char-count">{message.length} / 1000</div>
          </div>

          <div className="contact__form-div">
            <button type="submit" className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;