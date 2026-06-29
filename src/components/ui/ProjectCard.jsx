import { HiOutlineCommandLine  } from "react-icons/hi2";


export default function ProjectCard() {
  return (
    <div className="relative h-52 rounded-lg border border-stone-300 bg-gray-100 shadow-sm">
      {/* Header */}
      <div className="h-[30%] border-b border-stone-300" />

      {/* Icon */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-[#DCEEE8] shadow-sm">
          <HiOutlineCommandLine  className="text-4xl text-teal-700" />
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[70%] flex-col items-center justify-end gap-2 p-4 text-center">
        <h3 className="text-sm font-semibold text-stone-800">
          Portfolio Website
        </h3>

        <p className="text-xs leading-relaxed text-stone-500">
          A responsive portfolio built with React and Tailwind CSS showcasing
          projects, skills and GitHub statistics.
        </p>
      </div>
    </div>
  );
}