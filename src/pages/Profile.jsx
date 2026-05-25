import { useState } from "react";

import ProfileHero from "../components/profile/ProfileHero";
import ProfileSidebar from "../components/profile/ProfileSidebar";

import OrdersTab from "../components/profile/OrdersTab";
import WishlistTab from "../components/profile/WishlistTab";
import TrackingTab from "../components/profile/TrackingTab";
import AddressTab from "../components/profile/AddressTab";
import SettingsTab from "../components/profile/SettingsTab";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen bg-[#07110a] text-white pt-[110px] pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <ProfileHero />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mt-7">

          <ProfileSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="rounded-[30px] border border-lime-300/10 bg-gradient-to-b from-[#0d1711] to-[#09100c] p-5 sm:p-7">

            {activeTab === "orders" && <OrdersTab />}

            {activeTab === "wishlist" && <WishlistTab />}

            {activeTab === "tracking" && <TrackingTab />}

            {activeTab === "address" && <AddressTab />}

            {activeTab === "settings" && <SettingsTab />}

          </div>
        </div>
      </div>
    </div>
  );
}