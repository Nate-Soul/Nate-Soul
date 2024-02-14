"use client";
import { useState, useEffect } from "react";

import CTABanner from "@/components/sections/CTABanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SectionTitle from "@/components/subcomponents/SectionTitle";
import ProjectCard from "@/components/subcomponents/ProjectCard";

// import { projectData } from "@/utils/data";
import { projectsType } from "@/types/types";

async function getData(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("An error occured while trying to fetch projects...");
  }

  return res.json();
}


const Projects: React.FC = () => {

  const [projectData, setProjectData] = useState<projectsType[] | null>(null);
  const [selectedProjectType, setSelectedProjectType]   = useState<string>("all");
  const [tabTypes, setTabTypes] = useState<string[]>(["all"]);
  const [filteredProjects, setFilteredProjects] = useState<projectsType[]>([]);


  useEffect( () => {
    const fetchData = async () => {
      try {
        const getProjects = await getData("https://nate-soul-api.vercel.app/api/projects/");
        setProjectData(getProjects.data);
      } catch (error) {
        console.log("ERROR FETCHING DATA: ", error)
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {

    const filterProjects = () => {
      if (selectedProjectType === "all") {
        setFilteredProjects(projectData || []);
      } else {
        const filtered = (projectData || []).filter((project) => project.type === selectedProjectType);
        setFilteredProjects(filtered);
      }
    };

    filterProjects();
  }, [selectedProjectType, projectData]);
  
  useEffect(() => {
    const updateTabTypes = () => {
      const allTypes    = (projectData || []).map(item => item.type);
      const uniqueTypes = Array.from(new Set(allTypes));
    
      // remove duplicate categories
      setTabTypes(["all", ...uniqueTypes]);
    };

    updateTabTypes();
  }, [projectData]);

  return (
    <>
    <section className="py-12 pb-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <div className="container">
        <SectionTitle 
          containerStyles="mb-8 text-center" 
          title="My Projects" 
          extendedTitle="Featured Case Studies"
          page={true}
        />
        {
          (projectData || []).length > 0 ? (
          <Tabs defaultValue={selectedProjectType}>
            <TabsList 
              className={`w-full h-full lg:max-w-[640px] grid md:grid-cols-${tabTypes.length} gap-y-4 md:gap-y-0 mb-12 mx-auto`}
            >
            {tabTypes.map((tabItem, tabItemIndex) => (
              <TabsTrigger 
                onClick={() => setSelectedProjectType(tabItem)}
                value={tabItem} 
                key={tabItemIndex} 
                className={`capitalize project-tab-trigger`}
              >
                {tabItem}
              </TabsTrigger>
            ))}
            </TabsList> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.sort((a,b) => a.priority - b.priority).map((filteredProject, filteredProjectIndex) => (
              <TabsContent value={selectedProjectType} key={filteredProjectIndex}>
                <ProjectCard project={filteredProject}/>
              </TabsContent>
            ))}
            </div>
          </Tabs> ) : (
          <p> Loading projects... </p>
        )}
      </div>
    </section>
    <CTABanner 
      heading="Inspired by what you see?" 
      subtext="Let's turn your inspiration into reality. Your Vision, my expertise, and a tailored approach that sets your project apart. Ready to make it happen?" 
      cta="Get a Free Quote" 
    />
    </>
  )
}

export default Projects
