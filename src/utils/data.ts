import { processesType, projectsType, servicesType, testimonialsType } from "@/types/types";

// export const projectData: projectsType = [
//   {
//     id: 1,
//     name: "Boot5",
//     slug: "boot-5",
//     excerpt: "Modern Landing Page UI for a learning management system",
//     features: [
//       "Efficient information architecture",
//       "Intuitive user interface using Bootstrap 5",
//       "CSS for enhanced styling and responsiveness",
//       "JavaScript-powered contact form",
//       "Error handling in form submissions",
//       "Email functionality for seamless communication",
//       "Customized accordion, modals, navigation bar, etc."
//     ],
//     case_study: "<p>Boot5, a modern landing page for a learning management system, was a hobby project with a focus on efficient information architecture and an intuitive user interface. Bootstrap 5 and CSS were leveraged to create a sleek and responsive design.</p> <p>The integration of JavaScript powered the contact form, providing error handling for form submissions and seamless email functionality. The result is a modern and user-friendly landing page that not only showcases the capabilities of Bootstrap 5 but also ensures a smooth and interactive experience for visitors.</p>",  
//     link: "https://boot-5.netlify.app",
//     github: "https://github.com/Nate-Soul/boot5",
//     category: "web",
//     tags: ["learning management system", "landing page", "Bootstrap 5", "CSS", "JavaScript", "user interface", "contact form"],
//     technologies: ["HTML5", "CSS3", "Boostrap5", "JavaScript"],
//     featured_image: "/assets/images/portfolio/boot5.jpg"
//   },
//   {
//     id: 2,
//     name: "Sphenyx Digitals",
//     slug: "sphenyx-digitals",
//     excerpt: "Professional one page website for digital agency",
//     features: [
//       "Responsive one-page design",
//       "Intuitive UI/UX for seamless navigation",
//       "Dynamic portfolio showcasing with featured case studies",
//       "Transparent pricing presentation for each service",
//       "Secure payment/ordering system integration",
//       "Compelling storytelling section",
//       "Team showcase for a personal touch",
//       "Client success stories for social proof",
//       "Efficient contact form for client inquiries"
//     ],
//     case_study: "<p>Sphenyx Digitals sought a digital hub that would not only reflect their diverse services but also align with their business goals. Our solution was a sleek, one-page website offering a seamless user experience.</p><p>The dynamic portfolio section beautifully showcases their work through featured case studies, providing potential clients with a comprehensive view of their capabilities. Transparent pricing for each service ensures clarity, and our integrated secure payment system streamlines the client's journey from exploration to transaction.</p><p> The storytelling section humanizes the brand, offering insights into Sphenyx Digitals' journey and values. The team showcase and client success stories provide social proof, building trust with visitors. The efficient contact form serves as a direct channel for client inquiries, facilitating seamless communication. The result is a digital presence that not only attracts potential clients but also nurtures existing relationships.</p>",
//     link: "https://sphenyx.netlify.app",
//     github: "",
//     category: "web",
//     tags:  ["web design", "web development", "UI/UX", "digital marketing", "brand identity", "cybersecurity", "photography", "videography", "landing page", "One page website"],
//     technologies: ["Bootstrap5", "CSS3", "HTML5", "jQuery", "JavaScript"],
//     featured_image: "/assets/images/portfolio/sphenyx.png"
//   },
//   {
//     id: 8,
//     name: "Capital Stallion",
//     slug: "capital-stallion",
//     excerpt: "Redesign For A Cataglossless WordPress Solution",
//     features: [
//       "Custom WordPress theme design",
//       "Catalog showcasing hospital equipment",
//       "About us and company history section",
//       "Certifications and client reviews display",
//       "Quotation request form for machineries",
//       "Booking form for manufacturing plant tours",
//       "Customer service inquiry form"
//     ],
//     case_study: "<p>Capital Stallion, previously operating under <a href='https://www.oriensmedical.com' target='_blank' style='color:dodgerblue;'>Oriens Medical</a>, sought a website overhaul for their hospital equipment manufacturing and distribution business.</p><p> The challenge was to maintain and extend existing functionalities while improving design and usability. Our solution involved crafting a cataglossless custom WordPress theme. The catalog section elegantly showcases their diverse range of hospital equipment. The 'About Us' and company history sections provide insights into their background. Certifications and client reviews instill trust and credibility. </p><p> Specific forms, including a quotation request form, a tour booking form for manufacturing plants, and a customer service inquiry form, enhance user engagement and streamline communication. The result is a well-designed, user-friendly website that not only preserves but also elevates the functionality of Capital Stallion's online presence.</p>",
//     link: "http://capitalorthoindia.com",
//     github: "",
//     category: "web",
//     tags: ["website redesign", "WordPress", "catalog", "hospital equipment", "user-friendly", "custom theme", "customer service"],
//     technologies: ["Tailwind CSS", "CSS3", "HTML5", "jQuery", "JavaScript", "PHP", "Wordpress", "WooCommerce"],
//     featured_image: "/assets/images/portfolio/capital-stallion.jpg"
//   },
//   {
//     id: 4,
//     name: "Sphene Reserves",
//     slug: "sphene-reserves",
//     excerpt: "Seamless Online Booking for pre-trip accomodations",
//     features: [
//       "User-friendly online booking platform",
//       "Extensive lodging options (hotels, resorts, vacation rentals)",
//       "Budget and preference customization",
//       "Secure and efficient payment system",
//       "Real-time availability updates",
//       "Intuitive user profiles for personalized experiences",
//       "Instant booking confirmations",
//       "Detailed booking history tracking",
//       "Responsive customer support"
//     ],
//     case_study: "<p>Sphene Reserves aimed to revolutionize travel planning by providing a hassle-free platform for clients to secure lodging in advance. Our solution delivered a user-friendly online booking system with an extensive array of lodging options, allowing travelers to align their accommodation with budget and preferences seamlessly.</p><p>The integration of a secure payment system ensures a smooth transaction process. Real-time availability updates and instant booking confirmations enhance the user experience.</p><p> User profiles offer a personalized touch, allowing clients to track detailed booking history and tailor future experiences. Responsive customer support further ensures a reliable and enjoyable pre-trip experience, solidifying Sphene Reserves as the go-to choice for convenient lodging bookings.</p>",
//     link: "https://sphenereserves.netlify.app",
//     github: "https://github.com/Nate-Soul/sphene-reserves",
//     category: "web",
//     tags: ["online booking", "travel agency", "lodging", "user-friendly", "budget customization", "secure payment", "customer support"],
//     technologies: ["Tailwind CSS", "CSS3", "HTML5", "JavaScript", "React.js"],
//     featured_image: "/assets/images/portfolio/sphene-reserves.jpg"
//   },
//   {
//     id: 5,
//     name: "Sphene Qwizines",
//     slug: "sphene-qwizines",
//     excerpt: "Seamless online food ordering and efficient delivery system",
//     features: [
//       "Intuitive and user-friendly interface",
//       "Online food ordering system",
//       "Authentic Nigerian cuisines selection",
//       "Global accessibility for orders",
//       "Efficient delivery options worldwide",
//       "Secure payment processing",
//       "Real-time order tracking",
//       "User accounts for personalized experiences"
//     ],
//     case_study: "<p>Sphene Qwizines aimed to connect Nigerian food enthusiasts worldwide with authentic cuisines from the comfort of their homes. The solution involved creating an intuitive and user-friendly online food ordering system.</p><p>Users can explore a diverse selection of authentic Nigerian cuisines, placing orders with global accessibility. Efficient delivery options were prioritized to bridge the gap between enthusiasts and their favorite dishes. Secure payment processing and real-time order tracking enhance the user experience.</p><p>User accounts were implemented for personalized interactions, ensuring a seamless journey from order placement to delivery. Sphene Qwizines now stands as a platform that not only celebrates Nigerian cuisines but also provides a convenient and accessible way for people worldwide to enjoy them.</p>",
//     link: "https://sphene-qwizines.vercel.app",
//     github: "https://github.com/Nate-Soul/sphene-qwizines-fe",
//     category: "web",
//     tags: ["online food ordering", "Table Reservation", "Nigerian cuisines", "global accessibility", "delivery options", "user-friendly interface","secure payment", "real-time tracking", "personalized experiences"],
//     technologies: ["Tailwind CSS", "CSS3", "HTML5", "JavaScript", "React.js", "Next.js"],
//     featured_image: "/assets/images/portfolio/sphene-qwizines.jpg"
//   },
//   {
//     id: 6,
//     name: "BlazeSKills Inc",
//     slug: "blazeskills-inc",
//     excerpt: "Revamped Brochure and Training Websites For BlazeSkills Inc",
//     features: [
//       "Comprehensive website analysis using industry-approved tools",
//       "Revamp of both brochure and training websites",
//       "Optimization for semantics and overall site structure",
//       "On-page SEO enhancements",
//       "Alignment with brand guidelines for color and font usage",
//       "User-friendly and mobile-responsive interface"
//     ],
//     case_study: "<p>Blazeskills Inc, a global IT leader, entrusted us with revamping both their brochure website (www.blazeskills.com) and their training website (trainings.blazeskills.com). Our approach involved a comprehensive analysis using industry-approved tools, which served as reference points for optimization.</p><p>Semantics, overall site structure, and on-page SEO were enhanced to elevate their online presence. Aligning with brand guidelines, we corrected color combinations and fonts usage, ensuring a cohesive visual identity. The result is user-friendly, mobile-responsive websites that not only showcase Blazeskills Inc's IT prowess but also provide an enhanced experience for visitors.</p>",
//     link: "https://blazeskills.com",
//     github: "",
//     category: "web",
//     tags: ["online food ordering", "Nigerian cuisines", "global accessibility", "delivery options", "user-friendly interface", "secure payment", "real-time tracking", "personalized experiences"],
//     technologies: ["CSS3", "HTML5", "JavaScript", "PHP"],
//     featured_image: "/assets/images/portfolio/blazeskills-learning.jpg"
//   },
//   {
//     id: 7,
//     name: "Quetas Couture",
//     slug: "quetas-couture",
//     excerpt: "A unique brand identity reflecting quality and superiority",
//     features: [
//       "Strategic name development - Quetas Couture",
//       "Distinctive brand colors and palettes",
//       "Typography guidelines for a consistent look",
//       "Logo design reflecting quality and uniqueness",
//       "Brand guidelines for cohesive visual communication",
//       "Customized assets to set them apart"
//     ],
//     case_study: "<p>Quetas Couture, a fashion house committed to quality and superiority, sought a brand identity that truly embodied these values. The solution involved strategic name development, resulting in 'Quetas Couture,' a name that resonates with sophistication.</p><p>Distinctive brand colors and palettes were carefully selected to convey a sense of uniqueness and excellence. Typography guidelines were established for a consistent and cohesive visual identity. The logo, meticulously designed, reflects the brand's commitment to quality and stands out in the competitive fashion landscape.</p><p>Comprehensive brand guidelines were created, ensuring a unified and impactful visual communication strategy. Customized assets further set Quetas Couture apart, creating a brand identity that not only aligns with their values but also establishes a memorable and distinguished presence.</p>",
//     link: "",
//     github: "",
//     category: "brand",
//     tags: ["brand identity", "fashion house", "quality", "superiority", "logo design", "brand colors", "typography", "brand guidelines"],
//     technologies: ["Corel Draw", "PhotoShop"],
//     featured_image: "/assets/images/portfolio/quetas-couture-logo-design.jpg"
//   },
//   {
//     id: 3,
//     name: "Optimum Seab",
//     slug: "optimum-seab",
//     excerpt: "Brand identity design for petroleum marketing company",
//     features: [
//       "Comprehensive brand strategy realignment",
//       "Mission and vision statement refinement",
//       "Target audience analysis",
//       "Distinctive logo design reflecting petroleum industry",
//       "Revised brand colors and visual elements",
//       "Brand messaging consistency across platforms",
//       "Marketing collateral redesign"
//     ],
//     case_study: "<p>Optimum Seab, an independent distributor of petroleum products, recognized the need for a brand transformation to better align with their services, mission, and vision. The solution involved a comprehensive realignment of their brand strategy.</p><p>The mission and vision statements were refined to articulate their core values effectively. Through a detailed analysis of their target audience, a distinctive logo design was crafted to resonate with the petroleum industry.</p><p>Revised brand colors and visual elements were introduced for a more cohesive and impactful brand presence. Consistency in brand messaging across various platforms was emphasized to build a strong brand identity.</p><p>The redesign extended to marketing collateral, ensuring a unified and compelling representation. The result is an Optimum Seab brand that not only reflects their core values but also resonates effectively with their target audience.</p>",
//     link: "https://drive.google.com/drive/folders/1GZZAgkBW9AuEXjUslezMflGdvnvXO7EX",
//     github: "",
//     category: "brand",
//     tags:  ["brand transformation", "petroleum products", "logo design", "brand colors", "marketing collateral", "target audience", "brand strategy"],
//     technologies: ["Corel Draw", "Adobe PhotoShop", "Adobe Illustrator"],
//     featured_image: "/assets/images/portfolio/optimum-seab-logo-design.jpg"
//   },
//   {
//     id: 9,
//     name: "Metro Cleaning Agency",
//     slug: "metro-cleaning-agency",
//     excerpt: "Eco-Friendly brand identity for professional cleaning agency",
//     features: [
//       "Integration of cleaning tools in brand identity",
//       "Distinctive logo reflecting cleanliness and efficiency",
//       "Eco-friendly color palette and design elements",
//       "Custom typography for a unique and recognizable look",
//       "Brand messaging highlighting wide cleaning solutions",
//       "Consistent visual identity across platforms",
//       "Incorporation of eco-friendly values"
//     ],
//     case_study: "<p>Metro Cleaning Agency, known for their diverse cleaning solutions, sought a brand identity that spoke their language and emphasized their commitment to excellence. The solution involved integrating actual cleaning tools into the brand identity, creating a distinctive logo that reflects cleanliness and efficiency.</p><p>An eco-friendly color palette and design elements were carefully selected to align with their values. Custom typography was crafted for a unique and recognizable look. Brand messaging highlighted their wide range of cleaning solutions, establishing a strong identity in the cleaning industry.</p><p>Consistency in visual identity across platforms ensured a cohesive and memorable brand presence. The incorporation of eco-friendly values further sets Metro Cleaning Agency apart, solidifying their commitment to sustainable practices.</p>",
//     link: "",
//     github: "",
//     category: "brand",
//     tags: ["cleaning agency", "brand identity", "logo design", "eco-friendly", "visual identity", "cleaning solutions","custom typography"],
//     technologies: ["PhotoShop", "CorelDraw"],
//     featured_image: "/assets/images/portfolio/metro-cleaning-agency.jpg"
//   },  
// ];

