import { HiOutlineEye } from "react-icons/hi2";

export default function StatsCard({ stats }) {
  return (
    <a
      href={stats.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative h-52 rounded-lg border border-stone-300 bg-gray-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-">
        {/* Header */}
        <div className="h-[30%] border-b border-stone-300" />

        {/* Icon */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-[#DCEEE8] shadow-sm">
            <stats.icon className="absolute text-4xl text-black transition-all duration-300 group-hover:scale-75 group-hover:opacity-0" />

            <HiOutlineEye className="absolute text-4xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[70%] flex-col justify-end gap-3 p-3">
          <p className="text-center text-md font-semibold text-stone-800">
            {stats.title}
          </p>

          <div className="grid grid-cols-3 rounded-md border border-stone-200 bg-gray-50 py-3 text-center shadow-sm">
            {stats.details.map(([value, label], i) => (
              <div
                key={label}
                className={i === 1 ? "border-x border-stone-200" : ""}
              >
                <p className="text-xs font-semibold">{value}</p>
                <p className="text-[10px] text-stone-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}