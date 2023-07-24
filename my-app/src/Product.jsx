import React from "react";

const Product = ({ product }) => (
  <div className="product">
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "200px", height: "200px" }}
    />
    <h3>{product.name}</h3>
  </div>
);

export default Product;