export const serviceData: servicesType = [
  {
      id: 1,
      icon_url: "/assets/images/services/web-design.png",
      name: "Frontend Development",
      slug: "frontend-development",
      desc: "I build captivating and stunning user friendly websites and apps that engage audiences and boost conversions.",
      icon: "/assets/images/services/web-design.png",
      icon_alt: "responsive web design + frontend development illustration",
      priority: 1,
      is_active: true,
      created_at: "2024-01-22T15:51:41.948233Z",
      modified_at: "2024-01-22T15:51:41.949239Z"
  },
  {
      id: 2,
      icon_url: "/assets/images/services/backend.png",
      name: "Backend Development + Database",
      slug: "backend-development",
      desc: "From robust web infrastructures to optimized schemas: I aim for smooth performance, scalability, and blazing-fast applications that are efficient.",
      icon: "/assets/images/services/backend.png",
      icon_alt: "code icon / symbol",
      priority: 2,
      is_active: true,
      created_at: "2024-01-22T15:58:27.146233Z",
      modified_at: "2024-01-22T15:58:27.146233Z"
  },
  {
      id: 3,
      icon_url: "/assets/images/services/seo-content-marketing.png",
      name: "On-Page Search Engine Optimization",
      slug: "on-page-search-engine-optimization",
      desc: "Climb search rankings and attract organic traffic through strategic keyword targeting and content optimization.",
      icon: "/assets/images/services/seo-content-marketing.png",
      icon_alt: "content marketing + SEO + sales funnel illustration",
      priority: 3,
      is_active: true,
      created_at: "2024-01-22T16:10:30.821238Z",
      modified_at: "2024-01-22T16:10:30.822233Z"
  },
  {
      id: 4,
      icon_url: "/assets/images/services/speed-radar.png",
      name: "Speed Audit & Optimization",
      slug: "speed-audit-optimization",
      desc: "I eliminate bottlenecks from website bottlenecks and deliver lightning-fast experiences that keeps users engaged.",
      icon: "/assets/images/services/speed-radar.png",
      icon_alt: "Speed radar indicating optimum speed for websites",
      priority: 4,
      is_active: true,
      created_at: "2024-01-22T16:15:50.579767Z",
      modified_at: "2024-01-22T16:15:50.579767Z"
  },
  {
      id: 5,
      icon_url: "/assets/images/services/accessibility.png",
      name: "Accessibility Audit & Optimization",
      slug: "accessibility-speed-optimization",
      desc: "I ensure everyone enjoys your website, regardless of ability, with inclusive deisgn and development practices.",
      icon: "/assets/images/services/accessibility.png",
      icon_alt: "Accessibility for websites",
      priority: 5,
      is_active: true,
      created_at: "2024-01-22T16:15:50.579767Z",
      modified_at: "2024-01-22T16:15:50.579767Z"
  },
  {
      id: 6,
      icon_url: "/assets/images/services/paint-palette.svg",
      name: "Branding + Logo Design",
      slug: "branding-logo-design",
      desc: "Create a powerful visual identity that tells your story and resonates with your target audience.",
      icon: "/assets/images/services/paint-palette.svg",
      icon_alt: "creative logo design representation",
      priority: 6,
      is_active: true,
      created_at: "2024-01-22T16:17:57.307762Z",
      modified_at: "2024-01-22T16:17:57.307762Z"
  },
//   {
//       id: 7,
//       icon_url: "/assets/images/services/app-development.png",
//       name: "App Development",
//       slug: "app-development",
//       desc: "Transform your innovative ideas into powerful, user-friendly applications. With expertise in app development and a keen eye for user experience design, I bring your vision to fruition. Let's create applications that resonate with your audience and make a lasting impact.",
//       icon: "/assets/images/services/app-development.png",
//       icon_alt: "app in development",
//       priority: 7,
//       is_active: false,
//       created_at: "2024-01-22T16:19:37.096771Z",
//       modified_at: "2024-01-22T16:19:37.096771Z"
//   }
];

