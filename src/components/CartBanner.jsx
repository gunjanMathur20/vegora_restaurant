import { Link } from "react-router-dom";

export default function CartBanner() {
  return (
    <div className="relative w-full bg-[#faf7f2] overflow-hidden mt-[89px]">
      {/* LEFT IMAGE */}
      <img
        src="/images/cartburger.png"
        alt="Burger"
        className=" absolute left-0 top-0 lg:top-[55%] -translate-y-1/2 hidden md:block w-[420px] h-[420px]
          lg:w-[550px] lg:h-[480px] xl:w-[600px] xl:h-[540px]
        "
      />

      {/* RIGHT IMAGE */}
      <img
        src="/images/cartpizza.png"
        alt="Pizza"
        className=" absolute right-0 top-0 lg:top-[55%] -translate-y-1/2 object-cover hidden md:block w-[420px] h-[420px]
         lg:w-[550px] lg:h-[480px] xl:w-[600px] xl:h-[540px]
        "
      />

      {/* CENTER CONTENT */}
      <div
        className="
          relative z-10 flex flex-col items-center justify-center text-center
          py-20 md:py-24 lg:py-36 xl:py-40
          px-4
        "
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Cart
        </h1>

        <p className="mt-4 text-sm  md:text-base lg:text-xl text-gray-600">
          <span className="hover:text-red-500 cursor-pointer transition">
            <Link to="/"> Home</Link>
          </span>
          <span className="mx-2">›</span>
          <span className="font-medium text-gray-900">Your Shopping Cart</span>
        </p>
      </div>
    </div>
  );
}
