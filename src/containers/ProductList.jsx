import React, { useEffect, useState } from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API);
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
