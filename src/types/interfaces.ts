export interface TestimonialProps {
    id: number;
    avatar_url: string;
    web_id: string;
    name: string;
    role: string;
    company: string;
    review: string;
    avatar: string;
    is_active: boolean;
    created_at: string;
    modified_at: string;
}

export interface TestimonialCardProps {
    testimonial: TestimonialProps;
}

export interface ServiceProps {
    id: number;
    name: string;
    slug: string;
    desc: string;
    icon: string;
    icon_url: string;
    icon_alt: string;
    priority: number;
    is_active: boolean;
    created_at: string;
    modified_at: string;
}

export interface ServiceCardProps {
    service: ServiceProps;
}

export interface ProcessProps {
    id: number;
    icon_url: string;
    name: string;
    slug: string;
    desc: string;
    icon: string;
    icon_alt: string;
    priority: number;
    created_at: string;
    modified_at: string;
}

export interface ProcessCardProps {
    process: ProcessProps;
}



interface TagsProps {
    id: number;
    name: string;
    slug: string
}

interface CategoriesProps {
    id: number;
    name: string;
    slug: string;
    is_active: boolean
}

interface TechnologiesProps {
    id: number;
    name: string;
    slug: string;
    icon: string;
    icon_dark?: string;
}

interface FeaturesProps {
    id: number;
    web_id: string;
    feature: string
}

interface ImagesProps {
    id: number;
    image_url: string;
    web_id: string;
    alt: string;
    image: string;
    is_feature: boolean;
    project: number
}

export interface ProjectProps {
    id: number;
    tags: TagsProps[];
    categories: CategoriesProps[];
    services: ServiceProps[];
    technologies: TechnologiesProps[];
    features: FeaturesProps[];
    images: ImagesProps[];
    name: string;
    slug: string;
    excerpt: string;
    case_study: string;
    link?: string | null;
    github?: string | null;
    type: string;
    status: string;
    priority: number;
    is_active: boolean;
    created_at: string;
    modified_at: string;
}[];
  
export interface ProjectCardProps {
    project: ProjectProps;
}