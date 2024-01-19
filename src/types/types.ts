export type processesType = {
    id: number;
    icon_url: string;
    name: string,
    slug: string;
    desc: string;
    icon: string,
    icon_alt: string;
    priority: number;
    created_at: string;
    modified_at: string;
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
    avatarUrl?: string;
    role: string;
    company: string;
    review: string;
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
    features: string[];
    case_study: string;
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
    extendedTitle: string;
    text?: string;
    page: boolean;
};