export const processData: processesType = [
    {
      id: 1,
      icon_url: "/assets/images/processes/discovery.png",
      name: "Discovery Session",
      slug: "discovery-session",
      desc: "We dive deep into your ideas, goals and vision. Through open dialogue, I gain a comprehensive understanding of your project, ensuring every nuance is captured. Together we set the foundation for a digital solution that aligns seamlessly with your objectives.",
      icon: "/assets/images/processes/discovery.png",
      icon_alt: "Discovery session illustration",
      priority: 1,
      created_at: "2024-01-23",
      modified_at: "2024-01-23",
    },
    {
      id: 2,
      icon_url: "/assets/images/processes/ideation.png",
      name: "Collaborative Ideation",
      slug: "collaborative-ideation",
      desc: "Through collaborative ideation sessions, we refine concepts, sketch wireframes, and outline the user experience. This stage is where ideas come to life, taking shape in a way that not only meets but exceeds your expectations. Your input is invaluable as we sculpt a digital masterpiece tailored to your unique needs",
      icon: "/assets/images/processes/ideation.png",
      icon_alt: "2 poeple ideating together illustration",
      priority: 2,
      created_at: "2024-01-23",
      modified_at: "2024-01-23",
    },
    {
      id: 3,
      icon_url: "/assets/images/processes/development.png",
      name: "Development Sprint",
      slug: "development-sprint",
      desc: "With a solid plan in place, it's time to bring the vision to fruition. I enter the development sprint, crafting the frontend and backend, and user interfaces with precision. Regular updates and feedback keep you in the loop, ensuring that the evolving product aligns with your expectations.",
      icon: "/assets/images/processes/development.png",
      icon_alt: "Web developer working alone",
      priority: 3,
      created_at: "2024-01-23",
      modified_at: "2024-01-23",
    },
    {
      id: 4,
      icon_url: "/assets/images/processes/idea-launch.png",
      name: "Refinement & Launch",
      slug: "refinement-launch",
      desc: "Before we unveil yout project to the world, we fine-tune evry detail, addressing user feedback, and optimizing for performance, we ensure that the end product is not just good but exceptional. With your approval, we launch your digital creation, ready to make an impact and elevate your online business.",
      icon: "/assets/images/processes/idea-launch.png",
      icon_alt: "idea launching out of a box",
      priority: 4,
      created_at: "2024-01-23",
      modified_at: "2024-01-23",
    },
];

