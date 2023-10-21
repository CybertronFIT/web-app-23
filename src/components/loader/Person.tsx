import React from "react";

const Person = () => {
  return (
    <li>
      <div className="flex items-center gap-x-6">
        <div className="animate-pulse h-16 w-16 rounded-full bg-slate-700"></div>
        <div>
          <div className="animate-pulse h-4 px-24 mb-2 rounded-lg bg-slate-700"></div>
          <div className="animate-pulse h-2 w-36 rounded-lg md:font-semibold bg-slate-700"></div>
        </div>
      </div>
    </li>
  );
};

export default Person;