import { motion } from "framer-motion";

const methods = [
  {
    id: "cod",
    title: "Cash on Delivery",
    desc: "Pay when your order arrives",
  },
  {
    id: "upi",
    title: "UPI Payment",
    desc: "Google Pay, PhonePe & Paytm",
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    desc: "Secure encrypted payment",
  },
];

export default function PaymentMethods({ paymentMethod, setPaymentMethod }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6"
    >
      <div className="mb-5">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Payment Method
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Choose your preferred payment option.
        </p>
      </div>

      <div className="space-y-3">
        {methods.map((method) => {
          const active = paymentMethod === method.id;

          return (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`
                w-full text-left
                rounded-2xl p-4
                border transition-all duration-300

                ${
                  active
                    ? "border-lime-300/40 bg-lime-400/10"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                }
              `}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">{method.title}</h3>

                  <p className="text-sm text-gray-400 mt-1">{method.desc}</p>
                </div>

                <div
                  className={`
                    w-5 h-5 rounded-full border-2 mt-1

                    ${
                      active ? "border-lime-300 bg-lime-300" : "border-white/20"
                    }
                  `}
                />
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
