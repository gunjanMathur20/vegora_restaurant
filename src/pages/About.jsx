import React from "react";

import PageTransition from "../components/PageTransition";

import {
  Leaf,
  Truck,
  Star,
  Heart,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-[80px] bg-[#08110c] text-white overflow-hidden">
        {/* ====================================================== */}
        {/* HERO */}
        {/* ====================================================== */}

        <section className="relative min-h-[92vh] flex items-center justify-center px-5 sm:px-6 lg:px-10 overflow-hidden">
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

          <div className="absolute inset-0 bg-[#06100b]/88"></div>

          {/* SOFT GLOW */}

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[550px]
              h-[550px]
              bg-yellow-400/10
              blur-[140px]
              rounded-full
              pointer-events-none
            "
          ></div>

          <div
            className="
              absolute
              bottom-0
              right-0
              w-[400px]
              h-[400px]
              bg-lime-400/10
              blur-[120px]
              rounded-full
            "
          ></div>

          {/* CONTENT */}

          <div className="relative z-10 max-w-5xl text-center">
            {/* TAG */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                border
                border-yellow-400/25
                bg-yellow-400/10
                px-5
                py-3
                text-[11px]
                sm:text-[12px]
                uppercase
                tracking-[5px]
                text-yellow-200
                backdrop-blur-xl
              "
            >
              Premium Veg Experience
            </div>

            {/* TITLE */}

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
              Crafted With
              <span className="text-yellow-300"> Passion</span>

              <br />

              Served With Love
            </h1>

            {/* DESC */}

            <p
              className="
                mt-8
                text-sm
                sm:text-base
                md:text-lg
                text-[#d6dccf]
                leading-[2]
                max-w-3xl
                mx-auto
              "
            >
              Experience authentic Indian vegetarian cuisine made with
              handpicked ingredients, rich spices, and unforgettable flavors.
              Every dish is crafted to create comfort, warmth, and memories.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                to="/menu"
                className="
                  group
                  bg-gradient-to-r
                  from-lime-500
                  to-yellow-400
                  hover:from-lime-400
                  hover:to-yellow-300
                  text-black
                  font-bold
                  px-8
                  py-4
                  text-sm
                  uppercase
                  tracking-[3px]
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-3
                  hover:gap-5
                  shadow-[0_15px_40px_rgba(234,179,8,0.28)]
                "
              >
                Explore Menu

                <ArrowRight
                  size={16}
                  className="transition-all duration-300"
                />
              </Link>

              <button
                className="
                  border
                  border-lime-400/20
                  bg-white/[0.04]
                  backdrop-blur-xl
                  hover:bg-yellow-400/[0.08]
                  hover:border-yellow-300/30
                  px-8
                  py-4
                  text-sm
                  uppercase
                  tracking-[3px]
                  transition-all
                  duration-300
                "
              >
                Order Now
              </button>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* STORY */}
        {/* ====================================================== */}

        <section className="relative py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 overflow-hidden">
          {/* GLOW */}

          <div
            className="
              absolute
              -left-32
              top-0
              w-[400px]
              h-[400px]
              bg-yellow-400/5
              blur-[140px]
              rounded-full
              pointer-events-none
            "
          ></div>

          <div
            className="
              max-w-[1400px]
              mx-auto
              grid
              lg:grid-cols-2
              gap-14
              lg:gap-20
              items-center
            "
          >
            {/* IMAGE */}

            <div className="relative overflow-hidden group">
              {/* BORDER */}

              <div
                className="
                  absolute
                  inset-0
                  border
                  border-yellow-300/20
                  scale-95
                  group-hover:scale-100
                  transition-all
                  duration-700
                  z-10
                "
              ></div>

              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                alt="Food"
                className="
                  w-full
                  h-[350px]
                  sm:h-[500px]
                  lg:h-[650px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-[1.03]
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  bg-black/70
                  backdrop-blur-xl
                  border
                  border-lime-400/10
                  px-6
                  py-5
                  max-w-[240px]
                "
              >
                <h4 className="text-3xl font-black text-yellow-300">
                  10+
                </h4>

                <p className="text-sm text-[#d0d0d0] leading-[1.8] mt-2">
                  Years of serving unforgettable vegetarian experiences.
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <span
                className="
                  text-yellow-300
                  uppercase
                  tracking-[4px]
                  text-xs
                "
              >
                Our Journey
              </span>

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-black
                  leading-[1.1]
                  mt-5
                "
              >
                Food That
                <span className="text-lime-300"> Feels Like Home</span>
              </h2>

              <div className="space-y-6 mt-8">
                <p className="text-[#bfc8bf] leading-[2] text-sm sm:text-base">
                  Our journey began with one simple vision — serving fresh,
                  hygienic, and flavorful vegetarian food in a modern dining
                  experience that feels warm and welcoming.
                </p>

                <p className="text-[#bfc8bf] leading-[2] text-sm sm:text-base">
                  Every recipe is crafted using premium ingredients,
                  authentic Indian spices, and traditional cooking methods.
                </p>

                <p className="text-[#bfc8bf] leading-[2] text-sm sm:text-base">
                  We believe great food is more than a meal — it creates
                  emotions, comfort, and moments people remember forever.
                </p>
              </div>

              {/* FEATURES */}

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {[
                  "Fresh Ingredients",
                  "Authentic Recipes",
                  "Fast Delivery",
                  "Luxury Experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-5
                      hover:border-yellow-300/30
                      hover:bg-yellow-400/[0.04]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>

                    <span className="text-sm sm:text-base text-[#edf1ea]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* WHY CHOOSE US */}
        {/* ====================================================== */}

        <section className="py-20 sm:py-24 bg-[#0d1711] px-5 sm:px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            {/* HEADING */}

            <div className="text-center max-w-3xl mx-auto">
              <span className="text-yellow-300 uppercase tracking-[4px] text-xs">
                Why Choose Us
              </span>

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  font-black
                  mt-5
                  leading-[1.2]
                "
              >
                People Don’t Just Eat Here.
                <span className="text-lime-300"> They Return.</span>
              </h2>
            </div>

            {/* CARDS */}

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
              {[
                {
                  icon: <Leaf size={34} />,
                  title: "100% Pure Veg",
                  desc: "Fresh ingredients with a completely vegetarian kitchen.",
                },

                {
                  icon: <Star size={34} />,
                  title: "Authentic Taste",
                  desc: "Traditional Indian recipes crafted with rich spices.",
                },

                {
                  icon: <Truck size={34} />,
                  title: "Fast Delivery",
                  desc: "Hot & fresh meals delivered quickly.",
                },

                {
                  icon: <Heart size={34} />,
                  title: "Made With Love",
                  desc: "Prepared hygienically with passion and care.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    relative
                    border
                    border-white/10
                    bg-[#132019]
                    p-8
                    overflow-hidden
                    group
                    hover:border-yellow-300/30
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >
                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-[120px]
                      h-[120px]
                      bg-yellow-300/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  ></div>

                  <div className="text-yellow-300 mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-[#a8b5ac] leading-[1.9] text-sm mt-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* CTA */}
        {/* ====================================================== */}

        <section className="relative py-24 md:py-32 px-6 overflow-hidden isolate">
          {/* BACKGROUND */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#08110c] via-[#102018] to-[#182814]"></div>

          {/* SOFT GLOW */}

          <div
            className="
              absolute
              -top-32
              left-1/2
              -translate-x-1/2
              w-[520px]
              h-[520px]
              bg-yellow-300/10
              blur-[140px]
              rounded-full
              pointer-events-none
            "
          ></div>

          <div
            className="
              absolute
              -bottom-40
              -right-32
              w-[420px]
              h-[420px]
              bg-lime-300/10
              blur-[140px]
              rounded-full
              pointer-events-none
            "
          ></div>

          {/* CONTENT */}

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                border
                border-yellow-300/20
                bg-yellow-300/5
                px-5
                py-2.5
                text-yellow-200
                text-[10px]
                sm:text-[11px]
                tracking-[4px]
                uppercase
                mb-7
                backdrop-blur-md
              "
            >
              Premium Veg Experience
            </div>

            {/* TITLE */}

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
              "
            >
              Taste The
              <span className="text-yellow-300"> Difference </span>
              Today
            </h2>

            {/* DESC */}

            <p
              className="
                mt-7
                text-[#b8c2b8]
                text-[15px]
                sm:text-[17px]
                md:text-[18px]
                leading-[1.9]
                max-w-3xl
                mx-auto
              "
            >
              Discover rich Indian flavours crafted with premium ingredients,
              authentic recipes and unforgettable taste.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
              <Link
                to="/menu"
                className="
                  bg-gradient-to-r
                  from-lime-500
                  to-yellow-400
                  hover:from-lime-400
                  hover:to-yellow-300
                  text-black
                  font-bold
                  px-10
                  md:px-12
                  py-4
                  text-sm
                  md:text-[15px]
                  uppercase
                  tracking-[3px]
                  transition-all
                  duration-500
                  hover:scale-[1.03]
                  shadow-[0_20px_50px_rgba(234,179,8,0.22)]
                "
              >
                Explore Menu
              </Link>

              <button
                className="
                  border
                  border-[#324234]
                  bg-white/[0.03]
                  backdrop-blur-md
                  hover:border-yellow-300/40
                  hover:bg-yellow-300/10
                  text-white
                  px-10
                  md:px-12
                  py-4
                  text-sm
                  md:text-[15px]
                  uppercase
                  tracking-[3px]
                  transition-all
                  duration-500
                "
              >
                Order Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}