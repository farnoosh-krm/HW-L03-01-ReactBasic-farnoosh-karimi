import React from "react";
import ProductList from "./ProductList";

const ProductCard = ({ ProductSend }) => {
  return (
    <div className="m-5 grid grid-cols-1">
      {ProductSend.map((product) => {
        return (
          <ProductList
            key={product.name}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default ProductCard;
