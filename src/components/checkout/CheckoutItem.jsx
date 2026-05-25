export default function CheckoutItem({ item }) {
  return (
    <div className="flex gap-4 items-center rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-[90px] h-[90px] rounded-xl object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold truncate">{item.name}</h3>

        <p className="text-sm text-gray-400 mt-1">Qty: {item.quantity}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-lime-300 font-bold text-lg">₹{item.price}</p>

          <span className="text-sm text-yellow-200 font-medium">
            ₹{item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}
