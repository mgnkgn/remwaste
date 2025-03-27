import React from "react";
import IconComponent from "../ui/IconComponent";

const RoadInfo = ({ skip }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      {skip.allowed_on_road ? (
        <>
          <IconComponent
            icon="icon-park-outline:road"
            className="text-green-400 text-xl"
          />
          <p className="text-zinc-50 max-md:text-sm max-sm:text-base whitespace-nowrap">
            {skip.allowed_on_road} Allowed on road
          </p>
        </>
      ) : (
        <>
          <IconComponent
            icon="ic:round-cancel"
            className="text-red-400 text-xl"
          />
          <p className="text-gray-400 max-md:text-sm max-sm:text-base whitespace-nowrap">
            {skip.allowed_on_road} Not allowed on road
          </p>
        </>
      )}
    </div>
  );
};

export default RoadInfo;
