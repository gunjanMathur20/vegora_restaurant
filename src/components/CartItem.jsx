

import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl">
      <img src={item.image} className="w-24 h-24 object-cover" />

      <div className="flex-1">
        <h2>{item.name}</h2>
        <p>${item.price}</p>

        <div className="flex gap-3 mt-3">
          <button onClick={() => decreaseQty(item.id)}>
            <FaMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        ${(item.price * item.quantity).toFixed(2)}
        <button onClick={() => removeFromCart(item.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
