

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* 🔥 BACKGROUND SLIDE VARIANTS */
const bgVariants = {
  initial: (dir) => ({
    opacity: 0,
    x: dir === "right" ? 80 : -80,
  }),

  animate: {
    opacity: 1,
    x: 0,
  },

  exit: (dir) => ({
    opacity: 0,
    x: dir === "right" ? -80 : 80,
  }),
};

/* ✨ TEXT VARIANTS */
const textVariants = {
  initial: (isMobile) => ({
    opacity: 0,
    y: isMobile ? 25 : 60,
  }),

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
      mass: 0.9,
    },
  },

  exit: {
    opacity: 0,
    y: -15,

    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

/* 🔥 BUTTON VARIANTS */
const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.45,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function BannerSlide({ slide }) {
  const { textPosition } = slide;

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      custom={textPosition}
      variants={bgVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 flex items-center"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* GREEN + YELLOW GLOW */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-lime-500/10
          via-transparent
          to-yellow-400/10
        "
      />

      {/* CONTENT */}
      <motion.div
        custom={isMobile}
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`
          relative z-20
          container px-6 md:px-16
          text-white max-w-2xl

          ${
            textPosition === "right"
              ? "md:ml-auto md:mr-24 md:text-right"
              : "md:mr-auto md:ml-24 md:text-left"
          }
        `}
      >
        {/* SUBTITLE */}
        <p
          className="
            uppercase tracking-[5px]
            text-sm mb-4
            text-lime-300
            font-semibold
          "
        >
          {slide.subtitle}
        </p>

        {/* TITLE */}
        <h1
          className="
            text-4xl md:text-6xl
            font-bold leading-tight
          "
        >
          <span className="text-white">
            {slide.title}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5 text-gray-200
            text-sm md:text-base
            leading-relaxed
          "
        >
          {slide.description}
        </p>

        {/* BUTTON */}
        <motion.div
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          <Link to={slide.link}>
            <button
              className="
                mt-8 px-8 py-3

                bg-lime-400
                text-black

                font-bold
                tracking-[3px]
                text-sm

                hover:bg-yellow-300
                hover:scale-105

                transition-all duration-300

                shadow-lg
                shadow-lime-400/30
              "
            >
              {slide.button}
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
