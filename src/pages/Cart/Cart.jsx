import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div>Cart</div>
      {cart.map(item => {
        return <CartItem item={item} key={item.id} />
      })}
    </>
  );
};

export default Cart;
