import React from "react";
import type { LucideProps } from "lucide-react";

export type processesType = {
    id: number;
    name: string;
    desc: string;
    icon: {
        url: string;
        alt: string;
    };
}[];

export type servicesType = {
    id: number;
    icon: {
        url: string;
        alt: string;
    };
    name: string;
    text: string;
}[];

export type navLinksType = {
    url: string;
    text: string;
}[];

export type testimonialsType = {
    id: number;
    name: string;
    avatarUrl: string;
    role: string;
    company: string;
    content: string;
}[];

export type statsType = {
    id: number;
    name: string;
    amount: number;
    icon: JSX.Element;
}[];

export type projectsType = {
    id: number;
    name: string;
    slug: string;
    excerpt: string;
    link: string;
    github: string;
    category: string;
    tags: string[];
    technologies: string[];
    featured_image: string;
}[];

export type sectionTitleType = {
    containerStyles?: string;
    title: string;
    extendedTitle1: string;
    extendedTitle2?: string;
    text?: string;
};