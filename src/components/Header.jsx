import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/AddToWishlist";

import { FaBurger } from "react-icons/fa6";
import { CiUser, CiSearch, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

import AuthModal from "./AuthModal";

import { toast } from "react-toastify";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [loggedInUser, setLoggedInUser] = useState(null);

  // ⭐ FIX: user dropdown control
  const [userOpen, setUserOpen] = useState(false);

  const searchRef = useRef(null);
  const userRef = useRef(null);

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const location = useLocation();
  const navigate = useNavigate();

  const forceSolidBg = location.pathname !== "/";

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("foodryCurrentUser"));
    if (currentUser) setLoggedInUser(currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("foodryCurrentUser");
    setLoggedInUser(null);
    setUserOpen(false); // ⭐ close dropdown
    toast.success("Logout Successful");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    setSearchOpen(false);
    setUserOpen(false);
  }, [location.pathname]);

  // ESC close
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setUserOpen(false);
      }
    };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  // outside click user dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    if (userOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [userOpen]);

  // search close outside
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    if (searchOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchOpen]);

  const handleSearchSubmit = () => {
    const trimmed = search.trim();
    if (!trimmed) return;

    // close UI first (smooth UX)
    setSearchOpen(false);

    // small delay for smooth transition
    setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }, 120);

    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "CONTACT US", path: "/Contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.header
        animate={{
          backgroundColor:
            scrolled || forceSolidBg ? "rgba(5,18,10,0.92)" : "rgba(0,0,0,0)",
          backdropFilter: "blur(18px)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 border-b border-lime-400/10 text-white"
      >
        <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 h-[78px] flex items-center justify-between">
          {/* MOBILE */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setOpen(true)}
              className="
    relative
    w-11 h-11
    rounded-xl

    border border-lime-300/20
    bg-white/5

    flex items-center justify-center

    transition-all duration-200

    hover:bg-lime-400/10
    hover:border-lime-300/40
    hover:shadow-[0_0_18px_rgba(163,230,53,0.25)]
    hover:-translate-y-[1px]

    active:scale-95
    active:translate-y-0

    backdrop-blur-md
  "
            >
              <HiMenu className="text-[22px] text-white/90" />
            </button>

            <Link to="/" className="flex items-center gap-2">
              <FaBurger className="text-lime-300 text-[26px]" />
              <div>
                <h2 className="text-[20px] font-black bg-gradient-to-r from-lime-300 to-yellow-200 bg-clip-text text-transparent">
                  Vegora
                </h2>
              </div>
            </Link>
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm transition ${
                    active
                      ? "text-lime-300"
                      : "text-white/80 hover:text-lime-200"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* LOGO */}
          <Link
            to="/"
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-3"
          >
            <FaBurger className="text-lime-300 text-[38px]" />
            <h1 className="text-[30px] font-black bg-gradient-to-r from-lime-300 to-yellow-200 bg-clip-text text-transparent">
              Vegora
            </h1>
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <button onClick={() => setSearchOpen(true)} className="iconBtn">
              <CiSearch />
            </button>

            {/* USER DROPDOWN */}
            <div ref={userRef} className="relative">
              <button
                onClick={() => {
                  if (!loggedInUser) {
                    setAuthOpen(true);
                  } else {
                    setUserOpen((p) => !p);
                  }
                }}
                className="iconBtn"
              >
                <CiUser />
              </button>

              <AnimatePresence>
                {loggedInUser && userOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
        absolute right-0 top-[118%]
        w-[88vw] max-w-[255px]

        overflow-hidden
        rounded-2xl

        border border-white/10
        bg-[#0d1711]/96

        backdrop-blur-2xl

        shadow-[0_18px_50px_rgba(0,0,0,0.45)]

        z-[999]
      "
                  >
                    {/* TOP BORDER */}
                    <div className="h-[2px] bg-gradient-to-r from-lime-300 via-yellow-200 to-lime-300" />

                    {/* USER INFO */}
                    <div className="px-4 py-3 border-b border-white/8">
                      <div className="flex items-center gap-3">
                        {/* AVATAR */}
                        <div
                          className="
              w-11 h-11 rounded-full

              bg-gradient-to-br
              from-lime-300
              to-yellow-200

              flex items-center justify-center

              text-black
              text-base
              font-black

              shadow-md shadow-lime-400/20
            "
                        >
                          {loggedInUser.name?.charAt(0)}
                        </div>

                        {/* INFO */}
                        <div className="flex-1 overflow-hidden">
                          <h3 className="text-white text-sm font-semibold truncate">
                            {loggedInUser.name}
                          </h3>

                          <p className="text-[11px] text-gray-400 truncate mt-[2px]">
                            {loggedInUser.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* MENU */}
                    <div className="p-2">
                      {/* PROFILE */}
                      <Link
                        to="/profile"
                        onClick={() => setUserOpen(false)}
                        className="
            group

            flex items-center gap-3

            px-3 py-2.5
            rounded-xl

            hover:bg-white/[0.04]

            transition-all duration-200
          "
                      >
                        {/* ICON */}
                        <div
                          className="
              w-9 h-9 rounded-lg

              bg-white/5
              border border-white/10

              flex items-center justify-center

              group-hover:bg-lime-400/10
              group-hover:border-lime-300/20

              transition-all duration-200
            "
                        >
                          <CiUser
                            className="
                text-[18px]
                text-white/75

                group-hover:text-lime-300
                transition
              "
                          />
                        </div>

                        {/* TEXT */}
                        <div>
                          <p
                            className="
                text-sm
                font-medium
                text-white/85

                group-hover:text-lime-300
                transition
              "
                          >
                            My Profile
                          </p>

                          <span className="text-[10px] text-gray-500">
                            Orders & account
                          </span>
                        </div>
                      </Link>

                      {/* LOGOUT */}
                      <button
                        onClick={handleLogout}
                        className="
            group

            w-full mt-1

            flex items-center gap-3

            px-3 py-2.5
            rounded-xl

            hover:bg-red-500/8

            transition-all duration-200
          "
                      >
                        {/* ICON */}
                        <div
                          className="
              w-9 h-9 rounded-lg

              bg-red-500/10
              border border-red-400/10

              flex items-center justify-center

              transition-all duration-200
            "
                        >
                          <HiX className="text-[18px] text-red-300" />
                        </div>

                        {/* TEXT */}
                        <div className="text-left">
                          <p className="text-sm font-medium text-red-200">
                            Logout
                          </p>

                          <span className="text-[10px] text-red-300/60">
                            Sign out
                          </span>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WISHLIST */}
            <Link className="iconBtn relative" to="/wishlist">
              <CiHeart />
              {wishlistItems.length > 0 && (
                <span className="badge">{wishlistItems.length}</span>
              )}
            </Link>

            {/* CART */}
            <Link className="iconBtn relative" to="/cart">
              <CiShoppingBasket />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
          </div>
        </div>

        {/* SEARCH */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[78px] left-0 w-full bg-[#0f1d16]/95 p-4 flex justify-center border-b border-lime-300/10"
            >
              <div className="flex gap-2 w-full max-w-xl">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search food..."
                  className="flex-1 p-3 rounded-xl bg-black/30 border border-white/10 outline-none"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="px-5 bg-lime-400 text-black rounded-xl font-semibold"
                >
                  Search
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[998]"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "-100%", opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 22,
              }}
              className="
          fixed top-0 left-0 
          w-[85%] max-w-[340px] h-full 
          z-[999] 
          bg-gradient-to-b from-[#0f1d16] via-[#0b1410] to-[#060b08]
          border-r border-lime-300/10 
          shadow-[0_0_40px_rgba(163,230,53,0.08)]
          flex flex-col
        "
            >
              {/* HEADER */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <FaBurger className="text-lime-300 text-[28px] drop-shadow-[0_0_10px_rgba(163,230,53,0.4)]" />

                  <div>
                    <h2 className="text-white font-extrabold text-lg tracking-wide leading-tight">
                      Vegora
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
              w-9 h-9 rounded-lg 
              bg-white/5 border border-white/10 
              flex items-center justify-center 
              hover:bg-lime-400/10 hover:scale-105 
              transition-all duration-200
            "
                >
                  <HiX className="text-xl text-white" />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="p-4 space-y-2 flex-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="
                  block px-4 py-3 
                  rounded-xl 
                  text-white/80 
                  font-medium tracking-wide
                  hover:text-lime-300 
                  hover:bg-white/5 
                  hover:shadow-[0_0_15px_rgba(163,230,53,0.08)]
                  transition-all duration-200
                "
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* FOOD VISUAL SECTION */}
                <div className="mt-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
                    alt="food"
                    className="w-full h-[210px] object-cover opacity-90 hover:opacity-100 transition"
                  />

                  <div className="p-3 bg-black/30 backdrop-blur">
                    <p className="text-sm text-lime-200 font-semibold">
                      Craving something delicious?
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Explore fresh meals, fast delivery & premium taste 🍕
                    </p>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="p-4 border-t border-white/10">
                <p className="text-xs text-gray-500 text-center tracking-wide">
                  Made with ❤️ by Vegora
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODALS */}
      <AuthModal open={authOpen} setOpen={setAuthOpen} />

      {/* STYLES */}
      <style>{`
        .iconBtn{
          width:40px;
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:12px;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(163,230,53,0.15);
          transition:.25s;
        }
        .iconBtn:hover{
          background:rgba(163,230,53,0.12);
          transform:translateY(-1px);
        }
        .badge{
          position:absolute;
          top:-6px;
          right:-6px;
          background:#a3e635;
          color:black;
          font-size:10px;
          padding:0 5px;
          border-radius:999px;
          font-weight:700;
        }
      `}</style>
    </>
  );
}
