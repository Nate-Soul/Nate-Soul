//import next modules
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

//components, UIs.
import SectionTitle from "@/components/subcomponents/SectionTitle";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { TabsList, Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";

//icons
import { EyeIcon, GithubIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

//data
import { projectData } from "@/utils/data";
import ProjectCard from "@/components/subcomponents/ProjectCard";

async function getData(slug: string) {
 return projectData.filter((projectitem) => projectitem.slug === slug) || notFound;
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const project = await getData(params.slug);
  return {
    title: `${project[0].name}'s Project Case Study`,
    description: project[0].excerpt,
    keywords: project[0].tags.map((tag) => tag.name),
  }
}


const ProjectDetail = async ({ params }: Props) => {

  const projectDataItem = await getData(params.slug);

  const relatedProjects = projectData.filter(
    project => projectDataItem[0].services.some(service => 
      project.services.some(originalService => 
        originalService.name === service.name
      )
    )
  );

  const tabDisplays = [
    {
      id: 1, 
      name: "Case Study"
    }, 
    {
      id: 2, 
      name: "Features"
    }, 
    {
      id: 3, 
      name: "Related Projects"
    }
  ];

  return (
    <section className="py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <div className="container flex flex-col gap-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-y-12">
            <SectionTitle 
              containerStyles="text-center md:text-left" 
              title="Case Study for" 
              extendedTitle={projectDataItem[0].name}
              text={projectDataItem[0].excerpt}
              page={true}
            />
            <div className="flex items-center gap-x-2">
              <span className="font-semibold">
                Services offered:
              </span>
              {
                projectDataItem[0].services.map((service, serviceIndex) => (
                  <Badge 
                    variant="outline" 
                    className="uppercase font-normal dark:text-background"
                    key={serviceIndex}
                  >
                    {service.name}
                  </Badge>
                ))
              }
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* for each project tag */}
              <span className="font-semibold">Tags:</span>
              { projectDataItem[0].tags.map((tag, tagindex) => (
                <Badge 
                  className="capitalize font-normal dark:text-background" 
                  variant="outline"
                  key={tagindex}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Technologies used: </span>
              { projectDataItem[0].technologies.map((tech, techIndex) => (
                <Badge 
                  className="capitalize font-normal dark:text-background" 
                  variant="outline"
                  key={techIndex}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {projectDataItem[0].link && (
              <Link 
                href={projectDataItem[0].link} 
                className="btn btn-primary btn-md w-full sm:w-max gap-x-2" 
                title="Live preview"
              >
                Live Preview <EyeIcon size={20}/>
              </Link>)
              }
              {
                projectDataItem[0].github && (
                  <Link 
                    href={projectDataItem[0].github} 
                    className="btn btn-secondary btn-md gap-x-2 w-full sm:w-max" 
                    title="Visit Github repo"
                  >
                    View Github <GithubIcon size={20}/>
                  </Link>
                )
              }
            </div>
          </div>
          <div className="relative">
            <div 
              className="w-full h-full border-4 flex overflow-x-scroll hide-scrollbar scroll-smooth snap-x snap-mandatory dark:border-primary rounded-3xl overflow-hidden"
            >
            {projectDataItem[0].images.map((image) => (
              <Image
                id={`slide-${image.id}`}
                key={image.id}
                src={image.image_url}
                alt={image.alt} 
                width={1024} 
                height={1024}
                className="w-full h-full object-cover snap-center"
              />
            ))}
            </div>
            {projectDataItem[0].images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-x-2">
              {projectDataItem[0].images.map(image => (
                <Link 
                  href={`#slide-${image.id}`} 
                  key={image.id}
                  className="bg-primary h-3 w-3 rounded-full"
                >
                </Link>
              ))}
            </div>)}
          </div>
        </div>
        {/* tabs */}
        <Tabs defaultValue="Case Study">
          <TabsList className="w-full grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:grid-y-0 mb-8">
            {tabDisplays.map((tabDisplay, tabDisplayIndex) => (
            <TabsTrigger value={tabDisplay.name} key={tabDisplayIndex}>{tabDisplay.name}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="Case Study" className="py-4">
            <div className="flex flex-col gap-y-4" dangerouslySetInnerHTML={{ __html: projectDataItem[0].case_study }}></div>
          </TabsContent>
          <TabsContent value="Features" className="py-4">
            <div className="flex flex-col gap-y-2">
              <div className="rounded-3xl px-5 py-8 shadow-sm shadow-gray-500 dark:shadow-primary mx-auto">
                <h5 className="font-semibold text-xl mb-8 text-center">All Features</h5>
                <ul className="mx-auto flex flex-col gap-y-4">
                  {projectDataItem[0].features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="inline-flex gap-x-2 items-center"
                    >
                      <CheckIcon size={18}/>
                      {feature.feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Related Projects" className="py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.length > 0 && relatedProjects.map((relatedProject, relatedProjectIndex) => (
                <ProjectCard project={relatedProject} key={relatedProjectIndex} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default ProjectDetail
