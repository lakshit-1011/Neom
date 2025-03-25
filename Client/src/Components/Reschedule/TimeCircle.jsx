import { useState, useEffect } from "react";

export default function TimeCircle() {
  const initialMinutes = 52;
  const initialSeconds = 59;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            setMinutes(initialMinutes);
            return initialSeconds;
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return initialSeconds;
          }
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  const timeData = [
    { label: "Days", value: 0, borderColor: "border-yellow-200" },
    { label: "Hours", value: 0, borderColor: "border-blue-400" },
    { label: "Minutes", value: minutes, borderColor: "border-orange-300" },
    { label: "Seconds", value: seconds, borderColor: "border-red-500" },
  ];

  return (
    <div className="absolute w-[400px] mx-auto top-[220px] flex justify-evenly items-center">
      {timeData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center rounded-[100px] w-[80px] h-[80px] border ${item.borderColor}`}
        >
          <p className="text-sm text-[#ffffff] tracking-wide opacity-80 font-normal">
            {item.label}
          </p>
          <p className="text-[22px] tracking-wider text-[#ffffff] font-semibold">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
