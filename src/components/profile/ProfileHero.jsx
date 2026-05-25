import { User, Mail, Phone } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/AddToWishlist";

export default function ProfileHero() {
  const currentUser =
    JSON.parse(localStorage.getItem("foodryCurrentUser")) || {};

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-lime-300/10 bg-gradient-to-br from-[#101d16] via-[#0b140f] to-[#08110c] p-6 sm:p-8 lg:p-10">

      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-lime-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

          <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-lime-300 to-yellow-200 flex items-center justify-center">
            <User className="text-black w-11 h-11" />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-lime-300 text-xs font-semibold mb-2">
              Welcome Back
            </p>

            <h1 className="text-3xl sm:text-4xl font-black">
              {currentUser?.name || "Vegora User"}
            </h1>

            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-300" />
                {currentUser?.email}
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-300" />
                +91 98765 43210
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">

          <div className="profileStat">
            <h3>{cartItems.length}</h3>
            <p>CART</p>
          </div>

          <div className="profileStat">
            <h3>{wishlistItems.length}</h3>
            <p>WISHLIST</p>
          </div>

          <div className="profileStat">
            <h3>12</h3>
            <p>ORDERS</p>
          </div>

        </div>
      </div>

      <style>{`
        .profileStat{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          padding:18px;
          border-radius:20px;
          min-width:110px;
          text-align:center;
          backdrop-filter:blur(10px);
        }

        .profileStat h3{
          font-size:28px;
          font-weight:900;
          color:#bef264;
        }

        .profileStat p{
          font-size:11px;
          letter-spacing:2px;
          color:#9ca3af;
          margin-top:5px;
        }
      `}</style>
    </div>
  );
}