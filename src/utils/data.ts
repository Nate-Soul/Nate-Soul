import { processesType, projectsType, servicesType, testimonialsType } from "@/types/types";

export const projectData: projectsType = [
  {
    id: 1,
    name: "Boot5",
    slug: "boot-5",
    excerpt: "Modern Landing Page UI for a learning management system",
    features: [
      "Efficient information architecture",
      "Intuitive user interface using Bootstrap 5",
      "CSS for enhanced styling and responsiveness",
      "JavaScript-powered contact form",
      "Error handling in form submissions",
      "Email functionality for seamless communication",
      "Customized accordion, modals, navigation bar, etc."
    ],
    case_study: "<p>Boot5, a modern landing page for a learning management system, was a hobby project with a focus on efficient information architecture and an intuitive user interface. Bootstrap 5 and CSS were leveraged to create a sleek and responsive design.</p> <p>The integration of JavaScript powered the contact form, providing error handling for form submissions and seamless email functionality. The result is a modern and user-friendly landing page that not only showcases the capabilities of Bootstrap 5 but also ensures a smooth and interactive experience for visitors.</p>",  
    link: "https://boot-5.netlify.app",
    github: "https://github.com/Nate-Soul/boot5",
    category: "web",
    tags: ["learning management system", "landing page", "Bootstrap 5", "CSS", "JavaScript", "user interface", "contact form"],
    technologies: ["HTML5", "CSS3", "Boostrap5", "JavaScript"],
    featured_image: "/assets/images/portfolio/boot5.jpg"
  },
  {
    id: 2,
    name: "Sphenyx Digitals",
    slug: "sphenyx-digitals",
    excerpt: "Professional one page website for digital agency",
    features: [
      "Responsive one-page design",
      "Intuitive UI/UX for seamless navigation",
      "Dynamic portfolio showcasing with featured case studies",
      "Transparent pricing presentation for each service",
      "Secure payment/ordering system integration",
      "Compelling storytelling section",
      "Team showcase for a personal touch",
      "Client success stories for social proof",
      "Efficient contact form for client inquiries"
    ],
    case_study: "<p>Sphenyx Digitals sought a digital hub that would not only reflect their diverse services but also align with their business goals. Our solution was a sleek, one-page website offering a seamless user experience.</p><p>The dynamic portfolio section beautifully showcases their work through featured case studies, providing potential clients with a comprehensive view of their capabilities. Transparent pricing for each service ensures clarity, and our integrated secure payment system streamlines the client's journey from exploration to transaction.</p><p> The storytelling section humanizes the brand, offering insights into Sphenyx Digitals' journey and values. The team showcase and client success stories provide social proof, building trust with visitors. The efficient contact form serves as a direct channel for client inquiries, facilitating seamless communication. The result is a digital presence that not only attracts potential clients but also nurtures existing relationships.</p>",
    link: "https://sphenyx.netlify.app",
    github: "",
    category: "web",
    tags:  ["web design", "web development", "UI/UX", "digital marketing", "brand identity", "cybersecurity", "photography", "videography", "landing page", "One page website"],
    technologies: ["Bootstrap5", "CSS3", "HTML5", "jQuery", "JavaScript"],
    featured_image: "/assets/images/portfolio/sphenyx.png"
  },
  {
    id: 8,
    name: "Capital Stallion",
    slug: "capital-stallion",
    excerpt: "Redesign For A Cataglossless WordPress Solution",
    features: [
      "Custom WordPress theme design",
      "Catalog showcasing hospital equipment",
      "About us and company history section",
      "Certifications and client reviews display",
      "Quotation request form for machineries",
      "Booking form for manufacturing plant tours",
      "Customer service inquiry form"
    ],
    case_study: "<p>Capital Stallion, previously operating under <a href='https://www.oriensmedical.com' target='_blank' style='color:dodgerblue;'>Oriens Medical</a>, sought a website overhaul for their hospital equipment manufacturing and distribution business.</p><p> The challenge was to maintain and extend existing functionalities while improving design and usability. Our solution involved crafting a cataglossless custom WordPress theme. The catalog section elegantly showcases their diverse range of hospital equipment. The 'About Us' and company history sections provide insights into their background. Certifications and client reviews instill trust and credibility. </p><p> Specific forms, including a quotation request form, a tour booking form for manufacturing plants, and a customer service inquiry form, enhance user engagement and streamline communication. The result is a well-designed, user-friendly website that not only preserves but also elevates the functionality of Capital Stallion's online presence.</p>",
    link: "http://capitalorthoindia.com",
    github: "",
    category: "web",
    tags: ["website redesign", "WordPress", "catalog", "hospital equipment", "user-friendly", "custom theme", "customer service"],
    technologies: ["Tailwind CSS", "CSS3", "HTML5", "jQuery", "JavaScript", "PHP", "Wordpress", "WooCommerce"],
    featured_image: "/assets/images/portfolio/capital-stallion.jpg"
  },
  {
    id: 4,
    name: "Sphene Reserves",
    slug: "sphene-reserves",
    excerpt: "Seamless Online Booking for pre-trip accomodations",
    features: [
      "User-friendly online booking platform",
      "Extensive lodging options (hotels, resorts, vacation rentals)",
      "Budget and preference customization",
      "Secure and efficient payment system",
      "Real-time availability updates",
      "Intuitive user profiles for personalized experiences",
      "Instant booking confirmations",
      "Detailed booking history tracking",
      "Responsive customer support"
    ],
    case_study: "<p>Sphene Reserves aimed to revolutionize travel planning by providing a hassle-free platform for clients to secure lodging in advance. Our solution delivered a user-friendly online booking system with an extensive array of lodging options, allowing travelers to align their accommodation with budget and preferences seamlessly.</p><p>The integration of a secure payment system ensures a smooth transaction process. Real-time availability updates and instant booking confirmations enhance the user experience.</p><p> User profiles offer a personalized touch, allowing clients to track detailed booking history and tailor future experiences. Responsive customer support further ensures a reliable and enjoyable pre-trip experience, solidifying Sphene Reserves as the go-to choice for convenient lodging bookings.</p>",
    link: "https://sphenereserves.netlify.app",
    github: "https://github.com/Nate-Soul/sphene-reserves",
    category: "web",
    tags: ["online booking", "travel agency", "lodging", "user-friendly", "budget customization", "secure payment", "customer support"],
    technologies: ["Tailwind CSS", "CSS3", "HTML5", "JavaScript", "React.js"],
    featured_image: "/assets/images/portfolio/sphene-reserves.jpg"
  },
  {
    id: 5,
    name: "Sphene Qwizines",
    slug: "sphene-qwizines",
    excerpt: "Seamless online food ordering and efficient delivery system",
    features: [
      "Intuitive and user-friendly interface",
      "Online food ordering system",
      "Authentic Nigerian cuisines selection",
      "Global accessibility for orders",
      "Efficient delivery options worldwide",
      "Secure payment processing",
      "Real-time order tracking",
      "User accounts for personalized experiences"
    ],
    case_study: "<p>Sphene Qwizines aimed to connect Nigerian food enthusiasts worldwide with authentic cuisines from the comfort of their homes. The solution involved creating an intuitive and user-friendly online food ordering system.</p><p>Users can explore a diverse selection of authentic Nigerian cuisines, placing orders with global accessibility. Efficient delivery options were prioritized to bridge the gap between enthusiasts and their favorite dishes. Secure payment processing and real-time order tracking enhance the user experience.</p><p>User accounts were implemented for personalized interactions, ensuring a seamless journey from order placement to delivery. Sphene Qwizines now stands as a platform that not only celebrates Nigerian cuisines but also provides a convenient and accessible way for people worldwide to enjoy them.</p>",
    link: "https://sphene-qwizines.vercel.app",
    github: "https://github.com/Nate-Soul/sphene-qwizines-fe",
    category: "web",
    tags: ["online food ordering", "Table Reservation", "Nigerian cuisines", "global accessibility", "delivery options", "user-friendly interface","secure payment", "real-time tracking", "personalized experiences"],
    technologies: ["Tailwind CSS", "CSS3", "HTML5", "JavaScript", "React.js", "Next.js"],
    featured_image: "/assets/images/portfolio/sphene-qwizines.jpg"
  },
  {
    id: 6,
    name: "BlazeSKills Inc",
    slug: "blazeskills-inc",
    excerpt: "Revamped Brochure and Training Websites For BlazeSkills Inc",
    features: [
      "Comprehensive website analysis using industry-approved tools",
      "Revamp of both brochure and training websites",
      "Optimization for semantics and overall site structure",
      "On-page SEO enhancements",
      "Alignment with brand guidelines for color and font usage",
      "User-friendly and mobile-responsive interface"
    ],
    case_study: "<p>Blazeskills Inc, a global IT leader, entrusted us with revamping both their brochure website (www.blazeskills.com) and their training website (trainings.blazeskills.com). Our approach involved a comprehensive analysis using industry-approved tools, which served as reference points for optimization.</p><p>Semantics, overall site structure, and on-page SEO were enhanced to elevate their online presence. Aligning with brand guidelines, we corrected color combinations and fonts usage, ensuring a cohesive visual identity. The result is user-friendly, mobile-responsive websites that not only showcase Blazeskills Inc's IT prowess but also provide an enhanced experience for visitors.</p>",
    link: "https://blazeskills.com",
    github: "",
    category: "web",
    tags: ["online food ordering", "Nigerian cuisines", "global accessibility", "delivery options", "user-friendly interface", "secure payment", "real-time tracking", "personalized experiences"],
    technologies: ["CSS3", "HTML5", "JavaScript", "PHP"],
    featured_image: "/assets/images/portfolio/blazeskills-learning.jpg"
  },
  {
    id: 7,
    name: "Quetas Couture",
    slug: "quetas-couture",
    excerpt: "A unique brand identity reflecting quality and superiority",
    features: [
      "Strategic name development - Quetas Couture",
      "Distinctive brand colors and palettes",
      "Typography guidelines for a consistent look",
      "Logo design reflecting quality and uniqueness",
      "Brand guidelines for cohesive visual communication",
      "Customized assets to set them apart"
    ],
    case_study: "<p>Quetas Couture, a fashion house committed to quality and superiority, sought a brand identity that truly embodied these values. The solution involved strategic name development, resulting in 'Quetas Couture,' a name that resonates with sophistication.</p><p>Distinctive brand colors and palettes were carefully selected to convey a sense of uniqueness and excellence. Typography guidelines were established for a consistent and cohesive visual identity. The logo, meticulously designed, reflects the brand's commitment to quality and stands out in the competitive fashion landscape.</p><p>Comprehensive brand guidelines were created, ensuring a unified and impactful visual communication strategy. Customized assets further set Quetas Couture apart, creating a brand identity that not only aligns with their values but also establishes a memorable and distinguished presence.</p>",
    link: "",
    github: "",
    category: "brand",
    tags: ["brand identity", "fashion house", "quality", "superiority", "logo design", "brand colors", "typography", "brand guidelines"],
    technologies: ["Corel Draw", "PhotoShop"],
    featured_image: "/assets/images/portfolio/quetas-couture-logo-design.jpg"
  },
  {
    id: 3,
    name: "Optimum Seab",
    slug: "optimum-seab",
    excerpt: "Brand identity design for petroleum marketing company",
    features: [
      "Comprehensive brand strategy realignment",
      "Mission and vision statement refinement",
      "Target audience analysis",
      "Distinctive logo design reflecting petroleum industry",
      "Revised brand colors and visual elements",
      "Brand messaging consistency across platforms",
      "Marketing collateral redesign"
    ],
    case_study: "<p>Optimum Seab, an independent distributor of petroleum products, recognized the need for a brand transformation to better align with their services, mission, and vision. The solution involved a comprehensive realignment of their brand strategy.</p><p>The mission and vision statements were refined to articulate their core values effectively. Through a detailed analysis of their target audience, a distinctive logo design was crafted to resonate with the petroleum industry.</p><p>Revised brand colors and visual elements were introduced for a more cohesive and impactful brand presence. Consistency in brand messaging across various platforms was emphasized to build a strong brand identity.</p><p>The redesign extended to marketing collateral, ensuring a unified and compelling representation. The result is an Optimum Seab brand that not only reflects their core values but also resonates effectively with their target audience.</p>",
    link: "https://drive.google.com/drive/folders/1GZZAgkBW9AuEXjUslezMflGdvnvXO7EX",
    github: "",
    category: "brand",
    tags:  ["brand transformation", "petroleum products", "logo design", "brand colors", "marketing collateral", "target audience", "brand strategy"],
    technologies: ["Corel Draw", "Adobe PhotoShop", "Adobe Illustrator"],
    featured_image: "/assets/images/portfolio/optimum-seab-logo-design.jpg"
  },
  {
    id: 9,
    name: "Metro Cleaning Agency",
    slug: "metro-cleaning-agency",
    excerpt: "Eco-Friendly brand identity for professional cleaning agency",
    features: [
      "Integration of cleaning tools in brand identity",
      "Distinctive logo reflecting cleanliness and efficiency",
      "Eco-friendly color palette and design elements",
      "Custom typography for a unique and recognizable look",
      "Brand messaging highlighting wide cleaning solutions",
      "Consistent visual identity across platforms",
      "Incorporation of eco-friendly values"
    ],
    case_study: "<p>Metro Cleaning Agency, known for their diverse cleaning solutions, sought a brand identity that spoke their language and emphasized their commitment to excellence. The solution involved integrating actual cleaning tools into the brand identity, creating a distinctive logo that reflects cleanliness and efficiency.</p><p>An eco-friendly color palette and design elements were carefully selected to align with their values. Custom typography was crafted for a unique and recognizable look. Brand messaging highlighted their wide range of cleaning solutions, establishing a strong identity in the cleaning industry.</p><p>Consistency in visual identity across platforms ensured a cohesive and memorable brand presence. The incorporation of eco-friendly values further sets Metro Cleaning Agency apart, solidifying their commitment to sustainable practices.</p>",
    link: "",
    github: "",
    category: "brand",
    tags: ["cleaning agency", "brand identity", "logo design", "eco-friendly", "visual identity", "cleaning solutions","custom typography"],
    technologies: ["PhotoShop", "CorelDraw"],
    featured_image: "/assets/images/portfolio/metro-cleaning-agency.jpg"
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
  name: "Ofofon-ono Ezekiel",
  role: "CEO & Co-founder",
  company: "Sphenyx Digitals",
  review: "Working with Nathanael was a game-changer! Our new website perfectly aligns with our business goals. It's a showcase of creativity and functionality. Highly recommended!"  
  },
  {
    id: 2,
    name: "Asuquo Jacobs",
    role: "CEO & Founder",
    company: "Quetas Couture",
    review: "Quetas Couture's new brand identity is a masterpiece. It perfectly reflects our values of quality and uniqueness. A true standout in the fashion industry!"
  },
  {
    id: 3,
    name: "Samuel Enwenwen",
    role: "CEO",
    company: "Optimum Seab",
    review: "The brand transformation was a strategic move. Our new identity aligns seamlessly with our mission and resonates effectively with our audience. Fantastic job!"
  },
  {
    id: 4,
    name: "Ekudomo Bassey",
    role: "CEO",
    company: "Metro Cleaning Agency",
    review: "Metro Cleaning Agency's brand identity is spot-on! It speaks our language and also emphasizes our commitment to excellence. Highly recommended for branding services!"
  },
  {
    id: 5,
    name: "Imoh Etuk",
    role: "IT Specialist",
    company: "Blazeskills Inc",
    review: "The website revamp was a game-changer. Semantics, SEO, and brand alignment were top-notch. The result is a user-friendly interface that reflects our industry leadership!"
  }  
];