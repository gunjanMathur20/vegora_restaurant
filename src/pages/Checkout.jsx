import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { useCart } from "../context/CartContext";

import DeliveryForm from "../components/checkout/DeliveryForm";
import PaymentMethods from "../components/checkout/PaymentMethods";
import CheckoutItem from "../components/checkout/CheckoutItem";
import OrderSummary from "../components/checkout/OrderSummary";

export default function Checkout() {
  // ================= CART CONTEXT =================
  const { cartItems } = useCart();

  // ================= PAYMENT STATE =================
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // ================= PRICE CALCULATION =================
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const deliveryFee = subtotal > 499 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen bg-[#07110a] text-white pt-[110px] pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* TITLE TAG */}
          <p className="text-lime-300 tracking-[4px] uppercase text-xs sm:text-sm font-semibold mb-3">
            Secure Checkout
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            Complete Your <span className="text-yellow-300">Order</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
            Fast delivery, secure payment and premium food experience with
            Vegora.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 lg:gap-8">
          {/* ================= LEFT SECTION ================= */}
          <div className="space-y-6">
            {/* DELIVERY FORM */}
            <DeliveryForm />

            {/* PAYMENT METHODS */}
            <PaymentMethods
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

            {/* ORDER ITEMS BOX */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
              {/* HEADER */}
              <div className="px-5 sm:px-6 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Order Items
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {cartItems.length} item(s) in your cart
                  </p>
                </div>
              </div>

              {/* ITEMS LIST */}
              <div className="p-4 sm:p-5 space-y-4">
                {cartItems.map((item) => (
                  <CheckoutItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div>
            <OrderSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              total={total}
              paymentMethod={paymentMethod}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
