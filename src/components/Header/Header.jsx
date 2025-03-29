import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const {amount} = useContext(CartContext);
  return (
    <div>{amount}</div>
  )
}

export default Header