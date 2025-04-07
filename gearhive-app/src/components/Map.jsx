import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Gear Hive Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.462430002768!2d-96.8221931848146!3d32.776271180972196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9915b745c05d%3A0x84d768f3e7a5fd74!2s123%20Gear%20St%2C%20Dallas%2C%20TX%2075202!5e0!3m2!1sen!2sus!4v1710941880916!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "5px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
