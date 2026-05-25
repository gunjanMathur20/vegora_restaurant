export const getRemainingTime = (targetDate) => {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      mins: "00",
      secs: "00",
      isExpired: true,
    };
  }

  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
    secs: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    isExpired: false,
  };
};

// ====================================

/**
 * Toggle product in cart
 * - If product exists → remove
 * - If not → add with quantity = 1
 */
export const toggleCartItem = (cartItems, product) => {
  const exists = cartItems.find((item) => item.id === product.id);

  if (exists) {
    // REMOVE
    return cartItems.filter((item) => item.id !== product.id);
  }

  // ADD
  return [
    ...cartItems,
    {
      ...product,
      quantity: 1,
    },
  ];
};

/**
 * Check product exists in cart
 */
export const isProductInCart = (cartItems, id) => {
  return cartItems.some((item) => item.id === id);
};
