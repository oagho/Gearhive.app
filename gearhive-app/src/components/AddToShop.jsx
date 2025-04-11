import React, { useState } from "react";
import "./CSS/Dialog.css";

const AddToShop = ({ closeDialog, onProductAdded }) => {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);

    const response = await fetch("http://localhost:3001/api/products", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setResult("✅ Product added successfully.");
      e.target.reset();
      setPreview(null);
      if (onProductAdded) onProductAdded();
      closeDialog();
    } else {
      setResult("❌ Failed to add product.");
    }
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="add-dialog" className="w3-modal" style={{ display: "block" }}>
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={closeDialog}
          >
            &times;
          </span>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h2>Add Product to Shop</h2>

            <p>
              <label htmlFor="name">Product Name:</label>
              <input
                type="text"
                name="name"
                minLength={3}
                placeholder="Enter product name"
                required
              />
            </p>

            <p>
              <label htmlFor="price">Price ($):</label>
              <input
                type="number"
                name="price"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
              />
            </p>

            <p>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                name="category"
                placeholder="e.g., Tools, Safety, HVAC"
                required
              />
            </p>

            <p>
              <label htmlFor="image">Upload Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImagePreview}
                required
              />
            </p>

            {preview && (
              <p>
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    maxWidth: "120px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  }}
                />
              </p>
            )}

            <p>
              <button type="submit" className="btn">
                Submit
              </button>
            </p>

            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: result.includes("✅") ? "green" : "red",
              }}
            >
              {result}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToShop;
