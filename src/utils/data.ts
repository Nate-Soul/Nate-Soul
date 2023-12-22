import { processesType, projectsType, servicesType, testimonialsType } from "@/types/types";

export const projectData: projectsType = [
  {
    id: 1,
    name: "Boot5",
    slug: "boot-5",
    excerpt: "Minimal & clean design for project one and two excluding three",
    link: "https://boot5.netlify.app",
    github: "https://github.com/boot-5-project",
    category: "web",
    tags: ["learning management system", "landing page"],
    technologies: ["bootstrap5", "css3"],
    featured_image: "/assets/images/portfolio/boot5.jpg"
  },
  {
    id: 2,
    name: "Sphenyx Digitals",
    slug: "sphenyx-digitals",
    excerpt: "Minimal & clean design for project one and two excluding three",
    link: "https://sphenyx.netlify.app",
    github: "",
    category: "web",
    tags: ["corporate website", "landing page", "digital agency", "one page website"],
    technologies: ["bootstrap5", "css3", "html5", "jQuery", "JavaScript"],
    featured_image: "/assets/images/portfolio/sphenyx.png"
  },
  {
    id: 8,
    name: "Capital Stallion",
    slug: "capital-stallion",
    excerpt: "Minimal & clean design for project one and two excluding three",
    link: "http://capitalorthoindia.com",
    github: "",
    category: "web",
    tags: ["catalogless e-commerce website", "brochure", "Tour booking",],
    technologies: ["Tailwind CSS", "CSS3", "HTML5", "jQuery", "JavaScript", "PHP", "Wordpress", "WooCommerce"],
    featured_image: "/assets/images/portfolio/capital-stallion.jpg"
  },
  {
    id: 4,
    name: "Sphene Reserves",
    slug: "sphene-reserves",
    excerpt: "Minimal & clean design for project one and two excluding three",
    link: "https://sphenereserves.netlify.app",
    github: "https://github.com/Nate-Soul/sphene-reserves.git",
    category: "web",
    tags: ["traveling and booking website", "Tour booking",],
    technologies: ["Tailwind CSS", "CSS3", "HTML5", "JavaScript", "React.js"],
    featured_image: "/assets/images/portfolio/sphene-reserves.jpg"
  },
  {
    id: 5,
    name: "Sphene Qwizines",
    slug: "sphene-qwizines",
    excerpt: "Minimal & clean design for project one and two excluding three",
    link: "https://sphene-qwizines.vercel.app",
    github: "https://github.com/Nate-Soul/sphene-qwizines-fe.git",
    category: "web",
    tags: ["online food website", "Table Reservation", "Food ordering"],
    technologies: ["Tailwind CSS", "CSS3", "HTML5", "JavaScript", "React.js", "Next.js"],
    featured_image: "/assets/images/portfolio/sphene-qwizines.jpg"
  },
  {
    id: 6,
    name: "BlazeSKills Learning",
    slug: "blazeskills-learning",
    excerpt: "Minimal & clean design for project one and two excluding three",
    link: "https://trainings.blazeskills.com",
    github: "",
    category: "web",
    tags: ["LMS", "learning management portal", "online learning"],
    technologies: ["CSS3", "HTML5", "JavaScript", "PHP"],
    featured_image: "/assets/images/portfolio/blazeskills-learning.jpg"
  },
  {
    id: 7,
    name: "Quetas Couture",
    slug: "quetas-couture",
    excerpt: "Brand identity design for fashion design house",
    link: "https://drive.google.com/project/quetas-couture",
    github: "",
    category: "brand",
    tags: ["Fashion house", "Couture", "Fashion deign", "Logo", "branding"],
    technologies: ["Corel Draw", "PhotoShop"],
    featured_image: "/assets/images/portfolio/quetas-couture-logo-design.jpg"
  },
  {
    id: 3,
    name: "Optimum Seab",
    slug: "optimum-seab",
    excerpt: "Brand identity design for petroleum marketing company",
    link: "https://drive.google.com/project/optimum-seab",
    github: "",
    category: "brand",
    tags: ["Fashion house", "Couture", "Fashion deign", "Logo", "branding"],
    technologies: ["Corel Draw", "PhotoShop"],
    featured_image: "/assets/images/portfolio/optimum-seab-logo-design.jpg"
  },
];

