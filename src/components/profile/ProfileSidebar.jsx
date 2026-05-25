import {
  ShoppingBag,
  Heart,
  Truck,
  MapPin,
  Settings,
  ChevronRight,
} from "lucide-react";

export default function ProfileSidebar({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    {
      id: "orders",
      label: "My Orders",
      icon: ShoppingBag,
    },

    {
      id: "wishlist",
      label: "Wishlist",
      icon: Heart,
    },

    {
      id: "tracking",
      label: "Tracking",
      icon: Truck,
    },

    {
      id: "address",
      label: "Addresses",
      icon: MapPin,
    },

    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="rounded-[28px] border border-lime-300/10 bg-[#0c1510]/95 p-4">

      <div className="space-y-2">

        {tabs.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center justify-between
                px-4 py-3.5 rounded-2xl transition-all duration-300

                ${
                  activeTab === item.id
                    ? "bg-lime-400 text-black"
                    : "bg-white/[0.03] text-white hover:bg-white/5"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>

              <ChevronRight className="w-4 h-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
}