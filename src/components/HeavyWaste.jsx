import React from "react";
import IconComponent from "../ui/IconComponent";

const HeavyWaste = ({ skip }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      {skip.allows_heavy_waste ? (
        <>
          <IconComponent
            icon="mdi:tick-circle"
            className="text-green-400 text-xl"
          />
          <p className="text-zinc-50 max-md:text-sm max-sm:text-base whitespace-nowrap">
            {skip.allows_heavy_waste} Allows heavy waste
          </p>
        </>
      ) : (
        <>
          <IconComponent
            icon="ic:round-cancel"
            className="text-red-400 text-xl"
          />
          <p className="text-gray-400 max-md:text-sm max-sm:text-base whitespace-nowrap">
            {skip.allows_heavy_waste} Heavy waste not allowed
          </p>
        </>
      )}
    </div>
  );
};

export default HeavyWaste;
