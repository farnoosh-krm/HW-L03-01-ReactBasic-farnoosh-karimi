/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { name: "Laptop", price: 999, description: "High-performance laptop" },
    { name: "Phone", price: 699, description: "Latest smartphone" },
    {
      name: "Headphones",
      price: 199,
      description: "Noise-canceling headphones",
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 m-5">Product List:</h1>
      <ProductCard ProductSend={products} />
    </>
  );
}

export default App;
