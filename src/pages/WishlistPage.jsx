import { Link } from "react-router-dom";
import { useWishlist } from "../context/AddToWishlist";

import {
  FaTrash,
  FaHeart,
  FaArrowRight,
  FaStar,
  FaEye,
} from "react-icons/fa";

export default function WishlistPage() {
  const { wishlistItems, toggleWishlist } = useWishlist();

  /* ====================================================== */
  /* EMPTY WISHLIST */
  /* ====================================================== */

  if (!wishlistItems.length) {
    return (
      <section
        className="
          relative
          overflow-hidden
          min-h-screen
          bg-[#07120c]
          flex
          items-center
          justify-center
          px-5
          pt-24
          text-white
        "
      >
        {/* BG */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#08140d] via-[#0f1f16] to-[#101010]"></div>

        {/* GLOWS */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#c7ff41]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 left-10 w-[220px] h-[220px] bg-[#32d583]/10 blur-3xl rounded-full"></div>

        {/* CONTENT */}

        <div className="relative z-10 text-center max-w-3xl">
          {/* TAG */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              border
              border-[#c7ff41]/20
              bg-[#c7ff41]/10
              px-5
              py-2
              text-[11px]
              uppercase
              tracking-[4px]
              text-[#d8ff72]
              mb-8
              backdrop-blur-md
              rounded-full
            "
          >
            <FaHeart size={10} />
            Premium Wishlist Experience
          </div>

          {/* ICON */}

          <div className="flex justify-center mb-10">
            <div
              className="
                relative
                w-28
                h-28
                rounded-full
                border
                border-[#c7ff41]/20
                bg-white/[0.03]
                flex
                items-center
                justify-center
                backdrop-blur-xl
              "
            >
              <div className="absolute inset-0 bg-[#c7ff41]/20 blur-3xl rounded-full"></div>

              <FaHeart className="relative text-[#d8ff72] text-5xl drop-shadow-[0_0_22px_rgba(199,255,65,0.7)]" />
            </div>
          </div>

          {/* HEADING */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
            "
          >
            Wishlist Is
            <span className="text-[#d8ff72]"> Empty</span>
          </h1>

          {/* TEXT */}

          <p
            className="
              mt-8
              text-[#cfcfcf]
              text-[15px]
              sm:text-[17px]
              leading-[1.9]
              max-w-2xl
              mx-auto
            "
          >
            Save your favorite dishes and premium products here.
            Explore our luxury vegetarian collection and build your
            perfect Greenisha food wishlist experience.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
            <Link
              to="/products"
              className="
                group
                bg-[#c7ff41]
                hover:bg-[#d8ff72]
                text-black
                px-10
                md:px-12
                py-4
                text-sm
                uppercase
                tracking-[3px]
                transition-all
                duration-500
                hover:scale-105
                shadow-[0_20px_50px_rgba(199,255,65,0.25)]
                flex
                items-center
                gap-3
                font-semibold
              "
            >
              Explore Products

              <FaArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>

            <Link
              to="/menu"
              className="
                border
                border-white/10
                bg-white/[0.04]
                hover:bg-white/[0.08]
                hover:border-[#c7ff41]/20
                text-white
                px-10
                md:px-12
                py-4
                text-sm
                uppercase
                tracking-[3px]
                transition-all
                duration-500
              "
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ====================================================== */
  /* WISHLIST PAGE */
  /* ====================================================== */

  return (
    <div className="bg-[#07120c] text-white overflow-hidden min-h-screen">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section
        className="
          relative
          min-h-[55vh]
          flex
          items-center
          justify-center
          px-5
          overflow-hidden
        "
      >
        {/* BG IMAGE */}

        <div
          className="
            absolute
            inset-0
            bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')]
            bg-cover
            bg-center
            scale-105
          "
        ></div>

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/80"></div>

        {/* GLOW */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c7ff41]/10 blur-3xl rounded-full"></div>

        {/* CONTENT */}

        <div className="relative z-10 text-center max-w-5xl pt-20">
          {/* TAG */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              border
              border-[#c7ff41]/20
              bg-[#c7ff41]/10
              px-5
              py-2
              text-[11px]
              uppercase
              tracking-[4px]
              text-[#d8ff72]
              backdrop-blur-md
            "
          >
            <FaHeart size={10} />
            Premium Favorites Collection
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
            "
          >
            My
            <span className="text-[#d8ff72]"> Wishlist</span>
          </h1>

          {/* TEXT */}

          <p
            className="
              mt-8
              text-[#d0d0d0]
              text-sm
              sm:text-base
              md:text-lg
              leading-[2]
              max-w-3xl
              mx-auto
            "
          >
            Your saved premium dishes and favorite products
            collected in one luxurious place with Greenisha
            premium aesthetics.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PRODUCTS */}
      {/* ====================================================== */}

      <section className="relative py-14 sm:py-16 lg:py-20 px-4 sm:px-5 lg:px-6">
        {/* BG GLOW */}

        <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-[#c7ff41]/5 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-[#32d583]/5 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto">
          {/* GRID */}

          <div
            className="
              grid
              gap-5
              sm:gap-6
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              items-stretch
            "
          >
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="
                  relative
                  rounded-[28px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#121a15]
                  backdrop-blur-xl
                  group
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#c7ff41]/30
                  hover:shadow-[0_20px_60px_rgba(199,255,65,0.08)]
                  flex
                  flex-col
                  h-full
                "
              >
                {/* TOP GLOW */}

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-[220px]
                    h-[220px]
                    bg-[#c7ff41]/10
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                  "
                ></div>

                {/* IMAGE SECTION */}

                <div
                  className="
                    relative
                    h-[220px]
                    sm:h-[240px]
                    md:h-[250px]
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-white/10
                    bg-gradient-to-br
                    from-[#1a2a20]
                    via-[#152018]
                    to-[#101010]
                    shrink-0
                  "
                >
                  {/* BADGE */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      z-20
                      bg-[#c7ff41]
                      text-black
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      px-4
                      py-2
                      shadow-lg
                    "
                  >
                    Premium
                  </div>

                  {/* REMOVE */}

                  <button
                    onClick={() => toggleWishlist(item)}
                    className="
                      absolute
                      top-4
                      right-4
                      z-20
                      w-10
                      h-10
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:bg-[#c7ff41]
                      hover:text-black
                      hover:border-[#c7ff41]
                      transition-all
                      duration-300
                    "
                  >
                    <FaTrash size={12} />
                  </button>

                  {/* IMAGE GLOW */}

                  <div className="absolute w-[150px] h-[150px] bg-[#c7ff41]/10 blur-3xl rounded-full"></div>

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      relative
                      z-10
                      w-[72%]
                      h-[72%]
                      object-contain
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="relative z-10 p-5 flex flex-col flex-1">
                  {/* CATEGORY */}

                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[4px]
                        text-[#d8ff72]
                      "
                    >
                      Favorite Product
                    </span>

                    <div className="flex items-center gap-1 text-[#d8ff72] text-xs">
                      <FaStar />
                      <span>4.9</span>
                    </div>
                  </div>

                  {/* TITLE */}

                  <h2
                    className="
                      mt-4
                      text-xl
                      sm:text-2xl
                      font-black
                      leading-snug
                      line-clamp-2
                      min-h-[58px]
                    "
                  >
                    {item.name}
                  </h2>

                  {/* DESC */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-[1.8]
                      text-[#b5b5b5]
                      line-clamp-3
                    "
                  >
                    Premium handcrafted vegetarian food made
                    with authentic flavors and fresh ingredients.
                  </p>

                  {/* PRICE + HEART */}

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[4px]
                          text-[#777]
                        "
                      >
                        Price
                      </span>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          sm:text-3xl
                          font-black
                          text-[#d8ff72]
                        "
                      >
                        ${item.price}
                      </h3>
                    </div>

                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        border
                        border-[#c7ff41]/20
                        bg-[#c7ff41]/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FaHeart className="text-[#d8ff72]" />
                    </div>
                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={() => toggleWishlist(item)}
                    className="
                      mt-6
                      w-full
                      h-[52px]
                      rounded-2xl
                      border
                      border-[#c7ff41]/20
                      bg-gradient-to-r
                      from-[#c7ff41]/10
                      to-[#32d583]/10
                      hover:from-[#c7ff41]
                      hover:to-[#d8ff72]
                      hover:border-[#c7ff41]
                      text-[#d8ff72]
                      hover:text-black
                      text-xs
                      sm:text-sm
                      uppercase
                      tracking-[2px]
                      transition-all
                      duration-500
                      flex
                      items-center
                      justify-center
                      gap-3
                      font-semibold
                      hover:shadow-[0_20px_40px_rgba(199,255,65,0.18)]
                    "
                  >
                    <FaTrash size={12} />
                    Remove Wishlist
                  </button>
                </div>

                {/* BOTTOM BORDER */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[3px]
                    bg-[#c7ff41]
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}