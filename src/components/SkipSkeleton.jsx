import React from "react";

const SkipSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-700 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
      <div className="h-8 bg-gray-600 rounded w-3/4 mb-6"></div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-3">
          <div className="h-6 w-6 bg-gray-600 rounded-full"></div>
          <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="h-6 w-6 bg-gray-600 rounded-full"></div>
          <div className="h-4 bg-gray-600 rounded w-4/5"></div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="h-6 w-6 bg-gray-600 rounded-full"></div>
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
        </div>
      </div>

      <div className="h-6 bg-gray-600 rounded w-1/2 mt-6"></div>

      <div className="flex flex-row items-center gap-2 mt-3">
        <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
        <div className="h-3 bg-gray-600 rounded w-1/3"></div>
      </div>

      <div className="h-12 bg-gray-500 rounded-lg w-full mt-8"></div>
    </div>
  );
};

export default SkipSkeleton;
