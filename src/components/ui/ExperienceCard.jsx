import React from "react";

export default function ExperienceCard({ experience }) {
  return (
    <div className="w-full flex bg-gray-100 shadow-sm border border-stone-300 rounded-xs">
      {/* Start Date */}
      <div className="px-3 py-1 flex items-center">
        { experience.start }
      </div>

      {/* Experienceerience */}
      <div className="grow bg-white px-4 py-3 text-center">
        <h3 className="font-semibold break-words">
          { experience.role }
        </h3>
        <p className="text-sm text-gray-600">{ experience.company }</p>
      </div>

      {/* End Date */}
      <div className="px-3 py-1 flex items-center">
        { experience.end}
      </div>
    </div>
  );
}