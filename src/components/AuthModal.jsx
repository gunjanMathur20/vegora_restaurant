

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";

import Register from "../pages/Register";

export default function AuthModal({
  open,
  setOpen,
}) {
  const [mode, setMode] =
    useState("login");

  if (!open) return null;

  return (
    <AnimatePresence mode="wait">
      {mode === "login" ? (
        <Login
          key="login"
          onClose={() =>
            setOpen(false)
          }
          onRegisterOpen={() =>
            setMode("register")
          }
        />
      ) : (
        <Register
          key="register"
          onClose={() =>
            setOpen(false)
          }
          onLoginOpen={() =>
            setMode("login")
          }
        />
      )}
    </AnimatePresence>
  );
}