import React from "react";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com", icon: "facebook.png" },
  { name: "Twitter", url: "https://www.twitter.com", icon: "twitter.png" },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: "instagram.png",
  },
  { name: "LinkedIn", url: "https://www.linkedin.com", icon: "linkedin.png" },
];

const SocialMedia = () => {
  return (
    <section className="social-media">
      <h2>Follow Us</h2>
      <p>Stay connected with us on social media for updates and promotions.</p>
      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/" + social.icon}
              alt={social.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
