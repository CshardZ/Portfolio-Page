import React from "react";

export default function ExperienceCard() {
  return (
    <div className="w-full flex bg-gray-100 shadow-sm border border-stone-300 rounded-xs">
      {/* Start Date */}
      <div className="px-3 py-1 flex items-center">
        Jun 2025
      </div>

      {/* Experience */}
      <div className="grow bg-white px-4 py-3 text-center">
        <h3 className="font-semibold break-words">
          Software Developer Intern
        </h3>
        <p className="text-sm text-gray-600">Microsoft</p>
      </div>

      {/* End Date */}
      <div className="px-3 py-1 flex items-center">
        Sep 2025
      </div>
    </div>
  );
}