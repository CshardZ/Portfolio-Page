import { HiOutlineEye } from "react-icons/hi2";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
    >
      <div className="relative h-42 rounded-lg border border-stone-300 bg-gray-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        {/* Header */}
        <div className="h-[30%] border-b border-stone-300" />

        {/* Icon */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#DCEEE8] shadow-sm">
            <project.icon className="absolute text-4xl text-teal-700 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0" />

            <HiOutlineEye className="absolute text-4xl text-teal-700 opacity-0 scale-75 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[70%] flex-col items-center justify-center gap-2 p-4 text-center">
          <h3 className="text-sm font-semibold text-stone-800">
            {project.title}
          </h3>

          <p className="text-xs leading-relaxed text-stone-500">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}