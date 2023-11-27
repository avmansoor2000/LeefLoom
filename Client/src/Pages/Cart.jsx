import React from 'react';
import { useCart } from '../Components/Context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
