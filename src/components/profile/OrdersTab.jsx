export default function OrdersTab() {

  // Recent order data
  const orders = [
    {
      id: "#VG1024",
      item: "Veg Burger Combo",
      price: "₹499",
      status: "Delivered",
    },

    {
      id: "#VG1032",
      item: "Italian Pizza",
      price: "₹799",
      status: "On The Way",
    },
  ];

  return (
    // Orders tab container
    <div>

      {/* Section heading */}
      <h2 className="text-2xl font-black">
        Recent Orders
      </h2>

      {/* Orders list */}
      <div className="space-y-4 mt-6">

        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">

              {/* Order details */}
              <div>
                <h3 className="font-bold text-lg">
                  {order.item}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {order.id}
                </p>
              </div>

              {/* Order price and status */}
              <div className="flex items-center gap-5">

                {/* Order price */}
                <span className="text-lime-300 font-bold">
                  {order.price}
                </span>

                {/* Order status button */}
                <button className="px-5 py-2 rounded-xl bg-lime-400 text-black font-bold">
                  {order.status}
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}