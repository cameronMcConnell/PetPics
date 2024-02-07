import { useState } from 'react';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../important/important.js';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  /*
  **  yourEmail: string: User submitted email
  **  message: string: User submitted message
  **  status: string: controls render of html and content
  */
  const [yourEmail, setYourEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Handle sending email using emailjs library
  const sendEmail = (e) => {
    e.preventDefault();

    if (!yourEmail || !message) {
      setStatus("Please fill in all the fields.");
      return;
    }

    // Service uses ecchi gmail to send email to monitored account
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: yourEmail, message: message },
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent:", response);
          setStatus("Email sent successfully!");
          resetForm();
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  // Update props after successful response
  const resetForm = () => {
    setYourEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="email-form-container">
        <h2 className="form-title">Email Form</h2>
        <form className="email-form" onSubmit={sendEmail}>
          <label className="form-label" htmlFor="toEmail">
            Your Email:
          </label>
          <input
            type="email"
            id="toEmail"
            value={yourEmail}
            onChange={(e) => setYourEmail(e.target.value)}
            onClick={() => setStatus("")}
            required
            className="form-input"
          />

          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onClick={() => setStatus("")}
            required
            className="form-textarea"
          ></textarea>

          <button type="submit" className="form-button">
            Send Email
          </button>
        </form>

        {status && <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
      </div>
    </div>
  );
}

export default Contact;