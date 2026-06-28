import React from "react";

export default function ExperienceCard() {
  return (
    <div className="w-full flex bg-gray-300 shadow-sm border border-gray-400 rounded-xs">
      {/* Start Date */}
      <div className="px-3 py-1 flex items-center">
        Jun 2025
      </div>

      {/* Left Timeline */}
      {/* <div className="w-4 h-[2px] bg-gray-400 flex-shrink-0" /> */}

      {/* Experience */}
      <div className="grow bg-gray-100 px-4 py-3 text-center">
        <h3 className="font-semibold break-words">
          Software Developer Intern
        </h3>
        <p className="text-sm text-gray-600">Microsoft</p>
      </div>

      {/* Right Timeline */}
      {/* <div className="w-4 h-[2px] bg-gray-400 flex-shrink-0" /> */}

      {/* End Date */}
      <div className="px-3 py-1 flex items-center">
        Sep 2025
      </div>
    </div>
  );
}