"use client";
import { useEffect, useState } from "react";

const Countdown = () => {
  const endDate = new Date("2023-09-26T00:00:00").getTime(); // September 26, 2023

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const timeDifference = endDate - currentTime;

    if (timeDifference <= 0) {
      return [
        { unit: "Days", value: 0 },
        { unit: "Hours", value: 0 },
        { unit: "Minutes", value: 0 },
        { unit: "Seconds", value: 0 },
      ];
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return [
      { unit: "Days", value: days },
      { unit: "Hours", value: hours },
      { unit: "Minutes", value: minutes },
      { unit: "Seconds", value: seconds },
    ];
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="circular-countdown flex flex-col md:flex-row justify-center items-center">
      {timeLeft.map((time) => (
        <div
          key={time.unit}
          className="relative md:m-4 bg-transparent backdrop-blur-lg flex w-32 md:w-44 place-content-center p-6 md:py-14"
          style={{
            clipPath:
              "polygon(30% 20%, 50% 0, 70% 20%, 70% 45%, 90% 60%, 95% 85%, 70% 95%, 50% 80%, 30% 95%, 5% 85%, 10% 60%, 30% 45%)",
          }}
        >
          <div className="px-2 h-auto flex flex-col justify-center items-center text bg-[#06b6d4] shadow-[0px_4px_25px_25px_#06b6d4]">
            <p className="text-3xl ">{time.value}</p>
            <p className=" text-xl">{time.unit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
