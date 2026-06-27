import GridColStyle from "@/components/ui/GridColStyle"
import StatsCard from "@/components/ui/StatsCard"


export default function Main() {
  return (
    <main
      className="
        grid grid-rows-[auto_1fr_auto]
        border-1 border-gray-600
      "
    >
      {/* Section 1: Stats Cards - Github, Leetcode etc */}
      <section id="stats-cards">
        <div className="
          grid grid-cols-3 
          border-2 border-gray-300 divide-x-2 divide-gray-300
        ">
          <div className="p-4">
            <StatsCard />
          </div>
          <div className="p-4">
            <StatsCard />
          </div>
          <div className="p-4">
            <StatsCard />
          </div>
        </div>
      </section>

      {/* Section 2: Experience & Skills */}
      <section id="work-skills">
        <div className="grid grid-cols-[2fr_1fr] px-4 py-6 gap-4">
          <div className="border-1 border-gray-300 p-4">
            <h2 className="border-b-1 border-gray-300 py-2 mb-2">Experience</h2>
            <div>
              <ul>
                <li>blah</li>
                <li>blah</li>
                <li>blah</li>
                <li>blah</li>
              </ul>
            </div>
          </div>
          <div className="border-1 border-gray-300 p-4">
            <h2 className="w-[300px] border-b-1 border-gray-300 py-2 mb-2">Skills</h2>
            <div>Skill List</div>
          </div>
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
