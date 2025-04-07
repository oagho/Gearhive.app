import React from "react";
import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import "../pages/CSS/Contact.css";

function Contact() {
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
            <ContactForm />
            <Map />
          </div>
        </section>

        <SocialMedia />
      </main>
    </div>
  );
}

export default Contact;
