"use client";
import { useState } from "react";

// import { Metadata } from "next";
// import { notFound } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SectionTitle from "@/components/subcomponents/SectionTitle";
import ProjectCard from "@/components/subcomponents/ProjectCard";

// import { projectsType } from "@/types/types";
import { projectData } from "@/utils/data";

// type initialDataType = { data: projectsType | null, loading: string, error: null };
// export const metadata: Metadata = {
//   title: 'My Projects | Nathanael Ukpong',
//   description: 'Explore a wide range of my web development projects with various tech stacks',
//   keywords: ["case studies", "projects", "websites", "web development", "branding"],
// };

// export async function getData(url: string) {
//   const res = await fetch(url);

//   if(!res.ok){
//     notFound();
//   }

//   return res.json();
// }
import useFetch from "@/hooks/useFetch";


const Projects = () => {

  // const data = await getData("http://localhost:8000/api/projects");
  // const { data } : { data: initialDataType } = useFetch("http://localhost:8000/api/projects");

  // console.log(data);

  //get all categories from the projectData
  const allCategories = [...projectData.map(item => item.category)];

  // remove duplicate categories
  const uniqueCategories: string[] = Array.from(new Set(allCategories));
  const categories: string[]       = ["all projects", ...uniqueCategories];
  
  const [tabCategories, setTabCategories] = useState(categories);
  const [tabCategory, setTabCategory]     = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return tabCategory === "all projects" ? projectData : project.category === tabCategory;
  });

  return (
    <section className="py-12 pb-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <div className="container">
        <SectionTitle 
          containerStyles="mb-8 text-center" 
          title="My Projects" 
          extendedTitle="Featured Case Studies"
          page={true}
        />
        {
          filteredProjects.length > 0 ? (
          <Tabs defaultValue={tabCategory}>
            <TabsList 
              className={`w-full h-full lg:max-w-[640px] grid md:grid-cols-3 gap-y-4 md:gap-y-0 mb-12 mx-auto`}
            >
            {tabCategories.map((tabItem, tabItemIndex) => (
              <TabsTrigger 
                onClick={() => setTabCategory(tabItem)}
                value={tabItem} 
                key={tabItemIndex} 
                className={`capitalize project-tab-trigger`}
              >
                {tabItem}
              </TabsTrigger>
            ))}
            </TabsList> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.sort((a,b) => a.id - b.id).map((filteredProject, filteredProjectIndex) => (
              <TabsContent value={tabCategory} key={filteredProjectIndex}>
                <ProjectCard project={filteredProject}/>
              </TabsContent>
            ))}
            </div>
          </Tabs> ) : (
            <p> no projects to display for now </p>
        )}
      </div>
    </section>
  )
}

export default Projects
