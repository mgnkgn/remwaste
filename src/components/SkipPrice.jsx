import React from "react";
import { Icon } from "@iconify/react";

const SkipPrice = ({ skip, showInfo, toggleInfo }) => {
  return (
    <div className="mb-5 min-h-35">
      <div className="flex flex-row justify-between items-end max-xl:flex-col max-xl:items-start">
        <p className="text-3xl font-bold text-green-400 mt-2">
          £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
          <span className="text-xl font-light ml-1">/week</span>
        </p>

        <p className="text-xs text-gray-400">VAT: {skip.vat}%</p>
      </div>
      {(skip.transport_cost || skip.per_tonne_cost) && (
        <div
          className="flex flex-row items-center mt-2 hover:border-amber-200 hover:text-amber-400 rounded-2xl"
          onClick={() => toggleInfo(skip.id)}
        >
          <Icon
            icon="ic:baseline-info"
            className="text-amber-400 cursor-pointer"
          />
          <span className="ml-2 text-xs">Additional costs</span>
        </div>
      )}

      {showInfo === skip.id && (
        <div
          className="mt-2 text-sm text-gray-300"
          onClick={() => toggleInfo(skip.id)}
        >
          {skip.transport_cost && (
            <div className="flex flex-row items-center gap-1">
              <Icon icon="mdi:truck" className="text-amber-400 text-xl" />
              <p>
                <strong>Transport:</strong> £{skip.transport_cost.toFixed(2)}
              </p>
            </div>
          )}
          {skip.per_tonne_cost && (
            <div className="flex flex-row items-center gap-1">
              <Icon icon="mdi:weight-kg" className="text-amber-400 text-xl" />
              <p>
                <strong>Per tonne:</strong> £{skip.per_tonne_cost.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkipPrice;
