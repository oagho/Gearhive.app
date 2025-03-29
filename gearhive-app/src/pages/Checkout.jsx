import React from "react";
import "../pages/CSS/Checkout.css";

const Checkout = () => {
  return (
    <div>
      <main>
        <section className="checkout">
          <h1>Checkout</h1>
          <form action="#" method="post">
            <h2>Billing Details</h2>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required />

            <label htmlFor="zip">Zip Code:</label>
            <input type="text" id="zip" name="zip" required />

            <h2>Payment Details</h2>
            <label htmlFor="card">Card Number:</label>
            <input type="text" id="card" name="card" required />

            <label htmlFor="expiry">Expiry Date:</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM/YY"
              required
            />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />

            <button type="submit" className="btn">
              Place Order
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
