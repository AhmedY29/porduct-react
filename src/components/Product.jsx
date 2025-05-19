import React from "react";

function Product(props) {
  console.log(props);
  console.log("ss");
  return (
    <div className="product-item">
      <h4>{props.productName}</h4>
      <h2>{props.productPrice}</h2>
      <h5>{props.productDescription}</h5>
    </div>
  );
}

export default Product;
