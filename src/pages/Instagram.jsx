import { useRef } from "react";
import GalleryGrid from "../components/GalleryGrid";
import images from "../data/images";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function InstagramPage() {
  const scrollRef = useRef(null);

  // ================= SCROLL =================
  const scroll = (dir) => {
    const container = scrollRef.current;

    if (!container) return;

    const amount = 300;

    container.scrollBy({
      left:
        dir === "left"
          ? -amount
          : amount,

      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        bg-[#07110a]
        text-white
        py-16
        overflow-hidden
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ================================================= */}

      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[480px]
          h-[480px]
          bg-lime-400/10
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          bottom-[-120px]
          right-[-80px]
          w-[300px]
          h-[300px]
          bg-yellow-300/10
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
          via-lime-400/40
          to-transparent
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        {/* ================= HEADER ================= */}

        <div className="text-center mb-10">

          {/* TAG */}
          <div
            className="
              inline-flex
              px-5
              py-2
              border
              border-lime-400/20
              bg-lime-400/10
              text-lime-300
              text-[11px]
              uppercase
              tracking-[4px]
            "
          >
            Social Gallery
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
            "
          >
            Instagram{" "}

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
              Gallery
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              text-gray-400
              mt-4
              text-sm
              sm:text-base
              leading-[1.9]
              max-w-2xl
              mx-auto
            "
          >
            Explore our visual food stories,
            handcrafted dishes, and premium
            healthy meals.
          </p>

        </div>

        {/* ================= BUTTONS ================= */}

        <div
          className="
            flex
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

        {/* ================= SWIPE GALLERY ================= */}

        <div
          ref={scrollRef}
          className="
            flex
            gap-4
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

          {images.map((img, i) => (
            <div
              key={i}
              className="
                snap-start
                flex-shrink-0

                w-[85%]
                sm:w-[48%]
                lg:w-[23%]
              "
            >

              <div
                className="
                  relative
                  group
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-lime-400/10
                  bg-[#101d14]
                  transition-all
                  duration-500
                  hover:border-lime-400/30
                "
              >

                {/* IMAGE */}
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className="
                    w-full
                    h-[280px]
                    sm:h-[260px]
                    lg:h-[240px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-black/10
                    to-transparent
                    opacity-70
                    group-hover:opacity-40
                    transition-all
                    duration-500
                  "
                />

                {/* BORDER LIGHT */}
                <div
                  className="
                    absolute
                    inset-0
                    border
                    border-white/5
                    rounded-[24px]
                    pointer-events-none
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}