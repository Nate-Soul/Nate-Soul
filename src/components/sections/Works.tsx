import Link from "next/link";

import { Button } from "../ui/button";
import ProjectCard from "../subcomponents/ProjectCard";
import { projectData } from "@/utils/data";

const WorksSection = () => {

  return (
    <section id="works" className="py-8 md:py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <div className="container-fluid">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold leading-snug capitalize mb-5">
            <span className="uppercase text-sm text-main-500">
              My Projects
            </span> <br />
            Featured Case Studies
          </h2>
          <Link href="/projects"><Button>View All Projects</Button></Link>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            projectData.length > 0 && projectData.slice(0,3).map((projectItem, projectItemIndex) => (
              <ProjectCard project={projectItem} key={projectItemIndex} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorksSection
