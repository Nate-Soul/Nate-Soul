import Link from "next/link";

import { Button } from "../ui/button";
import ProjectCard from "../subcomponents/ProjectCard";
import SectionTitle from "../subcomponents/SectionTitle";

import { ChevronRightIcon } from "lucide-react";

import { projectData } from "@/utils/data";

const WorksSection = () => {

  return (
    <section id="works" className="py-8 md:py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <div className="container-fluid">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-10">
          <SectionTitle
            containerStyles="mb-4 sm:mb-0 text-center text-center sm:text-left"
            title="My Projects"
            extendedTitle="Featured Case Studies"
            page={false}
          />
          <Link href="/projects">
            <Button className="gap-x-2">View All Projects <ChevronRightIcon size={20}/> </Button>
          </Link>          
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            projectData.length > 0 && projectData.slice(0,3).map((projectItem, projectItemIndex) => (
              <ProjectCard project={projectItem} key={projectItemIndex} />
            ))
          }
        </div>
        <div className="flex justify-end items-center mt-8">
        </div>
      </div>
    </section>
  )
}

export default WorksSection
