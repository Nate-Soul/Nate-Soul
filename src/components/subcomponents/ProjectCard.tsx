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
import React from "react";

//interfaces and types
import { ProjectCardProps } from "@/types/interfaces";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative bg-card text-card-foreground dark:bg-card-foreground dark:text-card">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-blue-200 dark:bg-gray-900">
          <Badge className="absolute top-4 left-4 uppercase font-medium text-xs z-10">
            {project.category}
          </Badge>
          <Image
            src={project.featured_image}
            alt={project.name}
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
        <CardTitle className="md:text-xl">{project.name}</CardTitle>
        <CardDescription className="lg:text-lg">
          {project.excerpt}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
