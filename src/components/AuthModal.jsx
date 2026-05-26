import { useState, useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";

import Register from "../pages/Register";

export default function AuthModal({ open, setOpen }) {
  // Track current modal mode (login/register)
  const [mode, setMode] = useState("login");

  // Reset modal to login mode when closed
  useEffect(() => {
    if (!open) {
      setMode("login");
    }
  }, [open]);

  return (
    // Animate modal transitions
    <AnimatePresence mode="wait">
      {open &&
        // Show Login modal
        (mode === "login" ? (
          <Login
            key="login"
            // Close modal
            onClose={() => setOpen(false)}
            // Switch to Register modal
            onRegisterOpen={() => setMode("register")}
          />
        ) : (
          // Show Register modal
          <Register
            key="register"
            // Close modal
            onClose={() => setOpen(false)}
            // Switch to Login modal
            onLoginOpen={() => setMode("login")}
          />
        ))}
    </AnimatePresence>
  );
}
