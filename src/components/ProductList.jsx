import React from "react";
import Product from "./Product";

function ProductList() {
  let productList = [
    {
      name: "Product 1",
      price: 29.99,
      description: "Description for Product 1",
    },
    {
      name: "Product 2",
      price: 39.99,
      description: "Description for Product 2",
    },
    {
      name: "Product 3",
      price: 49.99,
      description: "Description for Product 3",
    },
    {
      name: "Product 4",
      price: 59.99,
      description: "Description for Product 4",
    },
    {
      name: "Product 5",
      price: 69.99,
      description: "Description for Product 5",
    },
  ];

  return (
    <div className="product-section">
      {productList?.map((product, index) => {
        return (
          <Product
            key={index}
            productName={product.name}
            productPrice={product.price}
            productDescription={product.description}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
