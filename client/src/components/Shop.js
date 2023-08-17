import React from "react";
// import Select from "react-select";
import "../styles/Shop.css";

const Shop = ({ productItems, handleAddProduct }) => {
  const product = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  // const options = [
  //   { value: "16 ", label: "16" },
  //   { value: "18", label: "18" },
  //   { value: "20", label: "20" },
  //   { value: "24", label: "24" },
  //   { value: "26", label: "26" },
  //   { value: "28", label: "28" },
  //   { value: "30", label: "30" },
  // ];

  // const customStyles = {
  //   option: (styles, state) => ({
  //     ...styles,
  //     color: state.isSelected ? "pink" : "pink",
  //     backgroundColor: state.isSelected ? "black" : "",

  //     "&:hover": {
  //       backgroundColor: state.isSelected ? "black" : "black",
  //     },
  //     cursor: "pointer",
  //   }),
  //   control: (styles) => ({
  //     ...styles,
  //     cursor: "pointer",
  //   }),
  // };

  return (
    <div className="product-page">
      <div className="products">
        {productItems.map((productItem) => (
          <div key={productItem.id} className="card ">
            <div className="rows">
              <img
                className="product-image"
                src={productItem.image}
                alt={productItem.name}
              />
            </div>
            <div>
              <h3 className="product-name">{productItem.name}</h3>
            </div>
            <div className="product-price">
              {product.format(productItem.price)}
            </div>{" "}
            {/* <div className="select-dropdown">
              <Select
                placeholder="Select Size"
                options={options}
                styles={customStyles}
              />
            </div> */}
            <div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(productItem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
