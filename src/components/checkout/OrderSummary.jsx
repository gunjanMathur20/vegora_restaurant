import { motion } from "framer-motion";

export default function OrderSummary({
  subtotal,
  deliveryFee,
  tax,
  total,
  paymentMethod,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-[110px] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-black text-white">
          Order Summary
        </h2>
         <p className="text-sm text-gray-400 mt-1">
          Premium food experience with fast delivery.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-white font-medium">₹{subtotal}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Delivery Fee</span>
          <span className="text-white font-medium">
            {deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}
          </span>
        </div>
         <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Tax & Charges</span>
          <span className="text-white font-medium">₹{tax}</span>
        </div>

        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
          <span className="text-base font-semibold text-white">
            Total Amount
          </span>

          <span className="text-2xl font-black text-lime-300">
            ₹{total}
          </span>
        </div>
      </div>
       <div className="mt-6 rounded-2xl border border-lime-300/10 bg-lime-400/5 p-4">
        <p className="text-xs uppercase tracking-[3px] text-lime-300 mb-2">
          Payment
        </p>

        <p className="text-white font-medium capitalize">
          {paymentMethod}
        </p>
      </div>

      <button
        className="
          mt-6 w-full h-[54px]

          rounded-2xl

          bg-gradient-to-r
          from-lime-300
          to-yellow-200
           text-black
          font-black
          tracking-[2px]

          hover:scale-[1.02]

          transition-all duration-300
          shadow-lg shadow-lime-400/20
        "
      >
        PLACE ORDER
      </button>

      <p className="text-center text-[11px] text-gray-500 mt-4 leading-relaxed">
        By placing this order you agree to Vegora terms & conditions.
      </p>
    </motion.div>
  );
}