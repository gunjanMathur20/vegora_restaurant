import { FaPlus, FaMinus, FaTimes, FaArrowRight } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  /* ====================================================== */
  /* EMPTY CART */
  /* ====================================================== */

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#0b0d0b] text-white min-h-screen flex flex-col">
        {/* ====================================================== */}
        {/* HERO */}
        {/* ====================================================== */}

        <section className="relative flex-1 min-h-screen flex items-center justify-center overflow-hidden px-5">
          {/* BG IMAGE */}

          <div
            className="
              absolute
              inset-0
              bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop')]
              bg-cover
              bg-center
              scale-105
            "
          ></div>

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-[#0b0d0b]/85"></div>

          {/* GLOW */}

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-lime-300/10 blur-3xl rounded-full"></div>

          {/* CONTENT */}

          <div className="relative z-10 text-center max-w-4xl">
            {/* TAG */}

            <div
              className="
                inline-flex
                items-center
                border
                border-lime-300/20
                bg-lime-300/10
                px-5
                py-2
                text-[11px]
                uppercase
                tracking-[4px]
                text-lime-200
                mb-7
                backdrop-blur-md
              "
            >
              Premium Dining Experience
            </div>

            {/* TITLE */}

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
              "
            >
              Your Cart Is
              <span className="text-yellow-300"> Empty</span>
            </h1>

            {/* DESC */}

            <p
              className="
                mt-7
                text-[#c9d1c9]
                text-[15px]
                sm:text-[17px]
                leading-[1.9]
                max-w-2xl
                mx-auto
              "
            >
              Looks like you haven’t added any delicious dishes yet. Explore our
              premium vegetarian menu crafted with authentic Indian flavours and
              rich ingredients.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
              <Link
                to="/menu"
                className="
                  group
                  bg-gradient-to-r
                  from-lime-300
                  to-yellow-300
                  hover:scale-105
                  text-black
                  px-10
                  md:px-12
                  py-4
                  text-sm
                  uppercase
                  tracking-[3px]
                  transition-all
                  duration-500
                  shadow-[0_20px_50px_rgba(234,179,8,0.18)]
                  flex
                  items-center
                  gap-3
                  font-semibold
                "
              >
                Explore Menu
                <FaArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>

              <Link
                to="/products"
                className="
                  border
                  border-white/10
                  bg-white/[0.04]
                  hover:bg-white/[0.08]
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
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  /* ====================================================== */
  /* CART PAGE */
  /* ====================================================== */

  return (
    <div className="bg-[#0b0d0b] text-white overflow-hidden min-h-screen">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section className="relative h-[65vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* BG IMAGE */}

        <div
          className="
            absolute
            inset-0
            bg-[url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop')]
            bg-cover
            bg-center
            scale-105
          "
        ></div>

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-[#0b0d0b]/80"></div>

        {/* GLOW */}

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            bg-yellow-300/10
            blur-3xl
            rounded-full
          "
        ></div>

        {/* CONTENT */}

        <div className="relative z-10 text-center px-5 max-w-5xl">
          <div
            className="
              inline-flex
              items-center
              border
              border-lime-300/20
              bg-lime-300/10
              px-5
              py-2
              text-[11px]
              uppercase
              tracking-[4px]
              text-lime-200
              backdrop-blur-md
            "
          >
            Premium Cart Experience
          </div>

          <h1
            className="
              mt-7
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
            "
          >
            Review Your
            <span className="text-yellow-300"> Order</span>
          </h1>

          <p
            className="
              mt-8
              text-[#c8d0c8]
              text-sm
              sm:text-base
              md:text-lg
              leading-[2]
              max-w-3xl
              mx-auto
            "
          >
            Manage your selected dishes, update quantities, and prepare for an
            unforgettable premium dining experience.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CART SECTION */}
      {/* ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* GLOW */}

        <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-lime-300/5 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-[1.5fr_0.65fr] gap-8 lg:gap-10 items-start">
            {/* ====================================================== */}
            {/* CART ITEMS */}
            {/* ====================================================== */}

            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    relative
                    border
                    border-white/10
                    bg-[#121512]
                    overflow-hidden
                    rounded-[28px]
                    group
                    transition-all
                    duration-500
                    hover:border-yellow-300/20
                  "
                >
                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-[180px]
                      h-[180px]
                      bg-yellow-300/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-700
                    "
                  ></div>

                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      md:flex-row
                      gap-6
                      p-5
                      sm:p-6
                    "
                  >
                    {/* IMAGE */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-[#1b211b]
                        to-[#0f120f]
                        rounded-[24px]
                        w-full
                        md:w-[210px]
                        h-[240px]
                        md:h-[210px]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <div
                        className="
                          absolute
                          top-1/2
                          left-1/2
                          -translate-x-1/2
                          -translate-y-1/2
                          w-[130px]
                          h-[130px]
                          bg-lime-300/10
                          blur-3xl
                          rounded-full
                        "
                      ></div>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          relative
                          z-10
                          w-[80%]
                          h-[80%]
                          object-contain
                          transition-all
                          duration-700
                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span
                              className="
                                text-[10px]
                                uppercase
                                tracking-[4px]
                                text-lime-300
                              "
                            >
                              Premium Dish
                            </span>

                            <h2
                              className="
                                text-2xl
                                sm:text-3xl
                                lg:text-[34px]
                                font-black
                                mt-3
                                leading-tight
                              "
                            >
                              {item.name}
                            </h2>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="
                              w-10
                              h-10
                              flex
                              items-center
                              justify-center
                              border
                              border-white/10
                              bg-white/[0.03]
                              text-[#b5b5b5]
                              hover:bg-yellow-300
                              hover:border-yellow-300
                              hover:text-black
                              transition-all
                              duration-300
                              rounded-xl
                              shrink-0
                            "
                          >
                            <FaTimes size={12} />
                          </button>
                        </div>

                        <p
                          className="
                            mt-5
                            text-[#9fa79f]
                            leading-[1.9]
                            text-sm
                            max-w-2xl
                          "
                        >
                          Crafted with premium ingredients, rich Indian spices
                          and authentic flavours for a luxury dining experience.
                        </p>
                      </div>

                      {/* BOTTOM */}

                      <div
                        className="
                          flex
                          flex-col
                          lg:flex-row
                          lg:items-end
                          lg:justify-between
                          gap-8
                          mt-8
                        "
                      >
                        {/* PRICE */}

                        <div>
                          <span
                            className="
                              text-[10px]
                              uppercase
                              tracking-[4px]
                              text-[#6d756d]
                            "
                          >
                            Price
                          </span>

                          <h3
                            className="
                              text-3xl
                              font-black
                              text-yellow-300
                              mt-2
                            "
                          >
                            ${item.price.toFixed(2)}
                          </h3>
                        </div>

                        {/* QUANTITY */}

                        <div>
                          <span
                            className="
                              text-[10px]
                              uppercase
                              tracking-[4px]
                              text-[#6d756d]
                            "
                          >
                            Quantity
                          </span>

                          <div
                            className="
                              mt-3
                              inline-flex
                              items-center
                              border
                              border-white/10
                              bg-[#0f120f]
                              rounded-2xl
                              overflow-hidden
                            "
                          >
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="
                                w-12
                                h-12
                                flex
                                items-center
                                justify-center
                                border-r
                                border-white/10
                                hover:bg-lime-300
                                hover:text-black
                                transition-all
                                duration-300
                              "
                            >
                              <FaMinus size={11} />
                            </button>

                            <span
                              className="
                                w-14
                                h-12
                                flex
                                items-center
                                justify-center
                                text-sm
                                font-semibold
                              "
                            >
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => increaseQty(item.id)}
                              className="
                                w-12
                                h-12
                                flex
                                items-center
                                justify-center
                                border-l
                                border-white/10
                                hover:bg-lime-300
                                hover:text-black
                                transition-all
                                duration-300
                              "
                            >
                              <FaPlus size={11} />
                            </button>
                          </div>
                        </div>

                        {/* TOTAL */}

                        <div className="lg:text-right">
                          <span
                            className="
                              text-[10px]
                              uppercase
                              tracking-[4px]
                              text-[#6d756d]
                            "
                          >
                            Total
                          </span>

                          <h3
                            className="
                              text-3xl
                              font-black
                              text-white
                              mt-2
                            "
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ====================================================== */}
            {/* SUMMARY */}
            {/* ====================================================== */}

            <div
              className="
                xl:sticky
                xl:top-28
                border
                border-white/10
                bg-[#121512]
                p-6
                sm:p-8
                rounded-[32px]
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[4px]
                  text-lime-300
                "
              >
                Order Summary
              </span>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  font-black
                  mt-5
                "
              >
                Cart Totals
              </h2>

              {/* SUMMARY */}

              <div className="mt-10 space-y-7">
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a8a0]">Subtotal</span>

                  <span className="font-semibold text-lg">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#a0a8a0]">Delivery</span>

                  <span className="text-lime-300 font-medium">Free</span>
                </div>

                <div className="border-t border-white/10 pt-7 flex items-center justify-between">
                  <span className="text-lg font-semibold">Total</span>

                  <span className="text-4xl font-black text-yellow-300">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* BUTTONS */}

              <div className="mt-10 space-y-4">
                <Link to="/checkout">
                  <button
                    className="
      w-full
      bg-gradient-to-r
      from-lime-300
      to-yellow-300
      hover:scale-[1.02]
      text-black
      py-4
      text-sm
      uppercase
      tracking-[3px]
      transition-all
      duration-500
      shadow-[0_20px_50px_rgba(234,179,8,0.18)]
      rounded-2xl
      font-semibold
    "
                  >
                    Proceed To Checkout
                  </button>
                </Link>

                <Link
                  to="/products"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.03]
                    hover:border-yellow-300/30
                    hover:bg-yellow-300/[0.06]
                    text-white
                    py-4
                    text-sm
                    uppercase
                    tracking-[3px]
                    transition-all
                    duration-500
                    rounded-2xl
                    mt-5
                  "
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
