import React from "react";

const Cart = ({
  cartItems,
  cartTotal,
  updateQuantity,
  removeFromCart,
  onCheckout,
}) => (
  <div className="cart-section">
    <h2>Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <table className="cart-table">
        <thead>
          <tr>
            <th align="left">Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td align="center">${item.price.toFixed(2)}</td>
              <td align="center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  style={{ width: 50 }}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                />
              </td>
              <td align="center">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="cart-actions">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    {cartItems.length > 0 && (
      <div className="cart-total">
        Total: ${cartTotal.toFixed(2)}
        <br />
        <button onClick={onCheckout}>Checkout</button>
      </div>
    )}
  </div>
);

export default Cart;
