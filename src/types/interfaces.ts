export interface ProjectProps {
    id: number;
    name: string;
    slug: string;
    excerpt: string;
    features: string[];
    case_study: string;
    link?: string;
    github?: string;
    category: string;
    tags: string[];
    technologies: string[];
    featured_image: string;
};
  
export interface ProjectCardProps {
    project: ProjectProps;
}

export interface TestimonialProps {
    id: number;
    name: string;
    avatarUrl?: string;
    role: string;
    company: string;
    review: string;
}

export interface TestimonialCardProps {
    testimonial: TestimonialProps;
}

export interface ServiceProps {
    id: number;
    icon: {
        url: string;
        alt: string;
    };
    name: string;
    text: string;
}

export interface ServiceCardProps {
    service: ServiceProps;
}

export interface ProcessProps {
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
}

export interface ProcessCardProps {
    process: ProcessProps;
}
