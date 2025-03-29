import React from "react";
import "../pages/CSS/Contact.css";

const Contact = () => {
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

          <div className="container">
            <form>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                required
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                required
              />

              <label htmlFor="country">Country</label>
              <select id="country" name="country" required>
                <option value="">Select your country</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                required
              ></textarea>

              <input type="submit" value="Submit" className="btn" />
            </form>
          </div>
        </section>
        <section class="social-media">
          <h2>Follow Us</h2>
          <p>
            Stay connected with us on social media for updates and promotions.
          </p>
          <div class="social-icons">
            <a href="#">
              <img src="images/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="images/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="images/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
