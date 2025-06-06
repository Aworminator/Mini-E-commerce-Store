import React, { useState } from "react";
import "./App.css";
import PRODUCTS from "./Products";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import OrderConfirmation from "./OrderConfirmation";

function App() {
  const [cart, setCart] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: prev[product.id]
        ? { ...prev[product.id], quantity: prev[product.id].quantity + 1 }
        : { ...product, quantity: 1 },
    }));
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  // Adjust quantity
  const updateQuantity = (productId, qty) => {
    if (qty < 1) return;
    setCart((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], quantity: qty },
    }));
  };

  // Handle checkout form change
  const handleCheckoutChange = (e) => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };

  // Handle checkout submit
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setCart({});
    setShowCheckout(false);
  };

  const cartItems = Object.values(cart);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="App app-container">
      <header className="main-header">
        <h1 className="main-title">
          <span role="img" aria-label="store">
            🛒
          </span>{" "}
          Mini E-commerce Store
        </h1>
        <p className="main-subtitle">
          Shop the latest tech gadgets and accessories!
        </p>
      </header>

      <ProductList products={PRODUCTS} onAddToCart={addToCart} />

      <Cart
        cartItems={cartItems}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onCheckout={() => setShowCheckout(true)}
      />

      {showCheckout && (
        <CheckoutForm
          checkoutData={checkoutData}
          handleCheckoutChange={handleCheckoutChange}
          handleCheckoutSubmit={handleCheckoutSubmit}
          onCancel={() => setShowCheckout(false)}
        />
      )}

      {orderPlaced && <OrderConfirmation />}
    </div>
  );
}

export default App;
