import React from "react";

const SortAndFilter = ({
  sortOrder,
  handleSortChange,
  allowedOnRoad,
  setAllowedOnRoad,
  allowedHeavyWaste,
  setAllowedHeavyWaste,
  noAdditionalCosts,
  setNoAdditionalCosts,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
      {/* Sorting Options */}
      <select
        className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 ease-in-out hover:bg-gray-600 cursor-pointer"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value="lowToHigh">Lowest Price First</option>
        <option value="highToLow">Highest Price First</option>
        <option value="smallToLarge">Smallest Yard First</option>
        <option value="largeToSmall">Largest Yard First</option>
      </select>

      {/* Filtering Options */}
      <div className="flex flex-wrap gap-4 mt-3 sm:mt-0 max-lg:text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={allowedOnRoad}
            onChange={() => setAllowedOnRoad(!allowedOnRoad)}
            className="w-5 h-5 accent-blue-500 rounded-md border-gray-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          />
          <span
            className={`${allowedOnRoad ? "text-blue-500" : "text-gray-300"}`}
          >
            Allowed on Road
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={allowedHeavyWaste}
            onChange={() => setAllowedHeavyWaste(!allowedHeavyWaste)}
            className="w-5 h-5 accent-blue-500 rounded-md border-gray-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          />
          <span
            className={`${
              allowedHeavyWaste ? "text-blue-500" : "text-gray-300"
            }`}
          >
            Allowed Heavy Waste
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={noAdditionalCosts}
            onChange={() => setNoAdditionalCosts(!noAdditionalCosts)}
            className="w-5 h-5 accent-blue-500 rounded-md border-gray-600 focus:ring-2 focus:ring-blue-400 cursor-pointer"
          />
          <span
            className={`${
              noAdditionalCosts ? "text-blue-500" : "text-gray-300"
            }`}
          >
            No Additional Costs
          </span>
        </label>
      </div>
    </div>
  );
};

export default SortAndFilter;
