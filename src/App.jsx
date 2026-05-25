
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// PAGES ONLY
import Home from "./pages/Home";
import Instagram from "./pages/Instagram";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        transition:Bounce
        toastStyle={{
          background: "rgba(16,29,20,0.92)",
          color: "#d9f99d",
          border: "1px solid rgba(163,230,53,0.15)",
          borderRadius: "18px",
          backdropFilter: "blur(18px)",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 10px 35px rgba(163,230,53,0.12)",
        }}
      />
    </Router>
  );
}
