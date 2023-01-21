import React from 'react';
import "@styles/OrderItem.scss"
import Bike from './Bike';

const OrderItem = () => {
  return (
    <div class="OrderItem">
          <figure>
          <Bike />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
        </div>
  )
}

export default OrderItem