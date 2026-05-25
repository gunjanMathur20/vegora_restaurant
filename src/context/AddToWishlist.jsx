import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem("foodryCurrentUser"));

  // UNIQUE USER KEY
  const wishlistKey = currentUser
    ? `foodryWishlist_${currentUser.email}`
    : "foodryWishlist_guest";

  // LOAD
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem(wishlistKey);

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // SAVE
  useEffect(() => {
    localStorage.setItem(wishlistKey, JSON.stringify(wishlistItems));
  }, [wishlistItems, wishlistKey]);

  // CHECK
  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  // ADD / REMOVE
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      // REMOVE
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      // ADD
      return [...prev, product];
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
