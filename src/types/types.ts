export type sectionTitleType = {
    containerStyles?: string;
    title: string;
    extendedTitle: string;
    text?: string;
    page: boolean;
};

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
    id: number,
    icon_url: string,
    name: string,
    slug: string,
    desc: string,
    icon: string,
    icon_alt: string,
    priority: number,
    is_active: boolean,
    created_at: string,
    modified_at: string
}[];

export type navLinksType = {
    url: string;
    text: string;
}[];

export type testimonialsType = {
    id: number,
    avatar_url: string,
    web_id: string,
    name: string,
    role: string,
    company: string,
    review: string,
    avatar: string,
    is_active: boolean,
    created_at: string,
    modified_at: string
}[];

export type statsType = {
    id: number;
    name: string;
    amount: number;
    icon: JSX.Element;
}[];

type tagsType = {
    id: number,
    name: string,
    slug: string
}

type projectServiceType = {
    id: number;
    name: string;
    slug: string;
    is_active: boolean
}

type technologiesType = {
    id: number,
    name: string,
    slug: string
}

type featuresType = {
    id: number,
    web_id: string,
    feature: string
}

type imagesType = {
    id: number,
    image_url: string,
    web_id: string,
    alt: string,
    image: string,
    is_feature: boolean,
    project: number
}

export type projectsType = {
    id: number,
    tags: tagsType[],
    services: projectServiceType[],
    technologies: technologiesType[],
    features: featuresType[],
    images: imagesType[],
    name: string,
    slug: string,
    excerpt: string,
    case_study: string,
    link?: string | null,
    github?: string | null,
    is_active: boolean,
    created_at: string,
    modified_at: string
}[];