export  const testimonialData: testimonialsType = [
  {
    id: 1,
    avatar_url: "/assets/images/testimonees/ofofon-ono-ezekiel.jpg",
    web_id: "31c63a67-e627-4642-a0af-a4819256bb10",
    name: "Ofofon-ono Ezekiel",
    role: "CEO & Co-founder",
    company: "Sphenyx Digitals",
    review: "Working with Nathanael was a game-changer! Our new website perfectly aligns with our business goals. It's a showcase of creativity and functionality. Highly recommended!",
    avatar: "/assets/images/testimonees/ofofon-ono-ezekiel.jpg",
    is_active: true,
    created_at: "2024-01-22T16:44:36.668767Z",
    modified_at: "2024-01-22T16:44:36.668767Z"
  },
  {
    id: 2,
    avatar_url: "",
    web_id: "c9b58ea1-d146-4228-bf2e-f481c0dadaee",
    name: "Samuel Enwenwen",
    role: "CEO & Founder",
    company: "Optimum Seab",
    review: "The brand transformation was a strategic move. Our new identity aligns seamlessly with our mission and resonates effectively with our audience. Fantastic job!",
    avatar: "",
    is_active: true,
    created_at: "2024-01-22T16:46:20.480761Z",
    modified_at: "2024-01-22T16:46:20.480761Z"
  },
  {
    id: 3,
    avatar_url: "",
    web_id: "000d8aab-00b9-47a6-868f-f17502afcd83",
    name: "Ekudomo Bassey",
    role: "CEO",
    company: "Metro Cleaning Agency",
    review: "Metro Cleaning Agency's brand identity is spot-on! It speaks our language and also emphasizes our commitment to excellence. Highly recommended for branding services!",
    avatar: "",
    is_active: true,
    created_at: "2024-01-22T16:47:28.565767Z",
    modified_at: "2024-01-22T16:47:28.565767Z"
  },
  {
    id: 4,
    avatar_url: "",
    web_id: "de452083-bdc0-432d-8ae2-b314b0da85de",
    name: "Imoh Etuk",
    role: "IT Specialist",
    company: "Blazeskills Inc",
    review: "The website revamp was a game-changer. Semantics, SEO, and brand alignment were top-notch. The result is a user-friendly interface that reflects our industry leadership!",
    avatar: "",
    is_active: true,
    created_at: "2024-01-22T16:53:04.801767Z",
    modified_at: "2024-01-22T16:53:04.801767Z"
  },
  {
    id: 5,
    avatar_url: "",
    web_id: "77b008e5-a9c2-4369-859e-38613267e8ed",
    name: "Asuquo Jacobs",
    role: "CEO & Founder",
    company: "Quetas Couture",
    review: "Quetas Couture's new brand identity is a masterpiece. It perfectly reflects our values of quality and uniqueness. A true standout in the fashion industry!",
    avatar: "",
    is_active: true,
    created_at: "2024-01-22T16:53:55.759763Z",
    modified_at: "2024-01-22T16:53:55.759763Z"
  } 
];

