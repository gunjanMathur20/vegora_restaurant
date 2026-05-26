export default function TrackingTab() {
  return (
    // Tracking tab container
    <div>

      {/* Section heading */}
      <h2 className="text-2xl font-black">
        Order Tracking
      </h2>

      {/* Tracking cards grid */}
      <div className="mt-6 grid md:grid-cols-2 gap-5">

        {/* Live tracking card */}
        <div className="rounded-3xl border border-white/10 p-5 bg-white/[0.03]">

          <h3 className="font-bold text-lg">
            Live Tracking
          </h3>

          <p className="text-gray-400 mt-2">
            Track your current delivery.
          </p>

        </div>

      </div>
    </div>
  );
}
