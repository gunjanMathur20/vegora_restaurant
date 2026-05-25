import { useMemo, useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import { FaFilter, FaChevronDown } from "react-icons/fa";

import products from "../data/product";

import ProductCard from "../components/ProductCard";

export default function Products() {
  // ======================================================
  // STATES
  // ======================================================

  const [sortBy, setSortBy] = useState("default");

  const [gridView, setGridView] = useState(4);

  const [filterOpen, setFilterOpen] = useState(false);

  const [layoutOpen, setLayoutOpen] = useState(false);

  const [sortOpen, setSortOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  // ======================================================
  // REFS
  // ======================================================

  const filterRef = useRef(null);

  const layoutRef = useRef(null);

  const sortRef = useRef(null);

  // ======================================================
  // CLICK OUTSIDE
  // ======================================================

  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }

      if (layoutRef.current && !layoutRef.current.contains(e.target)) {
        setLayoutOpen(false);
      }

      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ======================================================
  // FILTER PRODUCTS
  // ======================================================

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // CATEGORY

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // SORT LOW

    if (sortBy === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    // SORT HIGH

    if (sortBy === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [sortBy, selectedCategory]);

  // ======================================================
  // GRID CLASSES
  // ======================================================

  const gridClasses = {
    1: "grid-cols-1",

    2: "grid-cols-2",

    3: "grid-cols-2 md:grid-cols-3",

    4: "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",

    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5",
  };

  return (
    <div className="bg-[#07110a] min-h-screen overflow-hidden text-white">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden min-h-[72vh] flex items-center justify-center">
        {/* BG IMAGE */}

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-[#07110a]/50"></div>

        {/* GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#07110a]/40 via-[#07110a]/70 to-[#07110a]"></div>

        {/* GREEN + YELLOW GLOW */}

        <div
          className="
            absolute
            top-[20%]
            left-[25%]
            w-[420px]
            h-[420px]
            bg-lime-400/10
            blur-[120px]
            rounded-full
          "
        ></div>

        <div
          className="
            absolute
            bottom-[10%]
            right-[20%]
            w-[350px]
            h-[350px]
            bg-yellow-300/10
            blur-[120px]
            rounded-full
          "
        ></div>

        {/* CONTENT */}

        <div className="relative z-10 px-5 sm:px-6 lg:px-8 text-center max-w-5xl">
          {/* TAG */}

          <div
            className="
              inline-flex
              items-center
              border
              border-yellow-300/20
              bg-gradient-to-r
              from-lime-400/10
              to-yellow-300/10
              px-5
              py-2
              text-[11px]
              uppercase
              tracking-[4px]
              text-yellow-200
              backdrop-blur-md
            "
          >
            Premium Indian Cuisine
          </div>

          {/* TITLE */}

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
              text-white
            "
          >
            Explore Our
            <span className="bg-gradient-to-r from-lime-300 to-yellow-200 bg-clip-text text-transparent">
              {" "}
              Products
            </span>
          </h1>

          {/* DESC */}

          <p
            className="
              mt-7
              text-[#d4decf]
              text-sm
              sm:text-base
              md:text-lg
              leading-[2]
              max-w-3xl
              mx-auto
            "
          >
            Discover handcrafted Indian dishes, rich flavours, spicy street
            food, cheesy delights and premium vegetarian meals crafted for
            unforgettable dining.
          </p>

          {/* BREADCRUMB */}

          <div className="flex justify-center items-center gap-3 mt-10 text-sm text-gray-300">
            <Link
              to="/"
              className="hover:text-yellow-200 transition-all duration-300"
            >
              Home
            </Link>

            <span className="text-yellow-300">•</span>

            <span className="text-white">Products</span>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <section className="relative py-10 md:py-14">
        {/* BG GLOW */}

        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-lime-400/5 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-300/5 blur-3xl rounded-full"></div>

        <div className="relative z-10 w-full px-4 md:px-6 lg:px-10 xl:px-14">
          {/* ====================================================== */}
          {/* TOPBAR */}
          {/* ====================================================== */}

          <div className="flex items-center justify-between gap-3 mb-8">
            {/* FILTER */}

            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="
                  h-11 px-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-lime-400
                  to-yellow-300
                  hover:scale-[1.03]
                  text-black
                  text-sm uppercase tracking-wider
                  flex items-center gap-2
                  transition-all duration-300
                  shadow-[0_10px_30px_rgba(234,179,8,0.25)]
                "
              >
                <FaFilter size={12} />
                Filter
              </button>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-2 md:gap-3">
              {/* GRID */}

              <div className="relative hidden md:block" ref={layoutRef}>
                <button
                  onClick={() => setLayoutOpen(!layoutOpen)}
                  className="
                    w-11 h-11
                    rounded-2xl
                    bg-[#122016]
                    border border-white/10
                    hover:border-yellow-300/40
                    flex items-center justify-center
                    transition-all duration-300
                  "
                >
                  <div className="grid grid-cols-3 gap-[3px]">
                    {[...Array(9)].map((_, i) => (
                      <span
                        key={i}
                        className="w-[4px] h-[4px] rounded-full bg-yellow-200"
                      ></span>
                    ))}
                  </div>
                </button>

                {/* GRID DROPDOWN */}

                <div
                  className={`absolute right-[56px] top-0 bg-[#101a13] border border-white/10 rounded-2xl p-3 z-50 flex gap-2 transition-all duration-300 origin-right backdrop-blur-xl
      
                  ${
                    layoutOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setGridView(num);

                        setLayoutOpen(false);
                      }}
                      className={`w-8 h-8 rounded-xl text-xs transition-all duration-300
      
                        ${
                          gridView === num
                            ? "bg-gradient-to-r from-lime-400 to-yellow-300 text-black"
                            : "bg-[#1a251d] hover:bg-yellow-300 hover:text-black"
                        }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* SORT */}

              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="
                    min-w-[145px] md:min-w-[180px]
                    h-11 px-4
                    bg-[#122016]
                    border border-white/10
                    hover:border-yellow-300/40
                    rounded-2xl
                    flex items-center justify-between gap-4
                    text-sm
                    transition-all duration-300
                  "
                >
                  <span className="text-white">
                    {sortBy === "default" && "Featured"}

                    {sortBy === "low" && "Price Low"}

                    {sortBy === "high" && "Price High"}
                  </span>

                  <FaChevronDown
                    size={11}
                    className={`transition duration-300
      
                    ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* SORT DROPDOWN */}

                <div
                  className={`absolute right-0 top-[54px] w-full bg-[#101a13] border border-white/10 rounded-2xl overflow-hidden z-50 transition-all duration-300 origin-top backdrop-blur-xl
      
                  ${
                    sortOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {[
                    {
                      label: "Featured",
                      value: "default",
                    },

                    {
                      label: "Price Low",
                      value: "low",
                    },

                    {
                      label: "Price High",
                      value: "high",
                    },
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        setSortBy(item.value);

                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm transition-all duration-300
      
                      ${
                        sortBy === item.value
                          ? "bg-gradient-to-r from-lime-400 to-yellow-300 text-black"
                          : "text-gray-300 hover:bg-[#1b241d]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* FILTER SECTION */}
          {/* ====================================================== */}

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden
    
            ${
              filterOpen
                ? "max-h-[1200px] opacity-100 mb-8"
                : "max-h-0 opacity-0 mb-0"
            }`}
          >
            <div
              className="
                bg-[#101712]
                border border-white/10
                rounded-[30px]
                p-5 md:p-7
                backdrop-blur-xl
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* CATEGORIES */}

                <div>
                  <h3 className="font-semibold mb-4 text-[17px] text-yellow-100">
                    Categories
                  </h3>

                  <div className="space-y-3 text-sm">
                    {["Pizza", "Burger", "French", "Soft", "Combo"].map(
                      (category) => (
                        <button
                          key={category}
                          onClick={() =>
                            setSelectedCategory(
                              selectedCategory === category ? "" : category,
                            )
                          }
                          className={`block transition-all duration-300
      
                        ${
                          selectedCategory === category
                            ? "text-yellow-200"
                            : "text-gray-400 hover:text-yellow-200"
                        }`}
                        >
                          {category}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* COLORS */}

                <div>
                  <h3 className="font-semibold mb-4 text-[17px] text-yellow-100">
                    Color Option
                  </h3>

                  <div className="flex gap-3">
                    <button className="w-6 h-6 rounded-full bg-lime-400 hover:scale-110 transition-all duration-300"></button>

                    <button className="w-6 h-6 rounded-full bg-yellow-300 hover:scale-110 transition-all duration-300"></button>

                    <button className="w-6 h-6 rounded-full bg-[#162019] border border-white/20 hover:scale-110 transition-all duration-300"></button>
                  </div>
                </div>

                {/* SIZE */}

                <div>
                  <h3 className="font-semibold mb-4 text-[17px] text-yellow-100">
                    Size Option
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {["Small", "Medium", "Large"].map((size) => (
                      <button
                        key={size}
                        className="
                          bg-[#1a251d]
                          border border-white/10
                          hover:border-yellow-300
                          hover:text-yellow-200
                          transition-all duration-300
                          px-4 py-2
                          rounded-xl
                          text-sm
                        "
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}

                <div>
                  <h3 className="font-semibold mb-4 text-[17px] text-yellow-100">
                    Price Filter
                  </h3>

                  <div className="space-y-3 text-sm">
                    {["$0-$5", "$5-$10", "$10-$15", "$15-$20"].map((price) => (
                      <button
                        key={price}
                        className="block text-gray-400 hover:text-yellow-200 transition-all duration-300"
                      >
                        {price}
                      </button>
                    ))}
                  </div>
                </div>

                {/* TAGS */}

                <div>
                  <h3 className="font-semibold mb-4 text-[17px] text-yellow-100">
                    Popular Tags
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {["Cheesy", "Spicy", "Fresh", "Burger", "Pizza", "Hot"].map(
                      (tag) => (
                        <button
                          key={tag}
                          className="
                          bg-[#1a251d]
                          border border-white/10
                          px-3 py-2
                          rounded-xl
                          text-sm text-gray-300
                          hover:bg-gradient-to-r
                          hover:from-lime-400
                          hover:to-yellow-300
                          hover:border-yellow-300
                          hover:text-black
                          transition-all duration-300
                        "
                        >
                          {tag}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* PRODUCTS */}
          {/* ====================================================== */}

          <div className={`grid gap-4 md:gap-6 ${gridClasses[gridView]}`}>
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <ProductCard item={item} gridView={gridView} />
              </div>
            ))}
          </div>

          {/* ====================================================== */}
          {/* EMPTY */}
          {/* ====================================================== */}

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-semibold text-white">
                No Products Found
              </h3>

              <p className="text-gray-500 mt-3">Try another filter option</p>
            </div>
          )}

          {/* ====================================================== */}
          {/* PAGINATION */}
          {/* ====================================================== */}

          <div className="flex justify-center gap-3 mt-14 md:mt-16">
            <button className="w-11 h-11 rounded-2xl bg-gradient-to-r from-lime-400 to-yellow-300 text-black text-sm shadow-[0_10px_30px_rgba(234,179,8,0.25)]">
              1
            </button>

            <button className="w-11 h-11 rounded-2xl bg-[#122016] border border-white/10 text-sm hover:bg-yellow-300 hover:border-yellow-300 hover:text-black transition-all duration-300">
              2
            </button>

            <button className="w-11 h-11 rounded-2xl bg-[#122016] border border-white/10 text-sm hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all duration-300">
              3
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}