import React from "react";
import IconComponent from "../ui/IconComponent";

const SelectButton = ({ skip, selectedSkipId, handleSelectSkip }) => {
  return (
    <div className="flex justify-center items-center mt-auto">
      <button
        onClick={() => handleSelectSkip(skip.id)}
        className={`w-full text-white px-6 py-3 rounded-full text-lg whitespace-nowrap max-lg:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 hover:cursor-pointer
        ${
          selectedSkipId === skip.id
            ? "bg-green-500 hover:bg-green-600 active:bg-green-700"
            : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
        }`}
      >
        {selectedSkipId === skip.id ? (
          <div className="flex justify-center items-center text-blue-950">
            <IconComponent icon="charm:circle-tick" className="text-2xl mr-2" />
            <p>Selected</p>
          </div>
        ) : (
          <p>Select This Skip</p>
        )}
      </button>
    </div>
  );
};

export default SelectButton;
