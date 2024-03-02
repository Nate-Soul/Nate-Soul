import Link from "next/link";
import { notFound } from "next/navigation";

// import { Button } from "../ui/button";
import ProjectCard from "../subcomponents/ProjectCard";
import SectionTitle from "../subcomponents/SectionTitle";

import { ChevronRightIcon } from "lucide-react";

import { projectsType } from "@/types/types";
// import { projectData } from "@/utils/data";

async function getData(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if(!res.ok){
    throw new Error("something went wrong");
  }

  return res.json();
}

const WorksSection = async () => {

  const res = await getData("https://nate-soul-api.vercel.app/api/projects");
  const projectData: projectsType[] = res.results;

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
          <Link href="/projects" className="btn btn-md btn-primary gap-x-2">
              View All Projects <ChevronRightIcon size={20}/>
          </Link>          
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            projectData.length > 0 && projectData.sort((a,b) => a.priority - b.priority).slice(0,3).map((projectItem, projectItemIndex) => (
              <ProjectCard project={projectItem} key={projectItemIndex} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorksSection
