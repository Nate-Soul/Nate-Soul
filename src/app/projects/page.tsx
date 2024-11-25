"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import CTABanner from "@/components/sections/CTABanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SectionTitle from "@/components/subcomponents/SectionTitle";
import ProjectCard from "@/components/subcomponents/ProjectCard";
import PaginationBar from "@/components/subcomponents/PaginationBar";

// import { projectData } from "@/utils/data";
import { projectsType } from "@/types/types";
import ProjectCardSkeleton from "@/components/subcomponents/ProjectCardSkeleton";

async function getData(url: string) {
  const res = await fetch(url, 
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("An error occured while trying to fetch projects...");
  }

  return res.json();
}


const Projects: React.FC = () => {

  const [projectsNextURL, setProjectsNextURL] = useState<string | null>(null);
  const [projectsPrevURL, setProjectsPrevURL] = useState<string | null>(null);
  const [projectsCount, setProjectsCount] = useState<number>(0);
  const [projectData, setProjectData] = useState<projectsType[] | null>(null);
  const [selectedProjectType, setSelectedProjectType]   = useState<string>("all");
  const [tabTypes, setTabTypes] = useState<string[]>(["all"]);
  const [filteredProjects, setFilteredProjects] = useState<projectsType[]>([]);

  
  const itemsPerPage  = 12;
  const totalPages    = Math.ceil(projectsCount / itemsPerPage);
  const searchParams = useSearchParams();
  const pageParamString = searchParams.get("page");
  const pageParam: number = (
    (pageParamString !== null) && !isNaN(parseInt(pageParamString)) && (totalPages >= parseInt(pageParamString))) ? 
    parseInt(pageParamString) : 
    1;


  useEffect( () => {
    const fetchData = async () => {
      try {
        const accountAPIURL = process.env.NEXT_PUBLIC_ENVIRONMENT?.toLowerCase() === "development" 
        ? `${process.env.NEXT_PUBLIC_DEVELOPMENT_BASEAPIURL}/projects/?page=${pageParam}` 
        : `${process.env.NEXT_PUBLIC_PRODUCTION_BASEAPIURL}/projects/?page=${pageParam}`;

        const getProjects = await getData(accountAPIURL);
        setProjectData(getProjects.results);
        setProjectsCount(getProjects.count);
        setProjectsNextURL(getProjects.next);
        setProjectsPrevURL(getProjects.previous);
      } catch (error) {
        console.log("ERROR FETCHING DATA: ", error);
      }
    };
    
    fetchData();
  }, [pageParam]);

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
      const types = ["all", ...uniqueTypes];
      setTabTypes(types);
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
                className={`w-full h-full lg:max-w-[640px] flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-y-0 mb-12 mx-auto`}
              >
              {tabTypes.map((tabItem, tabItemIndex) => (
                <TabsTrigger 
                  onClick={() => setSelectedProjectType(tabItem)}
                  value={tabItem} 
                  key={tabItemIndex} 
                  className={`capitalize px-8 py-2 project-tab-trigger`}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectCardSkeleton cards={12} />
            </div>
          )}
          {selectedProjectType === "all" && (
            <PaginationBar 
              itemsPerPage={itemsPerPage}
              totalPages={totalPages}
              itemsCount={projectsCount} 
              prevURL={projectsPrevURL}
              nextURL={projectsNextURL}
              currentPageParam={pageParam}
            />
          )
        }
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