export const serviceData: servicesType = [
  {
    id: 1,
    icon: {
      url: "/assets/images/icons/web design.png",
      alt: "responsive web design + frontend development illustration",
    },
    name: "Frontend Development",
    text: "Crafting captivating digital experiences is not just a skill—it's an art. Elevate your online presence with seamless frontend web development and UX design. From intuitive interfaces to visually stunning & responsive layouts, I specialize in bringing your brand to life in the digital realm.",
  },
  {
    id: 2,
    icon: {
      url: "/assets/images/icons/code.svg",
      alt: "code icon / symbol",
    },
    name: "Backend Development",
    text: "The backbone of every robust digital solution lies in its backend. Trust me to architect and develop the foundation that powers your applications. From database management to server-side scripting, I ensure a reliable and scalable backend for your digital ventures.",
  },
  {
    id: 3,
    icon: {
      url: "/assets/images/icons/seo-content-marketing.png",
      alt: "content marketing + SEO + sales funnel illustration",
    },
    name: "On-Page Search Engine Optimization",
    text: "Unlock the full potential of your digital presence with strategic on-page SEO. I optimize every aspect of your content to ensure visibility and ranking on search engines. Let's make your website the go-to destination for your target audience.",
  },
  {
    id: 4,
    icon: {
      url: "/assets/images/icons/ui.svg",
      alt: "Speed + Accessibility optimization illustration",
    },
    name: "Accessibility & Speed Optimization",
    text: "In the digital landscape, speed and accessibility matter. I specialize in optimizing your website or application for lightning-fast performance and seamless accessibility. Reach a broader audience and enhance user satisfaction with a site that performs at its peak.",
  },
  {
    id: 5,
    icon: {
      url: "/assets/images/icons/paint-palette.svg",
      alt: "creative logo design representation",
    },
    name: "Branding + Logo Design",
    text: "Your brand is more than just a logo; it's an identity. Let's craft a brand that tells your story and resonates with your audience. From logo design to overall branding strategy, I bring a creative touch to turn your passion into a brand that stands out.",
  },
  {
    id: 6,
    icon: {
      url: "/assets/images/icons/app-development.png",
      alt: "app development icon",
    },
    name: "App Development",
    text: "Transform your innovative ideas into powerful, user-friendly applications. With expertise in app development and a keen eye for user experience design, I bring your vision to fruition. Let's create applications that resonate with your audience and make a lasting impact.",
  },
];

export const processData: processesType = [
    {
      id: 1,
      name: "Discovery Session",
      desc: "We dive deep into your ideas, goals and vision. Through open dialogue, I gain a comprehensive understanding of your project, ensuring every nuance is captured. Together we set the foundation for a digital solution that aligns seamlessly with your objectives.",
      icon: {
        url: "/assets/images/icons/discovery.png",
        alt: "Discovery session illustration"
      },
    },
    {
      id: 2,
      name: "Collaborative Ideation",
      desc: "Through collaborative ideation sessions, we refine concepts, sketch wireframes, and outline the user experience. This stage is where ideas come to life, taking shape in a way that not only meets but exceeds your expectations. Your input is invaluable as we sculpt a digital masterpiece tailored to your unique needs",
      icon: {
        url: "/assets/images/icons/ideation.png",
        alt: "2 poeple ideating together illustration"
      },
    },
    {
      id: 3,
      name: "Development Sprint",
      desc: "With a solid plan in place, it's time to bring the vision to fruition. I enter the development sprint, crafting the frontend and backend, and user interfaces with precision. Regular updates and feedback keep you in the loop, ensuring that the evolving product aligns with your expectations",
      icon: {
        url: "/assets/images/icons/development.png",
        alt: "Web developer working alone"
      },
    },
    {
      id: 4,
      name: "Refinement & Launch",
      desc: "Before we unveil yout project to the world, we fine-tune evry detail, addressing user feedback, and optimizing for performance, we ensure that the end product is not just good but exceptional. With your approval, we launch your digital creation, ready to make an impact and elevate your online business",
      icon: {
        url: "/assets/images/icons/idea-launch.png",
        alt: "Refinement & launch"
      },
    },
];

export  const testimonialData: testimonialsType = [
    {
      id: 1,
      name: "John Doe",
      avatarUrl: "/assets/images/testimonees/avatar.jpg",
      role: "CEO",
      company: "Frivolous Ventures",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum."
    },
    {
      id: 2,
      name: "Jane Doe",
      avatarUrl: "/assets/images/testimonees/avatar.jpg",
      role: "CEO",
      company: "Frivolous Inc",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum."
    },
    {
      id: 3,
      name: "George Doe",
      avatarUrl: "/assets/images/testimonees/avatar.jpg",
      role: "Deisgner",
      company: "Capital Stallion HQ",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum."
    },
];