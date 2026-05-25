import { useEffect, useState } from "react";
import { getRemainingTime } from "../hepler";

export default function Countdown({ targetDate, className = "" }) {
  const [time, setTime] = useState(
    getRemainingTime(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (time.isExpired) return null;

  return (
    <div
      className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 ${className}`}
    >
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
          <p className="font-semibold">{value}</p>
          <span className="text-[10px]">{label}</span>
        </div>
      ))}
    </div>
  );
}
