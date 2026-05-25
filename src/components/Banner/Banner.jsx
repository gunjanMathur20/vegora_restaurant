import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

import BannerSlide from "./BannerSlide";
import { bannerData } from "../../data/bannerData";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % bannerData.length),

    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length),

    trackMouse: true,
  });

  return (
    <section
      className="relative h-screen overflow-hidden bg-black"
      {...swipeHandlers}
    >
      {/* SLIDES */}
      <AnimatePresence initial={false}>
        <BannerSlide key={bannerData[index].id} slide={bannerData[index]} />
      </AnimatePresence>

      {/* LEFT ARROW (HIDDEN ON MOBILE) */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length)
        }
        className="
          hidden md:flex
          absolute left-4 top-1/2
          -translate-y-1/2 z-30

          w-12 h-12
          rounded-full

          items-center justify-center

          bg-black/40
          backdrop-blur-md

          border border-lime-400/30

          text-white text-3xl

          hover:bg-lime-400
          hover:text-black
          hover:scale-110

          transition-all duration-300
        "
      >
        <HiChevronLeft />
      </button>

      {/* RIGHT ARROW (HIDDEN ON MOBILE) */}
      <button
        onClick={() => setIndex((prev) => (prev + 1) % bannerData.length)}
        className="
          hidden md:flex
          absolute right-4 top-1/2
          -translate-y-1/2 z-30

          w-12 h-12
          rounded-full

          items-center justify-center

          bg-black/40
          backdrop-blur-md

          border border-yellow-300/30

          text-white text-3xl

          hover:bg-yellow-300
          hover:text-black
          hover:scale-110

          transition-all duration-300
        "
      >
        <HiChevronRight />
      </button>

      {/* DOTS */}
      <div
        className="
          absolute bottom-6 left-1/2
          -translate-x-1/2
          flex gap-3 z-30
        "
      >
        {bannerData.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full cursor-pointer
              transition-all duration-300

              ${
                i === index
                  ? "bg-lime-400 scale-125 shadow-lg shadow-lime-400/40"
                  : "bg-white/40 hover:bg-yellow-300"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
