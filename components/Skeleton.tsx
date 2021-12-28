import React from "react";

function Skeleton() {
  return (
    <div className="border border-gray-200 mt-2 shadow items-center rounded-md p-4 w-full mx-auto sm:rounded-lg">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
