import { motion } from "framer-motion";

export default function DeliveryForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6"
    >
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Delivery Details
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Enter your delivery information.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="checkoutInput"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="checkoutInput"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="checkoutInput sm:col-span-2"
        />
        <textarea
          rows="4"
          placeholder="Delivery Address"
          className="checkoutInput sm:col-span-2 resize-none"
        />
      </div>
    </motion.div>
  );
}