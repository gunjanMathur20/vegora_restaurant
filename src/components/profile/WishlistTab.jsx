import { useWishlist } from "../../context/AddToWishlist";

export default function WishlistTab() {
  const { wishlistItems } = useWishlist();

  return (
    <div>
      <h2 className="text-2xl font-black">
        Wishlist Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">

        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

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