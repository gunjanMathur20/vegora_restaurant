import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/pacifico";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/AddToWishlist";

createRoot(document.getElementById("root")).render(
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
);
