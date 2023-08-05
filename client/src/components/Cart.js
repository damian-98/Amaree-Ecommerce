import React from "react";
import { BsCartXFill } from "react-icons/bs";
import "../styles/Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const cartItem = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  const cartTotal = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  const handleCheckout = async () => {
    await fetch("http://localhost:5005/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const CartDisplay = () => (
    <div className="cart-items">
      {cartItems.length >= 1 && (
        <h1 className="cart-items-header">Cart Items </h1>
      )}
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-cart-button "
            onClick={() => handleCartClearance(cartItems)}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">
          {" "}
          <h4 className="cart-empty-sentence">
            {" "}
            Your Beauty Bundles Cart is Empty
          </h4>
        </div>
      )}
      {cartItems.length === 0 && (
        <div className="shopping-cart-logo">
          <BsCartXFill />
        </div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>{" "}
              <span className="cart-items-quantity"> {item.quantity}</span>
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>{" "}
            </div>

            <div className="cart-items-price">
              {cartItem.format(item.price)}
            </div>
          </div>
        ))}
      </div>
      {totalPrice !== 0 && (
        <div className="cart-items-total-price-name">Total Price</div>
      )}
      {totalPrice !== 0 && (
        <div className="cart-items-total-price">
          {cartTotal.format(totalPrice)}
        </div>
      )}
      <div className="checkout">
        {totalPrice !== 0 && (
          <button onClick={() => handleCheckout()} className="checkout-btn ">
            checkout
          </button>
        )}
      </div>
    </div>
  );

  return <CartDisplay />;
};

export default Cart;
