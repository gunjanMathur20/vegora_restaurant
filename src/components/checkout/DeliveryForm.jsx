import { motion } from "framer-motion";

export default function DeliveryForm() {
  return (
    // Delivery form container
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6"
    >
      {/* Section heading */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Delivery Details
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Enter your delivery information.
        </p>
      </div>

      {/* Form fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Full name */}
        <input
          type="text"
          placeholder="Full Name"
          className="checkoutInput"
        />

        {/* Phone number */}
        <input
          type="tel"
          placeholder="Phone Number"
          className="checkoutInput"
        />

        {/* Email address */}
        <input
          type="email"
          placeholder="Email Address"
          className="checkoutInput sm:col-span-2"
        />

        {/* Delivery address */}
        <textarea
          rows="4"
          placeholder="Delivery Address"
          className="checkoutInput sm:col-span-2 resize-none"
        />
      </div>
    </motion.div>
  );
}