export const projectData : projectsType = [
    {
        id: 2,
        tags: [
            {
                id: 2,
                name: "Learning Management System",
                slug: "learning-management-system"
            },
            {
                id: 3,
                name: "landing page",
                slug: "landing-page"
            },
            {
                id: 4,
                name: "Bootstrap 5",
                slug: "bootstrap-5"
            },
            {
                id: 5,
                name: "CSS",
                slug: "css"
            },
            {
                id: 6,
                name: "JavaScript",
                slug: "javascript"
            },
            {
                id: 7,
                name: "user interface",
                slug: "user-interface"
            },
            {
                id: 8,
                name: "contact form",
                slug: "contact-form"
            }
        ],
        services: [
            {
                id: 2,
                name: "Web",
                slug: "web",
                is_active: true
            }
        ],
        technologies: [
            {
                id: 2,
                name: "HTML5",
                slug: "html5"
            },
            {
                id: 4,
                name: "CSS3",
                slug: "css3"
            },
            {
                id: 6,
                name: "JavaScript",
                slug: "javascript"
            },
            {
                id: 10,
                name: "Bootstrap 5",
                slug: "bootstrap-5"
            }
        ],
        features: [
            {
                id: 2,
                web_id: "03c8b00f-8522-47d3-8a9e-42bd9cc4e812",
                feature: "Efficient information architecture"
            },
            {
                id: 3,
                web_id: "40703a05-06b4-427b-9fb4-7c7442c3ebe4",
                feature: "Intuitive user interface using Bootstrap 5"
            },
            {
                id: 4,
                web_id: "ca5a1ff5-3fee-47b6-a7fe-8b3ffab4d6b8",
                feature: "CSS for enhanced styling and responsiveness"
            },
            {
                id: 5,
                web_id: "77c5776e-5bb2-4029-a5b6-a279c5896d3f",
                feature: "JavaScript-powered contact form"
            },
            {
                id: 6,
                web_id: "6e5a30a3-b161-4b7d-98b0-0b32bdbc407f",
                feature: "Error handling in form submissions"
            },
            {
                id: 7,
                web_id: "4cf4ecfb-cbcd-4a02-ba58-9d1f6771225e",
                feature: "Email functionality for seamless communication"
            },
            {
                id: 8,
                web_id: "9c068cea-a538-46e2-8e92-42516df3302f",
                feature: "Customized accordion, modals, navigation bar, etc."
            }
        ],
        images: [
            {
                id: 2,
                image_url: "/assets/images/portfolio/boot5.jpg",
                web_id: "f3278799-cda8-4f21-bb95-5a587e5abe93",
                alt: "boot 5",
                image: "/assets/images/portfolio/boot5.jpg",
                is_feature: true,
                project: 2
            }
        ],
        name: "Boot 5",
        slug: "boot-5",
        excerpt: "Modern Landing Page UI for a learning management system",
        case_study: "<p>Boot5, a modern landing page for a learning management system, was a hobby project with a focus on efficient information architecture and an intuitive user interface. Bootstrap 5 and CSS were leveraged to create a sleek and responsive design.</p> <p>The integration of JavaScript powered the contact form, providing error handling for form submissions and seamless email functionality. The result is a modern and user-friendly landing page that not only showcases the capabilities of Bootstrap 5 but also ensures a smooth and interactive experience for visitors.</p>",
        link: "https://boot-5.netlify.app",
        github: "https://github.com/Nate-Soul/boot5",
        is_active: true,
        created_at: "2024-01-22T17:27:46.567762Z",
        modified_at: "2024-01-22T17:27:46.567762Z"
    },
    {
        id: 3,
        tags: [
            {
                id: 9,
                name: "web design",
                slug: "web-design"
            },
            {
                id: 10,
                name: "web development",
                slug: "web-development"
            },
            {
                id: 11,
                name: "UI/UX",
                slug: "uiux"
            },
            {
                id: 12,
                name: "digital marketing",
                slug: "digital-marketing"
            },
            {
                id: 13,
                name: "brand identity",
                slug: "brand-identity"
            },
            {
                id: 14,
                name: "cybersecurity",
                slug: "cybersecurity"
            }
        ],
        services: [
            {
                id: 2,
                name: "Web",
                slug: "web",
                is_active: true
            }
        ],
        technologies: [
            {
                id: 2,
                name: "HTML5",
                slug: "html5"
            },
            {
                id: 4,
                name: "CSS3",
                slug: "css3"
            },
            {
                id: 5,
                name: "jQuery",
                slug: "jquery"
            },
            {
                id: 6,
                name: "JavaScript",
                slug: "javascript"
            },
            {
                id: 9,
                name: "PHP",
                slug: "php"
            },
            {
                id: 10,
                name: "Bootstrap 5",
                slug: "bootstrap-5"
            }
        ],
        features: [
            {
                id: 2,
                web_id: "03c8b00f-8522-47d3-8a9e-42bd9cc4e812",
                feature: "Efficient information architecture"
            },
            {
                id: 3,
                web_id: "40703a05-06b4-427b-9fb4-7c7442c3ebe4",
                feature: "Intuitive user interface using Bootstrap 5"
            },
            {
                id: 5,
                web_id: "77c5776e-5bb2-4029-a5b6-a279c5896d3f",
                feature: "JavaScript-powered contact form"
            },
            {
                id: 7,
                web_id: "4cf4ecfb-cbcd-4a02-ba58-9d1f6771225e",
                feature: "Email functionality for seamless communication"
            },
            {
                id: 9,
                web_id: "94041587-2a3c-424d-bd93-55858b565dc9",
                feature: "Responsive one-page design"
            },
            {
                id: 10,
                web_id: "aa933cc8-546f-4bf2-8ba9-28a3a54c6610",
                feature: "Intuitive UI/UX for seamless navigation"
            },
            {
                id: 11,
                web_id: "c8855ad8-1f8d-48dd-98dc-896bba4ab63b",
                feature: "Dynamic portfolio showcasing with featured case studies"
            },
            {
                id: 12,
                web_id: "007c0bc7-9a12-4c9e-a99c-403bad0b007b",
                feature: "Transparent pricing presentation for each service"
            }
        ],
        images: [
            {
                id: 3,
                image_url: "/assets/images/portfolio/sphenyx.png",
                web_id: "f5209626-f5eb-4436-a730-7c49070c59fa",
                alt: "sphenyx digitals",
                image: "/assets/images/portfolio/sphenyx.png",
                is_feature: true,
                project: 3
            }
        ],
        name: "Sphenyx Digitals",
        slug: "sphenyx-digitals",
        excerpt: "Professional one page website for digital agency",
        case_study: "<p>Sphenyx Digitals sought a digital hub that would not only reflect their diverse services but also align with their business goals. Our solution was a sleek, one-page website offering a seamless user experience.</p><p>The dynamic portfolio section beautifully showcases their work through featured case studies, providing potential clients with a comprehensive view of their capabilities. Transparent pricing for each service ensures clarity, and our integrated secure payment system streamlines the client's journey from exploration to transaction.</p><p> The storytelling section humanizes the brand, offering insights into Sphenyx Digitals' journey and values. The team showcase and client success stories provide social proof, building trust with visitors. The efficient contact form serves as a direct channel for client inquiries, facilitating seamless communication. The result is a digital presence that not only attracts potential clients but also nurtures existing relationships.</p>",
        link: "https://sphenyx.netlify.app",
        github: "",
        is_active: true,
        created_at: "2024-01-22T17:47:25.626770Z",
        modified_at: "2024-01-22T17:47:25.626770Z"
    },
    {
        id: 4,
        tags: [
            {
                id: 10,
                name: "web development",
                slug: "web-development"
            },
            {
                id: 15,
                name: "web redesign",
                slug: "web-redesign"
            },
            {
                id: 16,
                name: "WordPress",
                slug: "wordpress"
            },
            {
                id: 17,
                name: "catalog",
                slug: "catalog"
            },
            {
                id: 18,
                name: "hospital equipment",
                slug: "hospital-equipment"
            },
            {
                id: 19,
                name: "user-friendly",
                slug: "user-friendly"
            },
            {
                id: 20,
                name: "custom theme",
                slug: "custom-theme"
            },
            {
                id: 21,
                name: "customer service",
                slug: "customer-service"
            }
        ],
        services: [
            {
                id: 2,
                name: "Web",
                slug: "web",
                is_active: true
            }
        ],
        technologies: [
            {
                id: 2,
                name: "HTML5",
                slug: "html5"
            },
            {
                id: 4,
                name: "CSS3",
                slug: "css3"
            },
            {
                id: 5,
                name: "jQuery",
                slug: "jquery"
            },
            {
                id: 6,
                name: "JavaScript",
                slug: "javascript"
            },
            {
                id: 9,
                name: "PHP",
                slug: "php"
            },
            {
                id: 11,
                name: "Tailwind CSS",
                slug: "tailwind-css"
            },
            {
                id: 12,
                name: "WordPress",
                slug: "wordpress"
            },
            {
                id: 13,
                name: "Woocommerce",
                slug: "woocommerce"
            }
        ],
        features: [
            {
                id: 2,
                web_id: "03c8b00f-8522-47d3-8a9e-42bd9cc4e812",
                feature: "Efficient information architecture"
            },
            {
                id: 6,
                web_id: "6e5a30a3-b161-4b7d-98b0-0b32bdbc407f",
                feature: "Error handling in form submissions"
            },
            {
                id: 10,
                web_id: "aa933cc8-546f-4bf2-8ba9-28a3a54c6610",
                feature: "Intuitive UI/UX for seamless navigation"
            },
            {
                id: 13,
                web_id: "dedc2f73-880b-40ad-acef-70a2800aa69a",
                feature: "Custom WordPress theme design"
            },
            {
                id: 14,
                web_id: "a255adc6-7ef1-4bdc-914f-58f10f03d474",
                feature: "Catalog showcasing hospital equipment"
            }
        ],
        images: [
            {
                id: 4,
                image_url: "/assets/images/portfolio/capital-stallion.jpg",
                web_id: "41f59dcc-2405-4dc0-9928-4e295faca01b",
                alt: "capital stallion",
                image: "/assets/images/portfolio/capital-stallion.jpg",
                is_feature: true,
                project: 4
            }
        ],
        name: "Capital Stallion",
        slug: "capital-stallion",
        excerpt: "Redesign For A Cataglossless WordPress Solution",
        case_study: "<p>Capital Stallion, previously operating under <a href='https://www.oriensmedical.com' target='_blank' style='color:dodgerblue;'>Oriens Medical</a>, sought a website overhaul for their hospital equipment manufacturing and distribution business.</p><p> The challenge was to maintain and extend existing functionalities while improving design and usability. Our solution involved crafting a cataglossless custom WordPress theme. The catalog section elegantly showcases their diverse range of hospital equipment. The 'About Us' and company history sections provide insights into their background. Certifications and client reviews instill trust and credibility. </p><p> Specific forms, including a quotation request form, a tour booking form for manufacturing plants, and a customer service inquiry form, enhance user engagement and streamline communication. The result is a well-designed, user-friendly website that not only preserves but also elevates the functionality of Capital Stallion's online presence.</p>",
        link: "http://capitalorthoindia.com",
        github: "",
        is_active: true,
        created_at: "2024-01-22T17:55:43.403770Z",
        modified_at: "2024-01-22T17:55:43.403770Z"
    },
    {
    id: 5,
    tags: [
        {
            id: 19,
            name: "user-friendly",
            slug: "user-friendly"
        },
        {
            id: 22,
            name: "online booking",
            slug: "online-booking"
        },
        {
            id: 23,
            name: "travel agency",
            slug: "travel-agency"
        },
        {
            id: 24,
            name: "lodging",
            slug: "lodging"
        },
        {
            id: 25,
            name: "budget customization",
            slug: "budget-customization"
        },
        {
            id: 26,
            name: "secure payment",
            slug: "secure-payment"
        }
    ],
    services: [
        {
            id: 2,
            name: "Web",
            slug: "web",
            is_active: true
        }
    ],
    technologies: [
        {
            id: 2,
            name: "HTML5",
            slug: "html5"
        },
        {
            id: 4,
            name: "CSS3",
            slug: "css3"
        },
        {
            id: 6,
            name: "JavaScript",
            slug: "javascript"
        },
        {
            id: 7,
            name: "React.js",
            slug: "reactjs"
        },
        {
            id: 11,
            name: "Tailwind CSS",
            slug: "tailwind-css"
        },
        {
            id: 14,
            name: "Node.js",
            slug: "nodejs"
        }
    ],
    features: [
        {
            id: 2,
            web_id: "03c8b00f-8522-47d3-8a9e-42bd9cc4e812",
            feature: "Efficient information architecture"
        },
        {
            id: 4,
            web_id: "ca5a1ff5-3fee-47b6-a7fe-8b3ffab4d6b8",
            feature: "CSS for enhanced styling and responsiveness"
        },
        {
            id: 10,
            web_id: "aa933cc8-546f-4bf2-8ba9-28a3a54c6610",
            feature: "Intuitive UI/UX for seamless navigation"
        },
        {
            id: 15,
            web_id: "d3a7788b-abc4-4ca6-8fbe-c473dc518f52",
            feature: "Real-time availability updates"
        },
        {
            id: 16,
            web_id: "9a6bc036-5d40-448a-95c5-0bfae78e974e",
            feature: "Secure and efficient payment system"
        }
    ],
    "images": [
        {
            id: 5,
            image_url: "/assets/images/portfolio/sphene-reserves.jpg",
            web_id: "37eedb15-0855-4850-8ed2-becf8dc557f0",
            alt: "sphene reserves",
            image: "/assets/images/portfolio/sphene-reserves.jpg",
            is_feature: true,
            project: 5
        }
    ],
    name: "Sphene Reserves",
    slug: "sphene-reserves",
    excerpt: "Seamless Online Booking for pre-trip accomodations",
    case_study: "<p>Sphene Reserves aimed to revolutionize travel planning by providing a hassle-free platform for clients to secure lodging in advance. Our solution delivered a user-friendly online booking system with an extensive array of lodging options, allowing travelers to align their accommodation with budget and preferences seamlessly.</p><p>The integration of a secure payment system ensures a smooth transaction process. Real-time availability updates and instant booking confirmations enhance the user experience.</p><p> User profiles offer a personalized touch, allowing clients to track detailed booking history and tailor future experiences. Responsive customer support further ensures a reliable and enjoyable pre-trip experience, solidifying Sphene Reserves as the go-to choice for convenient lodging bookings.</p>",
    link: "https://sphenereserves.netlify.app",
    github: "https://github.com/Nate-Soul/sphene-reserves",
    is_active: true,
    created_at: "2024-01-24T19:37:11.606240Z",
    modified_at: "2024-01-24T19:37:11.606240Z"
    },
    {
        id: 6,
        tags: [
            {
                id: 19,
                name: "user-friendly",
                slug: "user-friendly"
            },
            {
                id: 26,
                name: "secure payment",
                slug: "secure-payment"
            },
            {
                id: 27,
                name: "online food ordering",
                slug: "online-food-ordering"
            },
            {
                id: 28,
                name: "real time tracking",
                slug: "real-time-tracking"
            },
            {
                id: 29,
                name: "delivery options",
                slug: "delivery-options"
            }
        ],
        services: [
            {
                id: 2,
                name: "Web",
                slug: "web",
                is_active: true
            }
        ],
        technologies: [
            {
                id: 2,
                name: "HTML5",
                slug: "html5"
            },
            {
                id: 4,
                name: "CSS3",
                slug: "css3"
            },
            {
                id: 7,
                name: "React.js",
                slug: "reactjs"
            },
            {
                id: 8,
                name: "Next.js",
                slug: "nextjs"
            },
            {
                id: 11,
                name: "Tailwind CSS",
                slug: "tailwind-css"
            },
            {
                id: 16,
                name: "Strapi CMS",
                slug: "strapi-cms"
            }
        ],
        features: [
            {
                id: 2,
                web_id: "03c8b00f-8522-47d3-8a9e-42bd9cc4e812",
                feature: "Efficient information architecture"
            },
            {
                id: 4,
                web_id: "ca5a1ff5-3fee-47b6-a7fe-8b3ffab4d6b8",
                feature: "CSS for enhanced styling and responsiveness"
            },
            {
                id: 10,
                web_id: "aa933cc8-546f-4bf2-8ba9-28a3a54c6610",
                feature: "Intuitive UI/UX for seamless navigation"
            },
            {
                id: 16,
                web_id: "9a6bc036-5d40-448a-95c5-0bfae78e974e",
                feature: "Secure and efficient payment system"
            },
            {
                id: 17,
                web_id: "5c27f4f1-db08-4cf9-9682-99c1fa531cc7",
                feature: "Real-time order tracking"
            },
            {
                id: 18,
                web_id: "31f70df4-970d-4d9c-bf53-d47e1dee020a",
                feature: "User accounts for personalized experiences"
            }
        ],
        "images": [
            {
                id: 6,
                image_url: "/assets/images/portfolio/sphene-qwizines.jpg",
                web_id: "73c91984-fad6-4855-a3f5-cfaa96f749e5",
                alt: "sphene qwizines website mockup",
                image: "/assets/images/portfolio/sphene-qwizines.jpg",
                is_feature: true,
                project: 6
            }
        ],
        name: "Sphene Qwizines",
        slug: "sphene-qwizines",
        excerpt: "Seamless online food ordering and efficient delivery system",
        case_study: "<p>Sphene Qwizines aimed to connect Nigerian food enthusiasts worldwide with authentic cuisines from the comfort of their homes. The solution involved creating an intuitive and user-friendly online food ordering system.</p><p>Users can explore a diverse selection of authentic Nigerian cuisines, placing orders with global accessibility. Efficient delivery options were prioritized to bridge the gap between enthusiasts and their favorite dishes. Secure payment processing and real-time order tracking enhance the user experience.</p><p>User accounts were implemented for personalized interactions, ensuring a seamless journey from order placement to delivery. Sphene Qwizines now stands as a platform that not only celebrates Nigerian cuisines but also provides a convenient and accessible way for people worldwide to enjoy them.</p>",
        link: "https://sphene-qwizines.vercel.app",
        github: "https://github.com/Nate-Soul/sphene-qwizines-fe",
        is_active: true,
        created_at: "2024-01-24T20:25:40.088211Z",
        modified_at: "2024-01-24T20:25:40.088211Z"
    },
    {
        "id": 7,
        "tags": [
            {
                "id": 2,
                "name": "Learning Management System",
                "slug": "learning-management-system"
            },
            {
                "id": 7,
                "name": "user interface",
                "slug": "user-interface"
            },
            {
                "id": 15,
                "name": "web redesign",
                "slug": "web-redesign"
            },
            {
                "id": 19,
                "name": "user-friendly",
                "slug": "user-friendly"
            }
        ],
        "services": [
            {
                "id": 2,
                "name": "Web",
                "slug": "web",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 2,
                "name": "HTML5",
                "slug": "html5"
            },
            {
                "id": 4,
                "name": "CSS3",
                "slug": "css3"
            },
            {
                "id": 6,
                "name": "JavaScript",
                "slug": "javascript"
            },
            {
                "id": 9,
                "name": "PHP",
                "slug": "php"
            },
            {
                "id": 10,
                "name": "Bootstrap 5",
                "slug": "bootstrap-5"
            }
        ],
        "features": [
            {
                "id": 2,
                "web_id": "03c8b00f-8522-47d3-8a9e-42bd9cc4e812",
                "feature": "Efficient information architecture"
            },
            {
                "id": 3,
                "web_id": "40703a05-06b4-427b-9fb4-7c7442c3ebe4",
                "feature": "Intuitive user interface using Bootstrap 5"
            },
            {
                "id": 4,
                "web_id": "ca5a1ff5-3fee-47b6-a7fe-8b3ffab4d6b8",
                "feature": "CSS for enhanced styling and responsiveness"
            },
            {
                "id": 5,
                "web_id": "77c5776e-5bb2-4029-a5b6-a279c5896d3f",
                "feature": "JavaScript-powered contact form"
            },
            {
                "id": 6,
                "web_id": "6e5a30a3-b161-4b7d-98b0-0b32bdbc407f",
                "feature": "Error handling in form submissions"
            },
            {
                "id": 7,
                "web_id": "4cf4ecfb-cbcd-4a02-ba58-9d1f6771225e",
                "feature": "Email functionality for seamless communication"
            },
            {
                "id": 8,
                "web_id": "9c068cea-a538-46e2-8e92-42516df3302f",
                "feature": "Customized accordion, modals, navigation bar, etc."
            },
            {
                "id": 10,
                "web_id": "aa933cc8-546f-4bf2-8ba9-28a3a54c6610",
                "feature": "Intuitive UI/UX for seamless navigation"
            }
        ],
        "images": [
            {
                "id": 7,
                "image_url": "/assets/images/portfolio/blazeskills-core.jpg",
                "web_id": "89c68c1a-e69f-4332-b286-b056ec5ffa24",
                "alt": "blazeskill core website mockup",
                "image": "/assets/images/portfolio/blazeskills-core.jpg",
                "is_feature": true,
                "project": 7
            },
            {
                "id": 8,
                "image_url": "/assets/images/portfolio/blazeskills-learning.jpg",
                "web_id": "74c0c900-8a58-45b4-8426-585ec346784f",
                "alt": "blazeskills trainings mockup",
                "image": "/assets/images/portfolio/blazeskills-learning.jpg",
                "is_feature": false,
                "project": 7
            }
        ],
        "name": "BlazeSKills Inc",
        "slug": "blazeskills-inc",
        "excerpt": "Revamped Brochure and Training Websites For BlazeSkills Inc",
        "case_study": "<p>Blazeskills Inc, a global IT leader, entrusted us with revamping both their brochure website (www.blazeskills.com) and their training website (trainings.blazeskills.com). Our approach involved a comprehensive analysis using industry-approved tools, which served as reference points for optimization.</p><p>Semantics, overall site structure, and on-page SEO were enhanced to elevate their online presence. Aligning with brand guidelines, we corrected color combinations and fonts usage, ensuring a cohesive visual identity. The result is user-friendly, mobile-responsive websites that not only showcase Blazeskills Inc's IT prowess but also provide an enhanced experience for visitors.</p>",
        "link": "https://blazeskills.com",
        "github": null,
        "is_active": true,
        "created_at": "2024-01-24T20:30:28.007211Z",
        "modified_at": "2024-01-24T20:30:28.008208Z"
    },
    {
        "id": 8,
        "tags": [
            {
                "id": 13,
                "name": "brand identity",
                "slug": "brand-identity"
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Brand",
                "slug": "brand",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 17,
                "name": "Corel Draw",
                "slug": "corel-draw"
            },
            {
                "id": 18,
                "name": "PhotoShop",
                "slug": "photoshop"
            }
        ],
        "features": [
            {
                "id": 19,
                "web_id": "e4ce596b-ca46-4a5b-81cc-510b984ccf8d",
                "feature": "Strategic name development"
            },
            {
                "id": 20,
                "web_id": "7658b8e8-f1a6-4351-aaeb-349ff50de71a",
                "feature": "Distinctive brand colors and palettes"
            },
            {
                "id": 21,
                "web_id": "136d2b48-9c76-4ea4-9286-a8edfb92b841",
                "feature": "Typography guidelines for a consistent look"
            },
            {
                "id": 22,
                "web_id": "92e23ec9-460d-4a47-a09a-941b2e1ed89e",
                "feature": "Logo design reflecting quality and uniqueness"
            },
            {
                "id": 23,
                "web_id": "3923ebff-0cb5-4c25-9b2a-922ac0a55bef",
                "feature": "Brand guidelines for cohesive visual communication"
            },
            {
                "id": 24,
                "web_id": "5bbfa3ea-9d6c-4242-8c7a-fe3c8cccc89c",
                "feature": "Customized assets to set brand apart"
            }
        ],
        "images": [
            {
                "id": 9,
                "image_url": "/assets/images/portfolio/quetas-couture-business-cards.jpg",
                "web_id": "d8e126c9-4b27-4d77-917d-84e5c1a66ac9",
                "alt": "quetas coututre business card mockup",
                "image": "/assets/images/portfolio/quetas-couture-business-cards.jpg",
                "is_feature": true,
                "project": 8
            },
            {
                "id": 10,
                "image_url": "/assets/images/portfolio/quetas-couture-logo-design.jpg",
                "web_id": "d8e126c9-4b27-4d77-917d-84e5c1a66ac9",
                "alt": "quetas coututre logo presentation",
                "image": "/assets/images/portfolio/quetas-couture-logo-design.jpg",
                "is_feature": false,
                "project": 8
            },
        ],
        "name": "Quetas Couture",
        "slug": "quetas-couture",
        "excerpt": "A unique brand identity reflecting quality and superiority",
        "case_study": "<p>Quetas Couture, a fashion house committed to quality and superiority, sought a brand identity that truly embodied these values. The solution involved strategic name development, resulting in 'Quetas Couture,' a name that resonates with sophistication.</p><p>Distinctive brand colors and palettes were carefully selected to convey a sense of uniqueness and excellence. Typography guidelines were established for a consistent and cohesive visual identity. The logo, meticulously designed, reflects the brand's commitment to quality and stands out in the competitive fashion landscape.</p><p>Comprehensive brand guidelines were created, ensuring a unified and impactful visual communication strategy. Customized assets further set Quetas Couture apart, creating a brand identity that not only aligns with their values but also establishes a memorable and distinguished presence.</p>",
        "link": null,
        "github": null,
        "is_active": true,
        "created_at": "2024-01-24T20:36:39.550212Z",
        "modified_at": "2024-01-24T20:36:39.550212Z"
    },
    {
        "id": 9,
        "tags": [
            {
                "id": 30,
                "name": "brand transformation",
                "slug": "brand-transformation"
            },
            {
                "id": 31,
                "name": "logo design",
                "slug": "logo-design"
            },
            {
                "id": 32,
                "name": "brand strategy",
                "slug": "brand-strategy"
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Brand",
                "slug": "brand",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 18,
                "name": "PhotoShop",
                "slug": "photoshop"
            },
            {
                "id": 19,
                "name": "Adobe Illustrator",
                "slug": "adobe-illustrator"
            }
        ],
        "features": [
            {
                "id": 20,
                "web_id": "7658b8e8-f1a6-4351-aaeb-349ff50de71a",
                "feature": "Distinctive brand colors and palettes"
            },
            {
                "id": 21,
                "web_id": "136d2b48-9c76-4ea4-9286-a8edfb92b841",
                "feature": "Typography guidelines for a consistent look"
            },
            {
                "id": 22,
                "web_id": "92e23ec9-460d-4a47-a09a-941b2e1ed89e",
                "feature": "Logo design reflecting quality and uniqueness"
            },
            {
                "id": 23,
                "web_id": "3923ebff-0cb5-4c25-9b2a-922ac0a55bef",
                "feature": "Brand guidelines for cohesive visual communication"
            },
            {
                "id": 24,
                "web_id": "5bbfa3ea-9d6c-4242-8c7a-fe3c8cccc89c",
                "feature": "Customized assets to set brand apart"
            }
        ],
        "images": [
            {
                "id": 10,
                "image_url": "/assets/images/portfolio/optimum-seab-logo-design.jpg",
                "web_id": "2b03e21e-1a97-4366-affa-864232242e86",
                "alt": "optimum seab business card mockup",
                "image": "/assets/images/portfolio/optimum-seab-logo-design.jpg",
                "is_feature": true,
                "project": 9
            }
        ],
        "name": "Optimum Seab",
        "slug": "optimum-seab",
        "excerpt": "Brand identity design for petroleum marketing company",
        "case_study": "<p>Optimum Seab, an independent distributor of petroleum products, recognized the need for a brand transformation to better align with their services, mission, and vision. The solution involved a comprehensive realignment of their brand strategy.</p><p>The mission and vision statements were refined to articulate their core values effectively. Through a detailed analysis of their target audience, a distinctive logo design was crafted to resonate with the petroleum industry.</p><p>Revised brand colors and visual elements were introduced for a more cohesive and impactful brand presence. Consistency in brand messaging across various platforms was emphasized to build a strong brand identity.</p><p>The redesign extended to marketing collateral, ensuring a unified and compelling representation. The result is an Optimum Seab brand that not only reflects their core values but also resonates effectively with their target audience.</p>",
        "link": "https://drive.google.com/drive/folders/1GZZAgkBW9AuEXjUslezMflGdvnvXO7EX",
        "github": null,
        "is_active": true,
        "created_at": "2024-01-24T20:41:37.071206Z",
        "modified_at": "2024-01-24T20:41:37.071206Z"
    },
    {
        "id": 10,
        "tags": [
            {
                "id": 30,
                "name": "brand transformation",
                "slug": "brand-transformation"
            },
            {
                "id": 31,
                "name": "logo design",
                "slug": "logo-design"
            },
            {
                "id": 32,
                "name": "brand strategy",
                "slug": "brand-strategy"
            }
        ],
        "services": [
            {
                "id": 1,
                "name": "Brand",
                "slug": "brand",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 17,
                "name": "Corel Draw",
                "slug": "corel-draw"
            },
            {
                "id": 18,
                "name": "PhotoShop",
                "slug": "photoshop"
            }
        ],
        "features": [
            {
                "id": 20,
                "web_id": "7658b8e8-f1a6-4351-aaeb-349ff50de71a",
                "feature": "Distinctive brand colors and palettes"
            },
            {
                "id": 21,
                "web_id": "136d2b48-9c76-4ea4-9286-a8edfb92b841",
                "feature": "Typography guidelines for a consistent look"
            },
            {
                "id": 22,
                "web_id": "92e23ec9-460d-4a47-a09a-941b2e1ed89e",
                "feature": "Logo design reflecting quality and uniqueness"
            },
            {
                "id": 23,
                "web_id": "3923ebff-0cb5-4c25-9b2a-922ac0a55bef",
                "feature": "Brand guidelines for cohesive visual communication"
            },
            {
                "id": 24,
                "web_id": "5bbfa3ea-9d6c-4242-8c7a-fe3c8cccc89c",
                "feature": "Customized assets to set brand apart"
            }
        ],
        "images": [
            {
                "id": 11,
                "image_url": "/assets/images/portfolio/metro-cleaning-agency.jpg",
                "web_id": "a023555b-272e-4a1b-a152-ae9a7c0429aa",
                "alt": "metro cleaning agency logo illustration",
                "image": "/assets/images/portfolio/metro-cleaning-agency.jpg",
                "is_feature": true,
                "project": 10
            }
        ],
        "name": "Metro Cleaning Agency",
        "slug": "metro-cleaning-agency",
        "excerpt": "Eco-Friendly brand identity for professional cleaning agency",
        "case_study": "<p>Metro Cleaning Agency, known for their diverse cleaning solutions, sought a brand identity that spoke their language and emphasized their commitment to excellence. The solution involved integrating actual cleaning tools into the brand identity, creating a distinctive logo that reflects cleanliness and efficiency.</p><p>An eco-friendly color palette and design elements were carefully selected to align with their values. Custom typography was crafted for a unique and recognizable look. Brand messaging highlighted their wide range of cleaning solutions, establishing a strong identity in the cleaning industry.</p><p>Consistency in visual identity across platforms ensured a cohesive and memorable brand presence. The incorporation of eco-friendly values further sets Metro Cleaning Agency apart, solidifying their commitment to sustainable practices.</p>",
        "link": null,
        "github": null,
        "is_active": true,
        "created_at": "2024-01-24T20:43:38.224207Z",
        "modified_at": "2024-01-24T20:43:38.225208Z"
    }
]