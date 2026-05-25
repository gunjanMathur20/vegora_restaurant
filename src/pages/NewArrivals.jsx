import { useRef } from "react";
import ProductCard from "../components/ArrivalProducts";
import products from "../data/product";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function NewArrivals() {
  const scrollRef = useRef(null);

  // ================= SCROLL BUTTONS =================
  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,

      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        bg-[#050805]
        text-white
        overflow-hidden
        py-20
        sm:py-24
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================================= */}

      {/* TOP GREEN */}
      <div
        className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[520px]
          h-[520px]
          bg-lime-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* BOTTOM YELLOW */}
      <div
        className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-[320px]
          h-[320px]
          bg-yellow-300/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* LEFT GREEN */}
      <div
        className="
          absolute
          bottom-0
          left-[-120px]
          w-[260px]
          h-[260px]
          bg-green-500/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* TOP LINE */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-lime-400/50
          to-transparent
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          container
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            text-center
            max-w-3xl
            mx-auto
            mb-10
          "
        >

          {/* TAG */}
          <span
            className="
              inline-flex
              px-5
              py-2
              text-[11px]
              uppercase
              tracking-[4px]
              text-lime-300
              border
              border-lime-400/20
              bg-lime-400/10
              backdrop-blur-md
            "
          >
            Fresh Collection
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              leading-tight
            "
          >
            New{" "}

            <span
              className="
                bg-gradient-to-r
                from-lime-300
                via-lime-200
                to-yellow-200
                bg-clip-text
                text-transparent
              "
            >
              Arrivals
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-5
              text-sm
              sm:text-base
              text-gray-400
              leading-[1.9]
            "
          >
            Discover our latest handcrafted dishes
            made with fresh ingredients and premium
            healthy flavors.
          </p>

        </div>

        {/* ================================================= */}
        {/* CONTROLS */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-center
            justify-end
            gap-3
            mb-5
          "
        >

          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="
              w-11
              h-11
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              hover:bg-lime-400/10
              hover:border-lime-400/30
              transition-all
              duration-300
              flex
              items-center
              justify-center
              backdrop-blur-xl
            "
          >
            <FaChevronLeft
              size={14}
              className="text-lime-300"
            />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="
              w-11
              h-11
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              hover:bg-lime-400/10
              hover:border-lime-400/30
              transition-all
              duration-300
              flex
              items-center
              justify-center
              backdrop-blur-xl
            "
          >
            <FaChevronRight
              size={14}
              className="text-lime-300"
            />
          </button>

        </div>

        {/* ================================================= */}
        {/* CAROUSEL */}
        {/* ================================================= */}

        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            overflow-x-auto
            pb-4
            scroll-smooth
            snap-x
            snap-mandatory
            cursor-grab
            active:cursor-grabbing

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "

          /* ================================================= */
          /* TOUCH SUPPORT */
          /* ================================================= */

          onTouchStart={(e) => {
            scrollRef.current.startX =
              e.touches[0].clientX;
          }}

          onTouchMove={(e) => {
            const container =
              scrollRef.current;

            if (!container.startX)
              return;

            const diff =
              container.startX -
              e.touches[0].clientX;

            container.scrollLeft +=
              diff;

            container.startX =
              e.touches[0].clientX;
          }}
        >

          {products.map((product) => (
            <div
              key={product.id}
              className="
                snap-start
                flex-shrink-0

                w-[85%]
                sm:w-[48%]
                lg:w-[23%]
              "
            >
              <ProductCard
                product={product}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}