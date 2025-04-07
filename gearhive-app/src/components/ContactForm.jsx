import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f333a49-9f02-407a-a9c7-4712809fb5c0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Submission failed. Please try again.");
    }
  };

  return (
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
  );
};

export default ContactForm;
