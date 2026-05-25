

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const currentUser = JSON.parse(
    localStorage.getItem("foodryCurrentUser")
  );

  // UNIQUE STORAGE KEY USER-WISE
  const cartKey = currentUser
    ? `foodryCart_${currentUser.email}`
    : "foodryCart_guest";

  // LOAD FROM LOCAL STORAGE
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem(cartKey);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
  }, [cartItems, cartKey]);

  // CHECK ITEM
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // ADD / REMOVE
  const toggleCartItem = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      // REMOVE
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      // ADD
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // INCREASE
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        toggleCartItem,
        isInCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);