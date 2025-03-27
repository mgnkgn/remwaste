import React from "react";
import IconComponent from "../ui/IconComponent";

const DayHire = ({ skip }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <IconComponent
        icon="material-symbols:timer-outline-rounded"
        className="text-blue-400 text-xl"
      />

      <p className="text-zinc-50 max-md:text-sm max-sm:text-base">
        {skip.hire_period_days} day hire period
      </p>
    </div>
  );
};

export default DayHire;
