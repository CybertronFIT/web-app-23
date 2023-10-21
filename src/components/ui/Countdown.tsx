"use client";

import { useCallback, useEffect, useState } from "react";
import moment from 'moment-timezone';

const Countdown = () => {
  const endDate = moment.tz("2024-01-10T00:00:00", "Asia/Kolkata");

  const calculateTimeLeft = useCallback(() => {
    const currentTime = new Date().getTime();
    const timeDifference = endDate.diff(currentTime);

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
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-content-center items-center px-12 md:px-72 2xl:px-96">
      {timeLeft.map((time, index) => (
        <div
          key={index}
          className="mx-auto md:my-4 bg-transparent backdrop-blur-lg flex w-32 md:w-44 place-content-center p-6 py-8 md:py-14"
          style={{
            clipPath:
              "polygon(30% 20%, 50% 0, 70% 20%, 70% 45%, 90% 60%, 95% 85%, 70% 95%, 50% 80%, 30% 95%, 5% 85%, 10% 60%, 30% 45%)",
          }}
        >
          <div className="px-1 h-auto flex flex-col justify-center items-center text-black bg-[#00FFFF] shadow-[0px_4px_10px_15px_#00FFFF] md:shadow-[0px_4px_25px_25px_#00FFFF]">
            <p className="text-2xl md:text-3xl font-semibold md:font-extrabold">{time.value}</p>
            <p className="md:text-xl md:font-bold">{time.unit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
