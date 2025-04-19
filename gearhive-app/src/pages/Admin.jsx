import React, { useState, useEffect } from "react";
import AddToShop from "../components/AddToShop";
import { API_BASE, IMAGE_BASE } from "../config";
import "./CSS/Admin.css";

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  // ✅ Prompt for password (not for production)
  useEffect(() => {
    const pass = prompt("Enter admin password:");
    if (pass === "yourSecret123") {
      setIsAuthorized(true);
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/products`);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchProducts();
    }
  }, [isAuthorized]);

  const confirmDelete = (product) => {
    setProductToDelete(product);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirmed = async () => {
    if (!productToDelete) return;

    const res = await fetch(`${API_BASE}/api/products/${productToDelete._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProducts(products.filter((p) => p._id !== productToDelete._id));
      setShowDeleteConfirm(false);
      setProductToDelete(null);
      showToast("✅ Product deleted successfully");
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setProductToDelete(null);
  };

  const showToast = (message, duration = 3000) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), duration);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const _id = editingProduct._id;

    const res = await fetch(`${API_BASE}/api/products/${_id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      fetchProducts();
      setEditingProduct(null);
    }
  };

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  return (
    <div className="admin-container">
      {!isAuthorized ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          🔒 Unauthorized
        </p>
      ) : (
        <>
          <h2>Admin Product Manager</h2>
          <button className="add-product-btn" onClick={openAddDialog}>
            + Add New Product
          </button>

          <div className="admin-grid">
            {products.map((p) => (
              <div key={p._id} className="admin-card">
                <img src={`${IMAGE_BASE}${p.image}`} alt={p.name} />
                <h4>{p.name}</h4>
                <p>${p.price.toFixed(2)}</p>
                <p>{p.category}</p>
                <button className="edit-btn" onClick={() => handleEdit(p)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => confirmDelete(p)}>
                  Delete
                </button>
              </div>
            ))}
          </div>

          {showAddDialog && (
            <AddToShop
              closeDialog={closeAddDialog}
              onProductAdded={fetchProducts}
            />
          )}

          {editingProduct && (
            <div className="edit-modal">
              <form onSubmit={handleUpdate} encType="multipart/form-data">
                <h3>Edit Product</h3>
                <input
                  name="name"
                  defaultValue={editingProduct.name}
                  required
                />
                <input
                  name="price"
                  type="number"
                  defaultValue={editingProduct.price}
                  required
                />
                <input name="category" defaultValue={editingProduct.category} />
                <input name="image" type="file" accept="image/*" />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditingProduct(null)}>
                  Cancel
                </button>
              </form>
            </div>
          )}

          {showDeleteConfirm && productToDelete && (
            <div className="delete-modal">
              <div className="modal-content">
                <p>
                  Are you sure you want to delete{" "}
                  <strong>{productToDelete.name}</strong>?
                </p>
                <div className="modal-buttons">
                  <button
                    className="confirm-btn"
                    onClick={handleDeleteConfirmed}
                  >
                    Yes
                  </button>
                  <button className="cancel-btn" onClick={cancelDelete}>
                    No
                  </button>
                </div>
              </div>
            </div>
          )}

          {toastMessage && <div className="toast">{toastMessage}</div>}
        </>
      )}
    </div>
  );
};

export default Admin;
