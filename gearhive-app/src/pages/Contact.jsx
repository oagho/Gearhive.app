import React, { useState } from "react";
import "../pages/CSS/Contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f333a49-9f02-407a-a9c7-4712809fb5c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <main>
        <section className="contact">
          <h1>Contact Us</h1>
          <p>
            Have any questions? Reach out to us and we will get back to you as
            soon as possible.
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> support@gearhive.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (800) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Gear Street, Tool City, TX 75001
            </p>
          </div>
          <div className="contact-section">
            <div className="form-container">
              <form onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit" className="btn">
                  Submit Form
                </button>
                <p>{result}</p>
              </form>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.462430002768!2d-96.8221931848146!3d32.776271180972196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9915b745c05d%3A0x84d768f3e7a5fd74!2s123%20Gear%20St%2C%20Dallas%2C%20TX%2075202!5e0!3m2!1sen!2sus!4v1710941880916!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="social-media">
          <h2>Follow Us</h2>
          <p>
            Stay connected with us on social media for updates and promotions.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
