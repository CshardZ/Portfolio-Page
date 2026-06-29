import React from "react"
import GridColStyle from "@/components/ui/GridColStyle"
import StatsCard from "@/components/ui/StatsCard"
import ExperienceCard from "@/components/ui/ExperienceCard"
import SkillLabel from "@/components/ui/SkillLabel"
import ProjectCard from "@/components/ui/ProjectCard"

import { projects, skills, stats, experiences } from "@/data/data.js"


export default function Main() {
  return (
    <main
      className="
        grid grid-rows-[auto_1fr_auto]
        "
        >
      {/* Section 1: Stats Cards - Github, Leetcode etc */}
      <section id="stats-cards"
        className="
        grid grid-cols-4 
        border-b-2 border-gray-300 divide-x-2 divide-gray-300
        "
      >
        {
        }
        {
          stats.map((stat, index) => (
            <div className="p-4">
              <StatsCard key={index} stats={stat} />
            </div>
          ))
        }
      </section>

      {/* Section 2: Experience & Skills */}
      <section id="work-skills"
        className="grid grid-cols-[2fr_1fr] px-4 py-6 gap-4"
      >
        <div className="border-2 border-gray-300 p-4 bg-[#F8F8F6]">
          <h2 className="border-b-2 border-gray-300 py-2 mb-2">Experience</h2>
          <div className="flex flex-col items-center">
            {experiences.map((experience, index) => (
              <React.Fragment key={experience.role + experience.company}>
                <ExperienceCard experience={experience} />
                {index !== experiences.length - 1 && (
                  <div className="w-[1px] h-4 bg-gray-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="border-2 border-gray-300 p-4 self-start sticky top-4 bg-[#F8F8F6]">
          <h2 className="w-[300px] border-b-2 border-gray-300 py-2 mb-2">Skills</h2>
          <div className="flex flex-wrap">
            {
              skills.map((skill, index) => {
                return <SkillLabel key={index} skill={skill}/>
              }) 
            }
          </div>
        </div>
      </section>

      {/* Section 3: Featured Projects */}
      <section id="projects-cards" className="grid grid-rows-[auto_1fr] p-4 border-t-1 border-gray-300">
        <h2 className="border-b-1 border-gray-300 py-2 mb-2">Projects</h2>
        <div className="grid grid-cols-3 p-2 gap-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
