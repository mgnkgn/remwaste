import React from "react";

const NextStep = ({ selectedSkip, handleSelectSkip }) => {
  return (
    <>
      {selectedSkip && (
        <div className="sticky bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center border-2 rounded-2xl border-blue-700">
          <div className="flex gap-3 text-white">
            <p className="text-3xl font-bold text-green-400">
              £
              {(
                selectedSkip.price_before_vat *
                (1 + selectedSkip.vat / 100)
              ).toFixed(2)}
              <span className="text-xl font-light ml-1">/week</span>
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <button
              className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 hover:cursor-pointer focus:outline-none transition-all duration-300 ease-in-out"
              onClick={() => {
                handleSelectSkip("");
              }}
            >
              Cancel
            </button>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 hover:cursor-pointer focus:outline-none transition-all duration-300 ease-in-out">
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NextStep;
