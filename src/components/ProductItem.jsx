import React from "react";
import "@styles/ProductItem.scss";
import Bike from "./Bike";
import btAddCart from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <Bike />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={btAddCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
