// ======================================================
// CHECKOUT ITEM COMPONENT
// ======================================================

export default function CheckoutItem({ item }) {
  return (
    // ======================================================
    // MAIN CONTAINER
    // ======================================================

    <div
      className="
        flex
        gap-4
        items-center
        rounded-2xl
        border
        border-white/10
        bg-black/20

        p-3
        sm:p-4
      "
    >
      {/* ======================================================
          PRODUCT IMAGE
      ====================================================== */}

      <img
        src={item.image}
        alt={item.name}
        className="
          w-[90px]
          h-[90px]
          rounded-xl
          object-cover
        "
      />

      {/* ======================================================
          PRODUCT DETAILS
      ====================================================== */}

      <div className="flex-1 min-w-0">
        {/* PRODUCT NAME */}

        <h3
          className="
            text-white
            font-semibold
            truncate
          "
        >
          {item.name}
        </h3>

        {/* PRODUCT QUANTITY */}

        <p
          className="
            text-sm
            text-gray-400
            mt-1
          "
        >
          Qty: {item.quantity}
        </p>

        {/* ======================================================
            PRICE SECTION
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            mt-3
          "
        >
          {/* SINGLE ITEM PRICE */}

          <p
            className="
              text-lime-300
              font-bold
              text-lg
            "
          >
            ₹{item.price}
          </p>

          {/* TOTAL PRICE */}

          <span
            className="
              text-sm
              text-yellow-200
              font-medium
            "
          >
            ₹{item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}
