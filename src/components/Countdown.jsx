import { useEffect, useState } from "react";
import { getRemainingTime } from "../hepler";

export default function Countdown({ targetDate, className = "" }) {
  // State to store remaining time values
  const [time, setTime] = useState(getRemainingTime(targetDate));

  // Update countdown every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime(targetDate));
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  // Hide component if countdown is expired
  if (time.isExpired) return null;

  return (
    // Countdown container
    <div
      className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 ${className}`}
    >
      {/* Render time blocks */}
      {[
        ["Days", time.days],
        ["Hours", time.hours],
        ["Mins", time.mins],
        ["Sec", time.secs],
      ].map(([label, value]) => (
        <div
          key={label}
          className="bg-white px-3 py-2 text-center shadow text-xs"
        >
          {/* Numeric value */}
          <p className="font-semibold">{value}</p>

          {/* Label */}
          <span className="text-[10px]">{label}</span>
        </div>
      ))}
    </div>
  );
}
