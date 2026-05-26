
import { motion } from "framer-motion";

import { HiX } from "react-icons/hi";

import { FaBurger } from "react-icons/fa6";

import { useState } from "react";

import { toast } from "react-toastify";

import { loginUser } from "../utils/auth";

export default function Login({
  onClose,
  onRegisterOpen,
}) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    // EMPTY VALIDATION

    if (!email.trim()) {
      toast.error("Please enter email");

      return;
    }

    if (!password.trim()) {
      toast.error(
        "Please enter password"
      );

      return;
    }

    // EMAIL VALIDATION

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error(
        "Please enter valid email"
      );

      return;
    }

    // LOGIN

    const result = loginUser(
      email,
      password
    );

    // INVALID USER

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    // SUCCESS

    toast.success(
      "Login Successful"
    );

    setEmail("");

    setPassword("");

    // CLOSE MODAL

    setTimeout(() => {
      onClose();

      window.location.reload();
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
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />

      {/* PANEL */}

      <motion.div
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "100%",
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
          py-4
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

        <div className="text-center mt-2">
          <div
            className="
              w-[72px]
              h-[72px]
              mx-auto
              rounded-[22px]
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-lime-400/15
              to-yellow-300/10
              border
              border-lime-400/10
            "
          >
            <FaBurger
              className="text-lime-300"
              size={30}
            />
          </div>

          <h2
            className="
              text-[28px]
              font-black
              mt-4
              bg-gradient-to-r
              from-lime-300
              to-yellow-200
              bg-clip-text
              text-transparent
            "
          >
            Welcome Back
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Login to continue
          </p>
        </div>

        {/* FORM */}

        <div className="mt-6 space-y-3">
          {/* EMAIL */}

          <div>
            <label className="text-[10px] uppercase tracking-[2px] text-gray-400 pl-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
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
                outline-none
                focus:border-lime-400/40
              "
            />
          </div>

          {/* PASSWORD */}

          <div>
            <label className="text-[10px] uppercase tracking-[2px] text-gray-400 pl-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
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
                outline-none
                focus:border-lime-400/40
              "
            />
          </div>

          {/* LOGIN BTN */}

          <motion.button
            whileTap={{
              scale: 0.98,
            }}
            whileHover={{
              scale: 1.01,
            }}
            onClick={handleLogin}
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
              mt-2
            "
          >
            Login
          </motion.button>
        </div>

        {/* SWITCH */}

        <div className="mt-5 pt-4 border-t border-white/5 text-center">
          <p className="text-gray-400 text-[13px]">
            Don’t have account?
          </p>

          <button
            type="button"
            onClick={onRegisterOpen}
            className="
              mt-3
              w-full
              h-[46px]
              rounded-[15px]
              border
              border-lime-400/20
              bg-lime-400/5
              text-lime-300
              text-sm
              font-semibold
            "
          >
            Register Instead
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}