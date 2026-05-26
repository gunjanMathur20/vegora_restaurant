import { useWishlist } from "../../context/AddToWishlist";

export default function WishlistTab() {

  // Access wishlist items from Wishlist Context
  const { wishlistItems } = useWishlist();

  return (
    // Wishlist tab container
    <div>

      {/* Section heading */}
      <h2 className="text-2xl font-black">
        Wishlist Collection
      </h2>

      {/* Wishlist items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">

        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
          >

            {/* Product image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[220px] object-cover"
            />

            {/* Product details */}
            <div className="p-4">

              {/* Product name */}
              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

              {/* Product price */}
              <p className="text-lime-300 font-black text-xl mt-2">
                ₹{item.price}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}