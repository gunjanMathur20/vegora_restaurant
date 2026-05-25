import {
  FaHeart,
  FaShoppingBag,
  FaPlus,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/AddToWishlist";

export default function ProductCard({ item }) {
  const {
    toggleCartItem,
    isInCart,
  } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        h-full
        bg-[#101815]
        border
        border-[#26352d]
        overflow-hidden
        transition-all
        duration-500
        hover:border-yellow-400/40
        hover:-translate-y-2
        hover:shadow-[0_25px_60px_rgba(250,204,21,0.10)]
        rounded-[24px]
      "
    >
      {/* ===================================================== */}
      {/* TOP YELLOW GLOW */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[180px]
          h-[120px]
          bg-yellow-400/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
          pointer-events-none
        "
      ></div>

      {/* ===================================================== */}
      {/* IMAGE AREA */}
      {/* ===================================================== */}

      <div
        className="
          relative
          h-[240px]
          sm:h-[280px]
          md:h-[300px]
          min-h-[240px]
          sm:min-h-[280px]
          md:min-h-[300px]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-b
          from-[#18241d]
          to-[#0e1411]
        "
      >
        {/* GREEN SIDE LIGHT */}

        <div
          className="
            absolute
            -left-10
            top-1/2
            -translate-y-1/2
            w-[120px]
            h-[120px]
            bg-green-500/10
            rounded-full
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
          "
        ></div>

        {/* ===================================================== */}
        {/* IMAGE */}
        {/* ===================================================== */}

        <img
          src={item.image}
          alt={item.name}
          className="
            object-contain
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.04]
            group-hover:-translate-y-1
            drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]
          "
          style={{
            width: "82%",
            height: "82%",
          }}
        />

        {/* ===================================================== */}
        {/* DESKTOP ACTIONS */}
        {/* ===================================================== */}

        <div
          className="
            absolute
            inset-0
            hidden
            md:flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              translate-y-8
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            {/* CART */}

            <div className="relative group/cart">
              <button
                onClick={() =>
                  toggleCartItem(item)
                }
                className={`
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  border
                  rounded-2xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  active:scale-95
                  
                  ${
                    isInCart(item.id)
                      ? "bg-yellow-400 border-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.35)]"
                      : "bg-white/95 border-white text-black hover:bg-yellow-400 hover:border-yellow-400 hover:text-black"
                  }
                `}
              >
                <FaShoppingBag size={15} />
              </button>

              {/* TOOLTIP */}

              <div
                className="
                  absolute
                  -top-12
                  left-1/2
                  -translate-x-1/2
                  bg-[#111111]
                  text-white
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  px-3
                  py-2
                  rounded-xl
                  whitespace-nowrap
                  opacity-0
                  invisible
                  translate-y-2
                  transition-all
                  duration-300
                  group-hover/cart:opacity-100
                  group-hover/cart:visible
                  group-hover/cart:translate-y-0
                "
              >
                {isInCart(item.id)
                  ? "Remove Cart"
                  : "Add Cart"}

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-full
                    w-0
                    h-0
                    border-l-[6px]
                    border-l-transparent
                    border-r-[6px]
                    border-r-transparent
                    border-t-[6px]
                    border-t-[#111111]
                  "
                ></div>
              </div>
            </div>

            {/* WISHLIST */}

            <div className="relative group/wishlist">
              <button
                onClick={() =>
                  toggleWishlist(item)
                }
                className={`
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center
                  border
                  rounded-2xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  active:scale-95
                  
                  ${
                    isInWishlist(item.id)
                      ? "bg-yellow-400 border-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.35)]"
                      : "bg-white/95 border-white text-black hover:bg-yellow-400 hover:border-yellow-400 hover:text-black"
                  }
                `}
              >
                <FaHeart size={15} />
              </button>

              {/* TOOLTIP */}

              <div
                className="
                  absolute
                  -top-12
                  left-1/2
                  -translate-x-1/2
                  bg-[#111111]
                  text-white
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  px-3
                  py-2
                  rounded-xl
                  whitespace-nowrap
                  opacity-0
                  invisible
                  translate-y-2
                  transition-all
                  duration-300
                  group-hover/wishlist:opacity-100
                  group-hover/wishlist:visible
                  group-hover/wishlist:translate-y-0
                "
              >
                {isInWishlist(item.id)
                  ? "Remove Wishlist"
                  : "Add Wishlist"}

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-full
                    w-0
                    h-0
                    border-l-[6px]
                    border-l-transparent
                    border-r-[6px]
                    border-r-transparent
                    border-t-[6px]
                    border-t-[#111111]
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* MOBILE ACTIONS */}
        {/* ===================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            flex
            md:hidden
            items-center
            gap-3
          "
        >
          {/* CART */}

          <button
            onClick={() =>
              toggleCartItem(item)
            }
            className={`
              w-11
              h-11
              flex
              items-center
              justify-center
              backdrop-blur-xl
              border
              rounded-xl
              transition-all
              duration-300
              active:scale-90
              
              ${
                isInCart(item.id)
                  ? "bg-yellow-400 border-yellow-400 text-black"
                  : "bg-black/80 border-[#2e3f35] text-white"
              }
            `}
          >
            <FaShoppingBag size={13} />
          </button>

          {/* WISHLIST */}

          <button
            onClick={() =>
              toggleWishlist(item)
            }
            className={`
              w-11
              h-11
              flex
              items-center
              justify-center
              backdrop-blur-xl
              border
              rounded-xl
              transition-all
              duration-300
              active:scale-90
              
              ${
                isInWishlist(item.id)
                  ? "bg-yellow-400 border-yellow-400 text-black"
                  : "bg-black/80 border-[#2e3f35] text-white"
              }
            `}
          >
            <FaHeart size={13} />
          </button>
        </div>

        {/* ===================================================== */}
        {/* QUICK ADD */}
        {/* ===================================================== */}

        <button
          onClick={() =>
            toggleCartItem(item)
          }
          className="
            absolute
            top-4
            right-4
            w-10
            h-10
            bg-black/80
            border
            border-[#2e3f35]
            text-white
            flex
            items-center
            justify-center
            rounded-xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            hover:bg-yellow-400
            hover:border-yellow-400
            hover:text-black
            hover:rotate-90
          "
        >
          <FaPlus size={12} />
        </button>
      </div>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div
        className="
          relative
          flex
          flex-col
          flex-1
          p-5
          md:p-6
        "
      >
        {/* YELLOW LINE */}

        <div
          className="
            w-10
            h-[2px]
            bg-yellow-400
            mb-4
            transition-all
            duration-500
            group-hover:w-20
          "
        ></div>

        {/* TITLE */}

        <h3
          className="
            text-white
            text-[17px]
            md:text-[19px]
            font-semibold
            tracking-wide
            transition-all
            duration-300
            group-hover:text-yellow-300
            line-clamp-2
            min-h-[56px]
          "
        >
          {item.name}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            text-[#97a09a]
            text-[13px]
            leading-[1.8]
            mt-3
            transition-all
            duration-300
            group-hover:text-[#d2d2d2]
            line-clamp-3
            min-h-[72px]
          "
        >
          Crafted with rich flavors and premium ingredients for the ultimate taste experience.
        </p>

        {/* PRICE + STATUS */}

        <div className="flex items-end justify-between mt-auto pt-5">
          <div>
            <span className="text-[#718076] text-xs uppercase tracking-[3px]">
              Price
            </span>

            <h4
              className="
                text-yellow-300
                text-2xl
                md:text-[28px]
                font-bold
                mt-1
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              ₹{item.price}
            </h4>
          </div>

          <div
            className="
              text-right
              transition-all
              duration-300
              group-hover:-translate-y-1
            "
          >
            <span className="text-[#718076] text-[10px] uppercase tracking-[3px]">
              Status
            </span>

            <p className="text-green-400 text-sm mt-1">
              Available
            </p>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* BOTTOM LINE */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-yellow-400
          transition-all
          duration-700
          group-hover:w-full
        "
      ></div>
    </div>
  );
}