import { SiGithub } from "react-icons/si";

export default function StatsCard() {
  return (
    <div className="relative h-52 rounded-lg border border-stone-300 bg-gray-100 shadow-sm">
      {/* Header */}
      <div className="h-[30%] border-b border-stone-300" />

      {/* Icon */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-[#DCEEE8] shadow-sm">
          <SiGithub className="text-4xl text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[70%] flex-col justify-end gap-3 p-3">
        <p className="text-center text-md font-semibold text-stone-800">
          GitHub
        </p>

        <div className="grid grid-cols-3 rounded-md border border-stone-200 bg-gray-50 py-3 text-center shadow-sm">
          {[
            ["233", "followers"],
            ["2", "following"],
            ["75", "repos"],
          ].map(([value, label], i) => (
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
  );
}