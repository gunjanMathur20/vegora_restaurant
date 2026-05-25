import { motion } from "framer-motion";

import { HiX } from "react-icons/hi";

import { FaBurger } from "react-icons/fa6";

import { useState } from "react";

import { toast } from "react-toastify";

import { registerUser } from "../utils/auth";

export default function Register({ onClose, onLoginOpen }) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");

      return;
    }

    if (!email.trim()) {
      toast.error("Please enter email");

      return;
    }

    if (!password.trim()) {
      toast.error("Please enter password");

      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter valid email");

      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");

      return;
    }

    const user = {
      name,
      email,
      password,
    };

    const result = registerUser(user);

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success("Account created successfully");

    setName("");

    setEmail("");

    setPassword("");

    // SWITCH TO LOGIN

    setTimeout(() => {
      onLoginOpen();
    }, 1000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKDROP */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          inset-0
          bg-black/75
          backdrop-blur-md
        "
        onClick={onClose}
      />

      {/* PANEL */}

      <motion.div
        initial={{
          x: "100%",
          opacity: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: "100%",
          opacity: 0.8,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 240,
        }}
        className="
          relative
          z-10
          ml-auto
          w-full
          max-w-md
          h-screen
          overflow-hidden
          bg-gradient-to-b
          from-[#0f1712]
          via-[#111c15]
          to-[#0a100c]
          border-l
          border-lime-400/10
          text-white
          px-5
          sm:px-6
          py-4
          shadow-[-10px_0_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* CLOSE */}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="
              w-9
              h-9
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              flex
              items-center
              justify-center
            "
          >
            <HiX className="text-[18px]" />
          </button>
        </div>

        {/* HEADER */}

        <div className="text-center mt-1">
          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-[72px]
              h-[72px]
              mx-auto
              rounded-[22px]
              bg-gradient-to-br
              from-lime-400/15
              to-yellow-300/10
              border
              border-lime-400/10
            "
          >
            <FaBurger className="text-lime-300" size={30} />
          </div>

          <h2
            className="
              text-[26px]
              sm:text-[28px]
              font-black
              mt-4
              tracking-wide
              bg-gradient-to-r
              from-lime-300
              via-lime-200
              to-yellow-200
              bg-clip-text
              text-transparent
            "
          >
            Create Account
          </h2>

          <p className="text-gray-400 text-[12px] mt-1.5">Join Vegora today</p>
        </div>

        {/* FORM */}

        <div className="mt-6 space-y-3">
          <div>
            <label className="text-[10px] uppercase tracking-[2px] text-gray-400 pl-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                mt-2
                h-[50px]
                px-4
                rounded-[16px]
                bg-[#121d16]
                border
                border-white/10
                text-white
                text-sm
                outline-none
              "
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[2px] text-gray-400 pl-1">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                mt-2
                h-[50px]
                px-4
                rounded-[16px]
                bg-[#121d16]
                border
                border-white/10
                text-white
                text-sm
                outline-none
              "
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[2px] text-gray-400 pl-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                mt-2
                h-[50px]
                px-4
                rounded-[16px]
                bg-[#121d16]
                border
                border-white/10
                text-white
                text-sm
                outline-none
              "
            />
          </div>

          <motion.button
            whileTap={{
              scale: 0.98,
            }}
            whileHover={{
              scale: 1.01,
            }}
            onClick={handleRegister}
            className="
              w-full
              h-[52px]
              rounded-[16px]
              bg-gradient-to-r
              from-lime-400
              to-yellow-300
              text-black
              font-black
              tracking-[2px]
              uppercase
              text-sm
              mt-1
            "
          >
            Register
          </motion.button>
        </div>

        {/* LOGIN SWITCH */}

        <div className="mt-5 pt-4 border-t border-white/5 text-center">
          <p className="text-gray-400 text-[13px]">Already have an account?</p>

          <button
            type="button"
            onClick={onLoginOpen}
            className="
              mt-3
              h-[46px]
              w-full
              rounded-[15px]
              border
              border-lime-400/20
              bg-lime-400/5
              text-lime-300
              text-sm
              font-semibold
            "
          >
            Login Instead
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
