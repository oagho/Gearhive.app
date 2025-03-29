import React, { useState, useEffect } from "react";
import "../pages/CSS/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    updateTotal(storedCart);
  }, []);

  const updateTotal = (cart) => {
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  };

  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    if (quantity <= 0) newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    updateTotal(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    updateTotal(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <main>
        <section className="cart">
          <h1>Your Shopping Cart</h1>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(index, parseInt(e.target.value))
                    }
                  />
                  <button onClick={() => removeItem(index)} className="btn">
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <a href="/checkout" className="btn">
              Proceed to Checkout
            </a>
            <button onClick={clearCart} className="btn">
              Clear Cart
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
