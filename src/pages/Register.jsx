import { motion, AnimatePresence } from "framer-motion";
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
  // ===============================
  // EMPTY VALIDATION
  // ===============================

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

  // ===============================
  // EMAIL VALIDATION
  // ===============================

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter valid email");

    return;
  }

  // ===============================
  // PASSWORD VALIDATION
  // ===============================

  if (password.length < 6) {
    toast.error(
      "Password must be at least 6 characters"
    );

    return;
  }

  // ===============================
  // USER OBJECT
  // ===============================

  const user = {
    name,
    email,
    password,
  };

  const result = registerUser(user);

  // ===============================
  // USER EXISTS
  // ===============================

  if (!result.success) {
    toast.error(result.message);

    return;
  }

  // ===============================
  // SUCCESS
  // ===============================

  toast.success(
    "Account created successfully"
  );

  // ===============================
  // RESET FIELDS
  // ===============================

  setName("");
  setEmail("");
  setPassword("");

  // ===============================
  // OPEN LOGIN
  // ===============================

  setTimeout(() => {
    onLoginOpen();
  }, 1000);
};

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex overflow-hidden">
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
          {/* GLOW */}

          <div
            className="
              absolute
              top-[-60px]
              right-[-40px]
              w-[180px]
              h-[180px]
              bg-lime-400/10
              blur-3xl
              rounded-full
              pointer-events-none
            "
          ></div>

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

                hover:bg-lime-400/10
                hover:border-lime-400/30

                flex
                items-center
                justify-center

                transition-all
                duration-300
              "
            >
              <HiX className="text-[18px]" />
            </button>
          </div>

          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.05,
            }}
            className="text-center mt-1"
          >
            {/* ICON */}

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
              <div
                className="
                  absolute
                  inset-0
                  rounded-[22px]
                  bg-lime-400/10
                  blur-2xl
                "
              ></div>

              <FaBurger className="text-lime-300 relative z-10" size={30} />
            </div>

            {/* TITLE */}

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

            <p
              className="
                text-gray-400
                text-[12px]
                mt-1.5
              "
            >
              Join Vegora today
            </p>
          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              mt-6
              space-y-3
            "
          >
            {/* NAME */}

            <div>
              <label
                className="
                  text-[10px]
                  uppercase
                  tracking-[2px]
                  text-gray-400
                  pl-1
                "
              >
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
                  placeholder:text-gray-500

                  outline-none

                  transition-all
                  duration-300

                  focus:border-lime-400/40
                  focus:bg-[#16231b]
                "
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                className="
                  text-[10px]
                  uppercase
                  tracking-[2px]
                  text-gray-400
                  pl-1
                "
              >
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
                  placeholder:text-gray-500

                  outline-none

                  transition-all
                  duration-300

                  focus:border-lime-400/40
                  focus:bg-[#16231b]
                "
              />
            </div>

            {/* PASSWORD */}

            <div>
              <label
                className="
                  text-[10px]
                  uppercase
                  tracking-[2px]
                  text-gray-400
                  pl-1
                "
              >
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
                  placeholder:text-gray-500

                  outline-none

                  transition-all
                  duration-300

                  focus:border-lime-400/40
                  focus:bg-[#16231b]
                "
              />
            </div>

            {/* REGISTER BUTTON */}

            <motion.button
              whileTap={{
                scale: 0.98,
              }}
              whileHover={{
                scale: 1.01,
              }}
              onClick={handleRegister}
              className="
                relative
                overflow-hidden

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

                transition-all
                duration-300

                shadow-[0_10px_25px_rgba(163,230,53,0.18)]

                mt-1
              "
            >
              <span className="relative z-10">Register</span>
            </motion.button>
          </motion.div>

          {/* LOGIN SWITCH */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.15,
            }}
            className="
              mt-5
              pt-4

              border-t
              border-white/5

              text-center
            "
          >
            <p
              className="
                text-gray-400
                text-[13px]
              "
            >
              Already have an account?
            </p>

            <button
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

                hover:bg-lime-400/10
                hover:border-lime-400/40
                hover:text-yellow-200

                transition-all
                duration-300
              "
            >
              Login Instead
            </button>
          </motion.div>

          {/* BOTTOM LINE */}

          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              h-[2px]

              bg-gradient-to-r
              from-lime-400
              via-yellow-300
              to-lime-400
            "
          ></div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

