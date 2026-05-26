import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  // Cart actions from context
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    // Cart item container
    <div className="flex gap-4 bg-white p-4 rounded-xl">
      {/* Product image */}
      <img src={item.image} className="w-24 h-24 object-cover" />

      {/* Product details section */}
      <div className="flex-1">
        {/* Product name */}
        <h2>{item.name}</h2>

        {/* Product price */}
        <p>${item.price}</p>

        {/* Quantity controls */}
        <div className="flex gap-3 mt-3">
          {/* Decrease quantity */}
          <button onClick={() => decreaseQty(item.id)}>
            <FaMinus />
          </button>

          {/* Current quantity */}
          <span>{item.quantity}</span>

          {/* Increase quantity */}
          <button onClick={() => increaseQty(item.id)}>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Price & remove section */}
      <div className="flex flex-col items-end gap-2">
        {/* Total price for item */}${(item.price * item.quantity).toFixed(2)}
        {/* Remove item from cart */}
        <button onClick={() => removeFromCart(item.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
