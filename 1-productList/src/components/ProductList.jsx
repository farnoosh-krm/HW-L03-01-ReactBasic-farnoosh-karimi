import React from "react";

const ProductList = ({ name, price, description }) => {
  return (
    <div className="m-5 p-3 leading-6.5 border-solid border-10 border-white shadow-2xl rounded-2xl bg-purple-200">
      <h3 className="font-bold text-gray-700">productName : {name}</h3>
      <p className="text-gray-600">price : {price}</p>
      <p className="text-gray-700">description : {description}</p>
    </div>
  );
};

export default ProductList;
