import React from "react";

const CheckoutForm = ({
  checkoutData,
  handleCheckoutChange,
  handleCheckoutSubmit,
  onCancel,
}) => (
  <div className="checkout-form">
    <h2>Checkout</h2>
    <form onSubmit={handleCheckoutSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={checkoutData.name}
          onChange={handleCheckoutChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={checkoutData.email}
          onChange={handleCheckoutChange}
          required
        />
      </label>
      <label>
        Address:
        <textarea
          name="address"
          value={checkoutData.address}
          onChange={handleCheckoutChange}
          required
        />
      </label>
      <button type="submit">Place Order</button>
      <button type="button" className="checkout-cancel" onClick={onCancel}>
        Cancel
      </button>
    </form>
  </div>
);

export default CheckoutForm;
