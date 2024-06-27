import React, { useEffect } from "react";
import "./display.css";
import { useState } from "react";
import { getAllProducts } from "../Data/API/api";
import ProductCard from "./ProductCard";

function DisplayCard({ heading, category }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProduct();
  });
  const fetchProduct = async () => {
    const res = await getAllProducts(category);
    setProduct(res.data);
  };
  return (
    <div className="displayContainer">
      <div className="box">
        <h1 className="displayHeading">{heading}</h1>
        <div className="products">
          {product?.map((item) => (
            <ProductCard title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayCard;
