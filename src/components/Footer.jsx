import React from "react";

import {
  FaTwitter,
  FaBasketballBall,
  FaBehance,
  FaInstagram,
  FaHamburger,
  FaLeaf,
} from "react-icons/fa";

import { MdOutlineDeliveryDining } from "react-icons/md";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    // Footer main wrapper
    <footer className="relative w-full overflow-hidden bg-[#040805] text-white border-t border-lime-400/10">
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* TOP CENTER GLOW */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-lime-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse" />

      {/* RIGHT BOTTOM GLOW */}
      <div className="absolute bottom-[-250px] right-[-100px] w-[500px] h-[500px] bg-yellow-300/10 blur-[120px] rounded-full pointer-events-none" />

      {/* LEFT BOTTOM GLOW */}
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* TOP BORDER GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* ================= BRAND SECTION ================= */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-4">
            {/* LOGO ICON */}
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* ICON GLOW */}
              <div className="absolute w-20 h-20 bg-lime-400/20 blur-3xl rounded-full" />

              <FaHamburger
                size={42}
                className="relative text-yellow-300 drop-shadow-[0_0_22px_rgba(253,224,71,0.9)]"
              />
            </motion.div>

            {/* BRAND TEXT */}
            <div>
              <h1 className="text-4xl font-black tracking-wide bg-gradient-to-r from-lime-300 via-lime-200 to-yellow-200 bg-clip-text text-transparent">
                Vegora
              </h1>

              <p className="text-[10px] uppercase tracking-[5px] text-gray-500 mt-1">
                Fresh & Healthy
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 leading-[2] text-sm max-w-xs">
            Premium healthy restaurant experience crafted with fresh
            ingredients, organic recipes, and modern flavors for food lovers.
          </p>

          {/* FEATURE BOXES */}
          <div className="mt-8 flex flex-col gap-4">
            {/* FEATURE 1 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/20 transition-all duration-500 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-lime-400/10 to-transparent" />

              <div className="relative w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0">
                <FaLeaf className="text-lime-300 text-lg" />
              </div>

              <div className="relative">
                <p className="text-sm font-semibold text-white">
                  100% Fresh Ingredients
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Healthy organic meals everyday
                </p>
              </div>
            </motion.div>

            {/* FEATURE 2 */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-yellow-300/20 transition-all duration-500 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-yellow-300/10 to-transparent" />

              <div className="relative w-12 h-12 rounded-2xl bg-yellow-300/10 border border-yellow-300/20 flex items-center justify-center shrink-0">
                <MdOutlineDeliveryDining className="text-yellow-300 text-2xl" />
              </div>

              <div className="relative">
                <p className="text-sm font-semibold text-white">
                  Fast Delivery
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Quick and safe doorstep delivery
                </p>
              </div>
            </motion.div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-8">
            {[FaTwitter, FaBasketballBall, FaBehance, FaInstagram].map(
              (Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -7, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-500 flex items-center justify-center cursor-pointer backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.35)] overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-tr from-white/20 to-transparent" />

                  <Icon className="relative text-[18px]" />
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        {[
          {
            title: "Help & Info",
            color: "bg-lime-400",
            items: [
              "About Us",
              "Privacy Policy",
              "Terms & Conditions",
              "Return Policy",
              "Support Center",
            ],
          },

          {
            title: "About Vegora",
            color: "bg-yellow-300",
            items: [
              "Our Story",
              "Restaurant",
              "Contact",
              "Healthy Foods",
              "Premium Dining",
            ],
          },

          {
            title: "Categories",
            color: "bg-lime-400",
            items: [
              "Fresh Burgers",
              "Healthy Meals",
              "Organic Drinks",
              "Green Salads",
              "Desserts",
            ],
          },
        ].map((section, i) => (
          // LINK COLUMN
          <div key={i}>
            {/* TITLE */}
            <h2 className="text-xl font-bold text-yellow-300">
              {section.title}
            </h2>

            {/* UNDERLINE */}
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-lime-400 to-yellow-300 mt-3 mb-8" />

            {/* LINKS LIST */}
            <ul className="space-y-5">
              {section.items.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group text-gray-400 hover:text-lime-300 transition-all duration-500 cursor-pointer text-sm flex items-center gap-3"
                >
                  {/* DOT */}
                  <span
                    className={`w-2 h-2 rounded-full ${section.color} shadow-[0_0_12px_rgba(132,204,22,0.8)]`}
                  />

                  {/* LINK TEXT */}
                  <span className="relative">
                    {item}

                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-lime-300 transition-all duration-500 group-hover:w-full" />
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 flex flex-col items-center justify-center text-center">
          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm leading-relaxed">
            © 2026{" "}
            <span className="text-lime-300 font-semibold">
              Vegora Restaurant
            </span>
            . All Rights Reserved.
          </p>

          {/* CREDITS */}
          <p className="text-gray-500 text-xs mt-3 leading-relaxed">
            Designed & Developed by{" "}
            <span className="text-yellow-300 font-semibold">Gunjan Mathur</span>
            <br /> • Powered by{" "}
            <span className="text-lime-300 font-semibold">G2Nesux Tech</span>
          </p>

          {/* ANIMATED LINE */}
          <div className="relative mt-6 w-48 h-[2px] rounded-full overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
