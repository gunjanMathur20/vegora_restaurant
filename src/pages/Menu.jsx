import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaPlus,
  FaCheck,
} from "react-icons/fa6";

import products from "../data/product";

import { useCart } from "../context/CartContext";

export default function Menu() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const {
    cartItems,
    toggleCartItem,
  } = useCart();

  const [toast, setToast] =
    useState("");

  const [selectedSizes, setSelectedSizes] =
    useState({});

  // ======================================================
  // TOAST
  // ======================================================

  const showToast = (msg) => {
    setToast(msg);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  // ======================================================
  // CATEGORY
  // ======================================================

  const categories = [
    "All",
    "Pizza",
    "Burger",
    "French",
    "Soft",
    "Combo",
  ];

  // ======================================================
  // FILTER ITEMS
  // ======================================================

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (item) =>
        item.category === activeCategory
    );
  }, [activeCategory]);

  // ======================================================
  // CHECK ITEM
  // ======================================================

  const isItemAdded = (id, size) => {
    return cartItems.some(
      (item) =>
        item.id === id &&
        item.selectedSize === size
    );
  };

  // ======================================================
  // HANDLE CART
  // ======================================================

  const handleAddToCart = (
    item,
    size,
    price
  ) => {
    if (!size) {
      showToast("Please select a size");
      return;
    }

    const alreadyAdded = cartItems.some(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedSize === size
    );

    toggleCartItem({
      ...item,
      selectedSize: size,
      price,
    });

    if (alreadyAdded) {
      showToast(
        `${item.name} (${size}) removed from cart`
      );
    } else {
      showToast(
        `${item.name} (${size}) added to cart`
      );
    }
  };

  // ======================================================
  // SIZES
  // ======================================================

  const getSizes = (item) => {
    if (item.category === "Soft") {
      return [
        {
          label: "Small",
          price: item.price,
        },
        {
          label: "Large",
          price: item.price + 4,
        },
      ];
    }

    if (item.category === "French") {
      return [
        {
          label: "Regular",
          price: item.price,
        },
        {
          label: "Loaded",
          price: item.price + 6,
        },
      ];
    }

    if (item.category === "Combo") {
      return [
        {
          label: "Single",
          price: item.price,
        },
        {
          label: "Family",
          price: item.price + 15,
        },
      ];
    }

    return [
      {
        label: "Small",
        price: item.price,
      },
      {
        label: "Medium",
        price: item.price + 5,
      },
      {
        label: "Large",
        price: item.price + 10,
      },
    ];
  };

  return (
    <div className="bg-[#07120d] min-h-screen text-white overflow-hidden">

      {/* ====================================================== */}
      {/* TOAST */}
      {/* ====================================================== */}

      <div
        className={`fixed top-24 right-4 z-[999] transition-all duration-300
        
        ${
          toast
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <div
          className="
            bg-[#102019]/95
            backdrop-blur-xl
            border
            border-yellow-400/20
            text-white
            px-5
            py-3
            rounded-2xl
            shadow-[0_20px_60px_rgba(250,204,21,0.12)]
            text-sm
            tracking-wide
          "
        >
          {toast}
        </div>
      </div>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section
        className="
          relative
          min-h-[55vh]
          flex
          items-center
          justify-center
          overflow-hidden
          px-4
          pt-28
          pb-20
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

        <div className="absolute inset-0 bg-[#05110c]/85"></div>

        {/* GLOW */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lime-400/10 blur-3xl rounded-full"></div>

        {/* CONTENT */}

        <div className="relative z-10 text-center max-w-4xl">
          <div
            className="
              inline-flex
              items-center
              justify-center
              border
              border-yellow-400/20
              bg-yellow-400/10
              px-5
              py-2
              text-[10px]
              sm:text-[11px]
              uppercase
              tracking-[4px]
              text-yellow-300
              backdrop-blur-md
            "
          >
            Fresh & Delicious Menu
          </div>

          <h1
            className="
              mt-7
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
            "
          >
            Premium
            <span className="text-lime-300">
              {" "}
              Menu
            </span>
          </h1>

          <p
            className="
              mt-7
              text-sm
              sm:text-base
              md:text-lg
              text-[#b7c8bb]
              leading-[2]
              max-w-2xl
              mx-auto
            "
          >
            Experience handcrafted burgers,
            pizzas, combos and premium café
            meals made with authentic taste
            and fresh ingredients.
          </p>

          {/* BREADCRUMB */}

          <div className="flex justify-center items-center gap-2 mt-8 text-sm">
            <Link
              to="/"
              className="text-gray-400 hover:text-yellow-300 transition-all duration-300"
            >
              Home
            </Link>

            <span className="text-gray-600">
              /
            </span>

            <span className="text-white">
              Menu
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CATEGORY */}
      {/* ====================================================== */}

      <section className="relative px-4 sm:px-6 lg:px-8 -mt-10 z-20">
        <div className="max-w-7xl mx-auto">

          <div
            className="
              flex
              gap-3
              overflow-x-auto
              pb-2
              justify-start
              lg:justify-center
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat)
                }
                className={`

                  flex-shrink-0
                  px-5
                  sm:px-6
                  h-[48px]
                  rounded-full
                  border
                  text-[11px]
                  sm:text-[12px]
                  uppercase
                  tracking-[2px]
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-lime-400 to-yellow-300 border-lime-300 text-black shadow-[0_15px_35px_rgba(163,230,53,0.28)]"
                      : "bg-[#122018]/90 backdrop-blur-xl border-white/10 text-gray-300 hover:border-lime-300/40 hover:bg-lime-300/10 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* MENU LIST */}
      {/* ====================================================== */}

      <section className="relative px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        {/* BG GLOW */}

        <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-lime-400/5 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto">

          <div
            className="
              bg-[#101a14]
              border
              border-white/10
              rounded-[28px]
              sm:rounded-[34px]
              overflow-hidden
              shadow-[0_25px_90px_rgba(0,0,0,0.45)]
            "
          >
            {filteredItems.map(
              (item, index) => {
                const sizeOptions =
                  getSizes(item);

                const selectedSize =
                  selectedSizes[item.id];

                const selectedPrice =
                  sizeOptions.find(
                    (s) =>
                      s.label ===
                      selectedSize
                  )?.price ||
                  item.price;

                return (
                  <div
                    key={item.id}
                    className={`
                      relative
                      group
                      px-4
                      sm:px-6
                      lg:px-10
                      py-6
                      sm:py-8
                      transition-all
                      duration-300

                      ${
                        index !==
                        filteredItems.length -
                          1
                          ? "border-b border-white/10"
                          : ""
                      }
                    `}
                  >

                    {/* HOVER GLOW */}

                    <div
                      className="
                        absolute
                        top-0
                        right-0
                        w-[220px]
                        h-[220px]
                        bg-yellow-400/5
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
                        lg:flex-row
                        gap-6
                        lg:gap-8
                      "
                    >

                      {/* IMAGE */}

                      <div
                        className="
                          relative
                          w-full
                          sm:w-[240px]
                          md:w-[280px]
                          lg:w-[250px]
                          xl:w-[280px]
                          h-[220px]
                          sm:h-[240px]
                          shrink-0
                          rounded-[28px]
                          overflow-hidden
                          border
                          border-white/10
                          bg-gradient-to-br
                          from-[#1b2b20]
                          to-[#0d1611]
                          flex
                          items-center
                          justify-center
                        "
                      >

                        {/* IMAGE GLOW */}

                        <div className="absolute w-[160px] h-[160px] bg-lime-400/10 blur-3xl rounded-full"></div>

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            relative
                            z-10
                            w-[82%]
                            h-[82%]
                            object-contain
                            transition-all
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      </div>

                      {/* CONTENT */}

                      <div className="flex-1 min-w-0">

                        {/* TOP */}

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-4
                            flex-wrap
                          "
                        >
                          <div className="min-w-0">

                            <span
                              className="
                                text-[10px]
                                uppercase
                                tracking-[4px]
                                text-yellow-300
                              "
                            >
                              Premium Food
                            </span>

                            <h2
                              className="
                                mt-3
                                text-2xl
                                sm:text-3xl
                                lg:text-4xl
                                font-black
                                leading-tight
                                transition-all
                                duration-300
                                group-hover:text-lime-300
                              "
                            >
                              {item.name}
                            </h2>
                          </div>

                          {/* PRICE */}

                          <div className="text-left sm:text-right">
                            <p
                              className="
                                text-[10px]
                                uppercase
                                tracking-[4px]
                                text-gray-500
                              "
                            >
                              Price
                            </p>

                            <h3
                              className="
                                mt-2
                                text-3xl
                                sm:text-4xl
                                font-black
                                text-lime-300
                              "
                            >
                              ₹{selectedPrice}
                            </h3>
                          </div>
                        </div>

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-6
                            text-sm
                            sm:text-[15px]
                            leading-[2]
                            text-[#a5b8a8]
                            max-w-3xl
                          "
                        >
                          Freshly prepared with
                          premium ingredients,
                          handcrafted flavors and
                          rich café-style taste for
                          the perfect dining
                          experience.
                        </p>

                        {/* SIZE */}

                        <div className="mt-7">
                          <p
                            className="
                              text-[11px]
                              uppercase
                              tracking-[3px]
                              text-gray-500
                              mb-4
                            "
                          >
                            Select Size
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {sizeOptions.map(
                              (size) => (
                                <button
                                  key={
                                    size.label
                                  }
                                  onClick={() =>
                                    setSelectedSizes(
                                      (
                                        prev
                                      ) => ({
                                        ...prev,

                                        [item.id]:
                                          prev[
                                            item.id
                                          ] ===
                                          size.label
                                            ? ""
                                            : size.label,
                                      })
                                    )
                                  }
                                  className={`
                                    px-4
                                    sm:px-5
                                    py-3
                                    rounded-xl
                                    border
                                    text-sm
                                    transition-all
                                    duration-300

                                    ${
                                      selectedSize ===
                                      size.label
                                        ? "bg-gradient-to-r from-lime-400 to-yellow-300 border-lime-300 text-black shadow-[0_15px_30px_rgba(163,230,53,0.22)]"
                                        : "bg-[#18231b] border-white/10 text-gray-300 hover:border-yellow-300/40 hover:bg-yellow-300/10 hover:text-white"
                                    }
                                  `}
                                >
                                  <span
                                    className="
                                      uppercase
                                      text-[10px]
                                      tracking-[2px]
                                      mr-2
                                      opacity-80
                                    "
                                  >
                                    {
                                      size.label
                                    }
                                  </span>

                                  ₹
                                  {size.price}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {/* BUTTON */}

                        <div className="mt-8">
                          <button
                            onClick={() =>
                              handleAddToCart(
                                item,
                                selectedSize,
                                selectedPrice
                              )
                            }
                            className={`
                              group/btn
                              w-full
                              sm:w-auto
                              min-w-[220px]
                              h-[56px]
                              px-8
                              rounded-2xl
                              text-sm
                              uppercase
                              tracking-[3px]
                              font-semibold
                              transition-all
                              duration-500
                              flex
                              items-center
                              justify-center
                              gap-3

                              ${
                                selectedSize &&
                                isItemAdded(
                                  item.id,
                                  selectedSize
                                )
                                  ? "bg-gradient-to-r from-lime-400 to-yellow-300 text-black shadow-[0_18px_40px_rgba(163,230,53,0.3)]"
                                  : "border border-white/10 bg-white/[0.04] text-white hover:bg-gradient-to-r hover:from-lime-400 hover:to-yellow-300 hover:border-lime-300 hover:text-black"
                              }
                            `}
                          >
                            {selectedSize &&
                            isItemAdded(
                              item.id,
                              selectedSize
                            ) ? (
                              <>
                                <FaCheck size={13} />
                                Added To Cart
                              </>
                            ) : (
                              <>
                                <FaPlus
                                  size={13}
                                  className="group-hover/btn:rotate-90 transition-all duration-500"
                                />
                                Add To Cart
                              </>
                            )}
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }
            )}

            {/* EMPTY */}

            {filteredItems.length ===
              0 && (
              <div className="py-24 text-center px-4">
                <h3 className="text-3xl font-bold text-white">
                  No Items Found
                </h3>

                <p className="text-gray-500 mt-4">
                  Try another category
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}