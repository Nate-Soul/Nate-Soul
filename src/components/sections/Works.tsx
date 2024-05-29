import Link from "next/link";

//motion
import * as motion from "@/utils/motionDefs";
import { slideIn, staggerContainer } from "@/utils/motion";

//components
import ProjectCard from "../subcomponents/ProjectCard";
import SectionTitle from "../subcomponents/SectionTitle";
import { ChevronRightIcon } from "lucide-react";

//types & data
import { projectsType } from "@/types/types";
// import { projectData } from "@/utils/data";

async function getData(url: string) {
  const res = await fetch(url, { next: { revalidate: 43200 } });

  if(!res.ok){
    throw new Error("something went wrong");
  }

  return res.json();
}

const WorksSection = async () => {

  const res = await getData("https://nate-soul-api.vercel.app/api/projects");
  // const res = await getData("http://localhost:8000/api/projects");
  const projectData: projectsType[] = res.results;

  return (
    <section id="works" className="py-8 md:py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <motion.div 
        className="container-fluid"
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        animate="show"
      >
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
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={slideIn("up", "spring", 0.25, 0.5)}
        >
          {
            projectData.length > 0 && projectData.sort((a,b) => a.priority - b.priority).slice(0,3).map((projectItem, projectItemIndex) => (
              <ProjectCard project={projectItem} key={projectItemIndex} />
            ))
          }
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WorksSection
