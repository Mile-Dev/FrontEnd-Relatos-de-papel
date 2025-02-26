import { useState, useCallback } from "react";

const useCart = (initialCart = []) => {
  const [cart, setCart] = useState(initialCart);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const incrementQuantity = useCallback((product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decrementQuantity = useCallback((product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  const removeFromCart = useCallback((product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }, []);

  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cart]);

  return {
    cart,
    setCart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    calculateTotal,
  };
};

export default useCart;
