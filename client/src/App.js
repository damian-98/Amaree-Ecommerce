import React, { useState, useEffect } from "react";
import data from "./components/data/Data";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/router/Routes";
import "./styles/Home.css";
import "./styles/Footer.css";

const App = () => {
  const { productItems } = data;
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Navigationbar size={cartItems.length} />
      <Routes
        productItems={productItems}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
      <Footer />
    </div>
  );
};

export default App;
