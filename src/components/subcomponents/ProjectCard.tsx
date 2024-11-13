import React from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { EyeIcon, GithubIcon, PlusCircleIcon } from "lucide-react";

//interfaces and types
import { ProjectCardProps } from "@/types/interfaces";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative bg-card text-card-foreground dark:bg-card-foreground dark:text-card">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-accent dark:bg-gray-900">
          <Image
            src={project.images[0].image_url}
            alt={project.images[0].alt}
            width={360}
            height={215}
            className="shadow-lg shadow-gray-400 dark:shadow-black absolute bottom-0"
            priority
          />
          <div className="flex items-center text-primary gap-x-4">
            {project.link && (
              <Link
                href={project.link}
                className="bg-primary inline-flex items-center justify-center w-12 h-12 rounded-full z-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                title="Live preview"
                target="_blank"
              >
                <EyeIcon size={20} className="text-white" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                className="bg-primary inline-flex items-center justify-center w-12 h-12 rounded-full z-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                title="View Code in Github"
              >
                <GithubIcon size={20} className="text-white" />
              </Link>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="bg-primary inline-flex items-center justify-center w-12 h-12 rounded-full z-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              title="Read Case Study"
            >
              <PlusCircleIcon size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-full px-8 py-6 flex flex-col gap-y-2">
        <div className="flex gap-x-2 items-center">
        {project.categories.map(projectCat => (
          <Badge variant="destructive" className="uppercase font-medium text-xs z-10" key={projectCat.id}>
            {projectCat.name}
          </Badge>
        ))}
        </div>
        <CardTitle className="md:text-xl">{project.name}</CardTitle>
        <CardDescription className="lg:text-lg">
          {project.excerpt}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
