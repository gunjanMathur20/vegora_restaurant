import { useRef } from "react";
import { Link } from "react-router-dom";

import promo1 from "../assets/promoImage01.webp";
import promo2 from "../assets/promoImage02.webp";

export default function PromoBanners() {
  const scrollRef = useRef(null);

  const banners = [
    {
      img: promo1,
      title: "Good Price Combos",
      link: "/shop",
    },
    {
      img: promo2,
      title: "Collection Pizza",
      link: "/menu",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] py-14 text-white">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid container mx-auto px-6 gap-8 md:grid-cols-2">

        {banners.map((b, i) => (
          <div
            key={i}
            className="
              relative group h-[320px]
              overflow-hidden rounded-3xl
              border border-lime-400/20
              shadow-[0_0_25px_rgba(163,230,53,0.08)]
            "
          >

            {/* IMAGE */}
            <img
              src={b.img}
              alt={b.title}
              className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />

            {/* GREEN + YELLOW THEME OVERLAY */}
            <div className="
              absolute inset-0
              bg-gradient-to-r
              from-black/80
              via-lime-900/20
              to-yellow-500/10
              group-hover:from-black/85
              transition-all duration-500
            " />

            {/* GLOW */}
            <div className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition duration-500
              bg-gradient-to-r
              from-lime-400/10
              to-yellow-300/10
            " />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-center pl-10">

              <span className="
                text-lime-300 text-sm
                tracking-[4px] uppercase mb-3
              ">
                Fresh & Healthy
              </span>

              <h2 className="
                text-3xl font-bold mb-5
                text-white
                group-hover:text-lime-300
                transition
              ">
                {b.title}
              </h2>

              {/* BUTTON LINK */}
              <Link to={b.link}>
                <button
                  className="
                    w-fit px-7 py-3
                    bg-lime-400 text-black
                    text-sm font-bold
                    tracking-widest
                    rounded-full
                    hover:bg-yellow-300
                    hover:scale-105
                    transition-all duration-300
                    shadow-lg shadow-lime-400/20
                  "
                >
                  SHOP NOW
                </button>
              </Link>

            </div>

          </div>
        ))}
      </div>

      {/* ================= MOBILE SWIPE ================= */}
      <div className="md:hidden">

        <div
          ref={scrollRef}
          className="
            flex overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth px-4 gap-4
            [&::-webkit-scrollbar]:hidden
          "
        >

          {banners.map((b, i) => (
            <div
              key={i}
              className="
                flex-shrink-0 w-full snap-start
                relative h-[260px]
                overflow-hidden rounded-3xl
                border border-lime-400/20
              "
            >

              {/* IMAGE */}
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-full object-cover"
              />

              {/* GREEN/YELLOW OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-r
                from-black/75
                via-lime-900/20
                to-yellow-400/10
              " />

              {/* CONTENT */}
              <div className="
                absolute inset-0
                flex flex-col justify-center
                pl-6
              ">

                <span className="
                  text-lime-300 text-xs
                  tracking-[3px] uppercase mb-2
                ">
                  Healthy Choice
                </span>

                <h2 className="
                  text-2xl font-bold mb-4
                  text-white
                ">
                  {b.title}
                </h2>

                {/* BUTTON LINK */}
                <Link to={b.link}>
                  <button
                    className="
                      w-fit px-6 py-2.5
                      bg-lime-400 text-black
                      text-sm font-bold
                      tracking-widest
                      rounded-full
                      active:scale-95
                      hover:bg-yellow-300
                      transition-all duration-300
                    "
                  >
                    SHOP NOW
                  </button>
                </Link>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}