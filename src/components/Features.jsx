import { useRef } from "react";
import { FaShippingFast } from "react-icons/fa";
import { GoPackageDependencies } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

export default function Features() {

  // Reference for mobile horizontal scroll container
  const scrollRef = useRef(null);

  // Feature data list
  const data = [
    {
      icon: FaShippingFast,
      title: "FAST DELIVERY",
      desc: "Quick and reliable shipping straight to your doorstep."
    },
    {
      icon: GoPackageDependencies,
      title: "SECURE PAYMENT",
      desc: "100% safe and encrypted payment options for peace of mind."
    },
    {
      icon: MdSupportAgent,
      title: "24/7 SUPPORT",
      desc: "We are always here to help you anytime you need assistance."
    },
    {
      icon: FaShieldAlt,
      title: "TRUSTED QUALITY",
      desc: "Premium quality guaranteed with every order you place."
    }
  ];

  return (

    // Features section wrapper
    <section className="relative bg-[#07110a] py-24 text-white overflow-hidden">

      {/* BACKGROUND GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">

          {/* Badge */}
          <div className="inline-block px-5 py-2 border border-lime-400/20 bg-lime-400/10 text-lime-300 text-[11px] tracking-[4px] uppercase">
            Why Choose Us
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            Premium <span className="text-lime-300">Features</span>
          </h2>

        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-4">

          {data.map((item, i) => {

            // Dynamic icon component
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative p-7 text-center bg-gradient-to-b from-[#101d14] to-[#08120b] border border-lime-400/10 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30 overflow-hidden"
              >

                {/* ICON WRAPPER */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#132218] text-lime-300 border border-lime-400/10 transition-all duration-300 group-hover:bg-lime-400/10 group-hover:border-lime-400/30">
                  <Icon className="text-2xl" />
                </div>

                {/* TITLE BADGE */}
                <div className="inline-block px-3 py-1 mb-3 border border-lime-400/10 bg-[#0d1710] text-[11px] tracking-[3px] uppercase rounded-md text-lime-200">
                  {item.title}
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition">
                  {item.desc}
                </p>

                {/* BOTTOM HOVER LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 group-hover:w-full transition-all duration-700" />

              </div>
            );
          })}

        </div>

        {/* ================= MOBILE SWIPE ================= */}
        <div className="lg:hidden">

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
          >

            {data.map((item, i) => {

              // Dynamic icon component
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-[80%] sm:w-[60%] snap-start"
                >

                  {/* Mobile feature card */}
                  <div className="relative p-7 text-center bg-gradient-to-b from-[#101d14] to-[#08120b] border border-lime-400/10 overflow-hidden">

                    {/* ICON */}
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#132218] text-lime-300 border border-lime-400/10">
                      <Icon className="text-2xl" />
                    </div>

                    {/* TITLE */}
                    <div className="inline-block px-3 py-1 mb-3 border border-lime-400/10 bg-[#0d1710] text-[11px] tracking-[3px] uppercase rounded-md text-lime-200">
                      {item.title}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}