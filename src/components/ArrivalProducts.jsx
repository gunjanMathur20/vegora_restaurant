

import { FiHeart, FiShoppingBag } from "react-icons/fi";

import { useCart } from "../context/CartContext";

import { useWishlist } from "../context/AddToWishlist";

export default function ArrivalProducts({ product }) {
  // Access cart functionality from Cart Context
  const { toggleCartItem, isInCart } = useCart();

  // Access wishlist functionality from Wishlist Context
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    // Product card container
    <div className="group relative bg-gradient-to-b from-[#101812] to-[#08100b] overflow-hidden border border-lime-400/10 hover:border-lime-400/30 transition-all duration-500">
      {/* TOP LIGHT EFFECT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* IMAGE SECTION */}
      <div className="relative h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-lime-400/[0.03] to-transparent">
        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-[75%] h-[75%] object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
        />

        {/* ACTION BUTTONS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          {/* CART BUTTON */}
          <div className="relative flex items-center group/cart">
            <button
              onClick={() => toggleCartItem(product)}
              className={`w-11 h-11 flex items-center justify-center rounded-2xl border transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
                isInCart(product.id)
                  ? "bg-gradient-to-r from-lime-400 to-yellow-300 text-black border-lime-300"
                  : "bg-[#101812]/90 border-white/10 text-white hover:bg-lime-400/15 hover:border-lime-400/40 hover:text-lime-300"
              }`}
            >
              <FiShoppingBag size={18} />
            </button>

            {/* CART TOOLTIP */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-[11px] text-white bg-[#101812] border border-lime-400/20 px-3 py-1 rounded-md opacity-0 translate-y-2 group-hover/cart:opacity-100 group-hover/cart:translate-y-0 transition-all duration-300 whitespace-nowrap hidden md:block">
              {isInCart(product.id) ? "Remove Cart" : "Add to Cart"}
            </span>
          </div>

          {/* WISHLIST BUTTON */}
          <div className="relative flex items-center group/wish">
            <button
              onClick={() => toggleWishlist(product)}
              className={`w-11 h-11 flex items-center justify-center rounded-2xl border transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
                isInWishlist(product.id)
                  ? "bg-gradient-to-r from-lime-400 to-yellow-300 text-black border-lime-300"
                  : "bg-[#101812]/90 border-white/10 text-white hover:bg-lime-400/15 hover:border-lime-400/40 hover:text-lime-300"
              }`}
            >
              <FiHeart size={18} />
            </button>

            {/* WISHLIST TOOLTIP */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-10 text-[11px] text-white bg-[#101812] border border-lime-400/20 px-3 py-1 rounded-md opacity-0 translate-y-2 group-hover/wish:opacity-100 group-hover/wish:translate-y-0 transition-all duration-300 whitespace-nowrap hidden md:block">
              {isInWishlist(product.id) ? "Remove Wishlist" : "Add to Wishlist"}
            </span>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS SECTION */}
      <div className="p-5 text-center">
        {/* Product name */}
        <h3 className="text-white text-[16px] md:text-[17px] font-semibold tracking-wide transition-all duration-300 group-hover:text-lime-300">
          {product.name}
        </h3>

        {/* Product description */}
        <p className="text-gray-400 text-sm mt-2 transition-all duration-300 group-hover:text-gray-300">
          Freshly prepared premium item
        </p>

        {/* Product price */}
        <div className="mt-4">
          <span className="text-transparent bg-gradient-to-r from-lime-300 to-yellow-200 bg-clip-text font-bold text-xl">
            ₹{product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
