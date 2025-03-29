import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      const amount = cart.reduce((accumulator, item) => {
        return accumulator + item.amount;
      }, 0);
      setAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0);
    setTotal(total);
  })

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const cItem = cart.find((item) => item.id === id);
    if (cItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cItem.amount <= 1) {
      removeFromCart(id);
    }
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        increaseAmount,
        decreaseAmount,
        addToCart,
        removeFromCart,
        total,
        amount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
