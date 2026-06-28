import GridColStyle from "@/components/ui/GridColStyle"
import StatsCard from "@/components/ui/StatsCard"
import ExperienceCard from "./ui/ExperienceCard"



export default function Main() {
  return (
    <main
      className="
        grid grid-rows-[auto_1fr_auto]
        border-2 border-gray-300
      "
    >
      {/* Section 1: Stats Cards - Github, Leetcode etc */}
      <section id="stats-cards"
        className="
          grid grid-cols-3 
          border-2 border-gray-300 divide-x-2 divide-gray-300
        "
      >
        <div className="p-4">
          <StatsCard />
        </div>
        <div className="p-4">
          <StatsCard />
        </div>
        <div className="p-4">
          <StatsCard />
        </div>
      </section>

      {/* Section 2: Experience & Skills */}
      <section id="work-skills"
        className="grid grid-cols-[2fr_1fr] px-4 py-6 gap-4"
      >
        <div className="border-2 border-gray-300 p-4">
          <h2 className="border-b-2 border-gray-300 py-2 mb-2">Experience</h2>
          <div className="flex flex-col items-center">
            <ExperienceCard />
            <div className="w-[1px] h-4 bg-gray-400" />
            <ExperienceCard />
            <div className="w-[1px] h-4 bg-gray-400" />
            <ExperienceCard />
            <div className="w-[1px] h-4 bg-gray-400" />
            <ExperienceCard />
            <div className="w-[1px] h-4 bg-gray-400" />
            <ExperienceCard />
            <div className="w-[1px] h-4 bg-gray-400" />
            <ExperienceCard />
            <div className="w-[1px] h-4 bg-gray-400" />
          </div>
        </div>
        <div className="border-2 border-gray-300 p-4 self-start sticky top-32">
          <h2 className="w-[300px] border-b-2 border-gray-300 py-2 mb-2">Skills</h2>
          <div>Skill List</div>
        </div>
      </section>

      {/* Section 3: Featured Projects */}
      <section id="projects-cards" className="grid grid-rows-[auto_1fr] p-4 border-t-1 border-gray-300">
        <h2 className="border-b-1 border-gray-300 py-2 mb-2">Projects</h2>
        <div className="
          grid grid-cols-3 p-2 gap-2
        ">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </section>
    </main>
  )
}
