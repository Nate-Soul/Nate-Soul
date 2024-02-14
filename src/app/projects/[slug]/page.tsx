//import next modules
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
// import purify from "dompurify";

//components, UIs.
import SectionTitle from "@/components/subcomponents/SectionTitle";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { TabsList, Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";

//icons
import { EyeIcon, GithubIcon, CheckIcon } from "lucide-react";

//data
// import { projectData } from "@/utils/data";
import ProjectCard from "@/components/subcomponents/ProjectCard";
import { projectsType } from "@/types/types";

async function getData(url: string, slug?: string) {
  let res;

  if (slug) {
    res = await fetch(`${url}/${slug}`);
  } else {
    res = await fetch(url, { cache: "no-store" });
  }

  if(!res.ok){
    return notFound();
  }

  return res.json();
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const project: projectsType = await getData("https://nate-soul-api.vercel.app/api/projects", params.slug);
  return {
    title: `${project.name}'s Project Case Study`,
    description: project.excerpt,
    keywords: project.tags.map((tag) => tag.name),
  }
}


const ProjectDetail = async ({ params }: Props) => {

  const projectDataItem: projectsType = await getData("https://nate-soul-api.vercel.app/api/projects", params.slug);
  const projectRes                    = await getData("https://nate-soul-api.vercel.app/api/projects");
  const projectData: projectsType[]   = projectRes.data;

  const relatedProjects = projectData.filter(
    project => projectDataItem.services.some(service => 
      project.services.some(originalService => 
        originalService.name === service.name
      ) && (project.slug !== projectDataItem.slug)
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
              extendedTitle={projectDataItem.name}
              text={projectDataItem.excerpt}
              page={true}
            />
            <div className="flex items-center gap-x-2">
              <p>
              <span className="font-semibold">
                Services offered:&nbsp;
              </span>
              {
                projectDataItem.services.map((service, serviceIndex) => (
                  <span
                    key={serviceIndex}
                  >
                    {service.name},&nbsp;
                  </span>
                ))
              }
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* for each project tag */}
              <span className="font-semibold">Tags:</span>
              { projectDataItem.tags.map((tag, tagindex) => (
                <Badge 
                  className="capitalize font-normal dark:text-background" 
                  variant="outline"
                  key={tagindex}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold">Technologies used: </span>
              { projectDataItem.technologies.map((tech) => (
                <figure 
                  className="flex items-center gap-x-1"
                  key={tech.id}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={25}
                    height={25}
                    className="aspect-square h-6 w-auto object-contain"
                  />
                  <figcaption>
                    {tech.name}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {projectDataItem.link && (
              <Link 
                href={projectDataItem.link} 
                className="btn btn-primary btn-md w-full sm:w-max gap-x-2" 
                title="Live preview"
              >
                Live Preview <EyeIcon size={20}/>
              </Link>)
              }
              {
                projectDataItem.github && (
                  <Link 
                    href={projectDataItem.github} 
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
            {projectDataItem.images.map((image) => (
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
            {projectDataItem.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-x-2">
              {projectDataItem.images.map(image => (
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
            <div 
              className="flex flex-col gap-y-4" 
              dangerouslySetInnerHTML={{ __html: projectDataItem.case_study }}
            ></div>
          </TabsContent>
          <TabsContent value="Features" className="py-4">
            <div className="flex flex-col gap-y-2">
              <div className="rounded-3xl px-5 py-8 shadow-sm shadow-gray-500 dark:shadow-primary mx-auto">
                <h5 className="font-semibold text-xl mb-8 text-center">All Features</h5>
                <ul className="mx-auto flex flex-col gap-y-4">
                  {projectDataItem.features.map((feature, featureIndex) => (
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
