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

export const projectData: projectsType[] = [
    {
        "id": 1,
        "tags": [
            {
                "id": 1,
                "name": "LMS",
                "slug": "lms"
            },
            {
                "id": 2,
                "name": "Landing page",
                "slug": "landing"
            },
            {
                "id": 3,
                "name": "user interface",
                "slug": "user-interface"
            }
        ],
        "categories": [
            {
                "id": 1,
                "name": "Education",
                "slug": "education",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 1,
                "name": "Bootstrap 5",
                "slug": "bootstrap-5",
                "icon": "http://127.0.0.1:8000/media/images/technologies/bootstrap.svg"
            },
            {
                "id": 2,
                "name": "HTML5",
                "slug": "html5",
                "icon": "http://127.0.0.1:8000/media/images/technologies/html5.svg"
            },
            {
                "id": 3,
                "name": "CSS3",
                "slug": "css3",
                "icon": "http://127.0.0.1:8000/media/images/technologies/css3.svg"
            },
            {
                "id": 4,
                "name": "JavaScript",
                "slug": "javascript",
                "icon": "http://127.0.0.1:8000/media/images/technologies/javascript.svg"
            }
        ],
        "services": [
            {
                "id": 1,
                "icon_url": "http://127.0.0.1:8000/media/images/services/web-design_7LOt6HC.png",
                "name": "Front-end Development",
                "slug": "front-end-development",
                "desc": "I build captivating and stunning user friendly websites and apps that engage audiences and boost conversions.",
                "icon": "http://127.0.0.1:8000/media/images/services/web-design_7LOt6HC.png",
                "icon_alt": "responsive web design + frontend development illustration",
                "priority": 1,
                "is_active": true,
                "created_at": "2024-01-28T08:14:37.268485Z",
                "modified_at": "2024-01-29T14:32:46.352296Z"
            },
            {
                "id": 4,
                "icon_url": "http://127.0.0.1:8000/media/images/services/speed-radar.png",
                "name": "Speed Audit & Optimization",
                "slug": "speed-audit-optimization",
                "desc": "I eliminate bottlenecks from website bottlenecks and deliver lightning-fast experiences that keeps users engaged.",
                "icon": "http://127.0.0.1:8000/media/images/services/speed-radar.png",
                "icon_alt": "peed radar indicating optimum speed for websites",
                "priority": 4,
                "is_active": true,
                "created_at": "2024-01-29T14:38:14.380667Z",
                "modified_at": "2024-01-29T14:38:14.381661Z"
            }
        ],
        "features": [
            {
                "id": 1,
                "web_id": "fcf92356-58d1-4d87-b14d-595e4dc0643a",
                "feature": "Error handling in form submissions"
            },
            {
                "id": 2,
                "web_id": "dc55a7d7-5dcb-4074-a9e1-4631a16c883e",
                "feature": "Efficient information architecture"
            },
            {
                "id": 3,
                "web_id": "5e47ce88-688a-44e6-940e-d6cd45676333",
                "feature": "Intuitive user interface"
            },
            {
                "id": 4,
                "web_id": "712f4bf2-b152-4f3a-b858-472f273cadad",
                "feature": "Email functionality for seamless communication"
            },
            {
                "id": 5,
                "web_id": "686fbe7a-5ec8-4118-81a8-de9008a68cda",
                "feature": "Customized accordion, modals, mobile menu, etc."
            }
        ],
        "images": [
            {
                "id": 1,
                "image_url": "http://127.0.0.1:8000/media/images/portfolio/boot5.jpg",
                "web_id": "f0c29c2f-f057-4572-aac3-448a31ebf043",
                "alt": "another alternative text",
                "image": "http://127.0.0.1:8000/media/images/portfolio/boot5.jpg",
                "is_feature": true,
                "project": 1
            }
        ],
        "name": "Boot 5",
        "slug": "boot-5",
        "excerpt": "Modern Landing Page UI for a learning management system",
        "case_study": "<p>Boot5, a modern landing page for a learning management system, was a hobby project with a focus on efficient information architecture and an intuitive user interface. Bootstrap 5 and CSS were leveraged to create a sleek and responsive design.</p> <p>The integration of JavaScript powered the contact form, providing error handling for form submissions and seamless email functionality. The result is a modern and user-friendly landing page that not only showcases the capabilities of Bootstrap 5 but also ensures a smooth and interactive experience for visitors.</p>",
        "link": "https://boot-5.netlify.app",
        "github": "https://github.com/Nate-Soul/boot5",
        "type": "side",
        "status": "completed",
        "is_active": true,
        "priority": 10,
        "created_at": "2024-01-28T08:20:59.970478Z",
        "modified_at": "2024-01-29T15:50:56.904979Z"
    },
    {
        "id": 2,
        "tags": [
            {
                "id": 2,
                "name": "Landing page",
                "slug": "landing"
            },
            {
                "id": 3,
                "name": "user interface",
                "slug": "user-interface"
            }
        ],
        "categories": [
            {
                "id": 2,
                "name": "Business",
                "slug": "business",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 1,
                "name": "Bootstrap 5",
                "slug": "bootstrap-5",
                "icon": "http://127.0.0.1:8000/media/images/technologies/bootstrap.svg"
            },
            {
                "id": 2,
                "name": "HTML5",
                "slug": "html5",
                "icon": "http://127.0.0.1:8000/media/images/technologies/html5.svg"
            },
            {
                "id": 3,
                "name": "CSS3",
                "slug": "css3",
                "icon": "http://127.0.0.1:8000/media/images/technologies/css3.svg"
            },
            {
                "id": 4,
                "name": "JavaScript",
                "slug": "javascript",
                "icon": "http://127.0.0.1:8000/media/images/technologies/javascript.svg"
            },
            {
                "id": 5,
                "name": "jQuery",
                "slug": "jquery",
                "icon": "http://127.0.0.1:8000/media/images/technologies/jquery.svg"
            },
            {
                "id": 6,
                "name": "PHP",
                "slug": "php",
                "icon": "http://127.0.0.1:8000/media/images/technologies/php3-svgrepo-com.svg"
            }
        ],
        "services": [
            {
                "id": 1,
                "icon_url": "http://127.0.0.1:8000/media/images/services/web-design_7LOt6HC.png",
                "name": "Front-end Development",
                "slug": "front-end-development",
                "desc": "I build captivating and stunning user friendly websites and apps that engage audiences and boost conversions.",
                "icon": "http://127.0.0.1:8000/media/images/services/web-design_7LOt6HC.png",
                "icon_alt": "responsive web design + frontend development illustration",
                "priority": 1,
                "is_active": true,
                "created_at": "2024-01-28T08:14:37.268485Z",
                "modified_at": "2024-01-29T14:32:46.352296Z"
            },
            {
                "id": 3,
                "icon_url": "http://127.0.0.1:8000/media/images/services/seo-content-marketing_VGr84KQ.png",
                "name": "On-Page Search Engine Optimization",
                "slug": "on-page-search-engine-optimization",
                "desc": "Climb search rankings and attract organic traffic through strategic keyword targeting and content optimization.",
                "icon": "http://127.0.0.1:8000/media/images/services/seo-content-marketing_VGr84KQ.png",
                "icon_alt": "content marketing + SEO + sales funnel illustration",
                "priority": 3,
                "is_active": true,
                "created_at": "2024-01-29T14:36:12.390987Z",
                "modified_at": "2024-01-29T14:36:12.390987Z"
            },
            {
                "id": 4,
                "icon_url": "http://127.0.0.1:8000/media/images/services/speed-radar.png",
                "name": "Speed Audit & Optimization",
                "slug": "speed-audit-optimization",
                "desc": "I eliminate bottlenecks from website bottlenecks and deliver lightning-fast experiences that keeps users engaged.",
                "icon": "http://127.0.0.1:8000/media/images/services/speed-radar.png",
                "icon_alt": "peed radar indicating optimum speed for websites",
                "priority": 4,
                "is_active": true,
                "created_at": "2024-01-29T14:38:14.380667Z",
                "modified_at": "2024-01-29T14:38:14.381661Z"
            },
            {
                "id": 5,
                "icon_url": "http://127.0.0.1:8000/media/images/services/accessibility.png",
                "name": "Accessibility Audit & Optimization",
                "slug": "accessibility-audit-optimization",
                "desc": "I ensure everyone enjoys your website, regardless of ability, with inclusive design and development practices.",
                "icon": "http://127.0.0.1:8000/media/images/services/accessibility.png",
                "icon_alt": "Accessibility for websites",
                "priority": 5,
                "is_active": true,
                "created_at": "2024-01-29T14:39:20.238224Z",
                "modified_at": "2024-01-29T14:39:20.238224Z"
            }
        ],
        "features": [
            {
                "id": 1,
                "web_id": "fcf92356-58d1-4d87-b14d-595e4dc0643a",
                "feature": "Error handling in form submissions"
            },
            {
                "id": 2,
                "web_id": "dc55a7d7-5dcb-4074-a9e1-4631a16c883e",
                "feature": "Efficient information architecture"
            },
            {
                "id": 3,
                "web_id": "5e47ce88-688a-44e6-940e-d6cd45676333",
                "feature": "Intuitive user interface"
            },
            {
                "id": 4,
                "web_id": "712f4bf2-b152-4f3a-b858-472f273cadad",
                "feature": "Email functionality for seamless communication"
            },
            {
                "id": 5,
                "web_id": "686fbe7a-5ec8-4118-81a8-de9008a68cda",
                "feature": "Customized accordion, modals, mobile menu, etc."
            }
        ],
        "images": [
            {
                "id": 2,
                "image_url": "http://127.0.0.1:8000/media/images/portfolio/default.jpg",
                "web_id": "d7c45b9c-dbba-4df8-aa98-ec8e70b4f07c",
                "alt": "sphenyx digitals",
                "image": "http://127.0.0.1:8000/media/images/portfolio/default.jpg",
                "is_feature": true,
                "project": 2
            }
        ],
        "name": "Sphenyx Digitals",
        "slug": "sphenyx-digitals",
        "excerpt": "Sleek one page website for professional digital agency",
        "case_study": "<p>Sphenyx Digitals sought a digital hub that would not only reflect their diverse services but also align with their business goals. Our solution was a sleek, one-page website offering a seamless user experience.</p><p>The dynamic portfolio section beautifully showcases their work through featured case studies, providing potential clients with a comprehensive view of their capabilities. Transparent pricing for each service ensures clarity, and our integrated secure payment system streamlines the client's journey from exploration to transaction.</p><p> The storytelling section humanizes the brand, offering insights into Sphenyx Digitals' journey and values. The team showcase and client success stories provide social proof, building trust with visitors. The efficient contact form serves as a direct channel for client inquiries, facilitating seamless communication. The result is a digital presence that not only attracts potential clients but also nurtures existing relationships.</p>",
        "link": "https://sphenyx.netlify.app",
        "github": null,
        "type": "client",
        "status": "completed",
        "is_active": true,
        "priority": 9,
        "created_at": "2024-01-29T16:14:42.780313Z",
        "modified_at": "2024-01-29T16:14:42.780313Z"
    },
    {
        "id": 3,
        "tags": [
            {
                "id": 3,
                "name": "user interface",
                "slug": "user-interface"
            },
            {
                "id": 4,
                "name": "custom theme",
                "slug": "custom-theme"
            }
        ],
        "categories": [
            {
                "id": 3,
                "name": "Health & Wellness",
                "slug": "health-wellness",
                "is_active": true
            }
        ],
        "technologies": [
            {
                "id": 4,
                "name": "JavaScript",
                "slug": "javascript",
                "icon": "http://127.0.0.1:8000/media/images/technologies/javascript.svg"
            },
            {
                "id": 5,
                "name": "jQuery",
                "slug": "jquery",
                "icon": "http://127.0.0.1:8000/media/images/technologies/jquery.svg"
            },
            {
                "id": 6,
                "name": "PHP",
                "slug": "php",
                "icon": "http://127.0.0.1:8000/media/images/technologies/php3-svgrepo-com.svg"
            }
        ],
        "services": [
            {
                "id": 1,
                "icon_url": "http://127.0.0.1:8000/media/images/services/web-design_7LOt6HC.png",
                "name": "Front-end Development",
                "slug": "front-end-development",
                "desc": "I build captivating and stunning user friendly websites and apps that engage audiences and boost conversions.",
                "icon": "http://127.0.0.1:8000/media/images/services/web-design_7LOt6HC.png",
                "icon_alt": "responsive web design + frontend development illustration",
                "priority": 1,
                "is_active": true,
                "created_at": "2024-01-28T08:14:37.268485Z",
                "modified_at": "2024-01-29T14:32:46.352296Z"
            },
            {
                "id": 2,
                "icon_url": "http://127.0.0.1:8000/media/images/services/backend.png",
                "name": "Backend Development + Database",
                "slug": "backend-development-database",
                "desc": "From robust web infrastructures to optimized schemas: I aim for smooth performance, scalability, and blazing-fast applications that are efficient.",
                "icon": "http://127.0.0.1:8000/media/images/services/backend.png",
                "icon_alt": "a backend system showing a database",
                "priority": 2,
                "is_active": true,
                "created_at": "2024-01-29T14:35:00.619990Z",
                "modified_at": "2024-01-29T14:35:00.619990Z"
            }
        ],
        "features": [
            {
                "id": 1,
                "web_id": "fcf92356-58d1-4d87-b14d-595e4dc0643a",
                "feature": "Error handling in form submissions"
            },
            {
                "id": 2,
                "web_id": "dc55a7d7-5dcb-4074-a9e1-4631a16c883e",
                "feature": "Efficient information architecture"
            },
            {
                "id": 3,
                "web_id": "5e47ce88-688a-44e6-940e-d6cd45676333",
                "feature": "Intuitive user interface"
            },
            {
                "id": 4,
                "web_id": "712f4bf2-b152-4f3a-b858-472f273cadad",
                "feature": "Email functionality for seamless communication"
            }
        ],
        "images": [
            {
                "id": 3,
                "image_url": "http://127.0.0.1:8000/media/images/portfolio/capital-stallion.jpg",
                "web_id": "24875771-92c6-4c5f-a52b-0d65d1139a51",
                "alt": "capital stallion",
                "image": "http://127.0.0.1:8000/media/images/portfolio/capital-stallion.jpg",
                "is_feature": true,
                "project": 3
            }
        ],
        "name": "Capital Stallion",
        "slug": "capital-stallion",
        "excerpt": "Redesign For A Cataglossless WordPress Solution",
        "case_study": "<p>Capital Stallion, previously operating under <a href='https://www.oriensmedical.com' target='_blank' style='color:dodgerblue;'>Oriens Medical</a>, sought a website overhaul for their hospital equipment manufacturing and distribution business.</p><p> The challenge was to maintain and extend existing functionalities while improving design and usability. Our solution involved crafting a cataglossless custom WordPress theme. The catalog section elegantly showcases their diverse range of hospital equipment. The 'About Us' and company history sections provide insights into their background. Certifications and client reviews instill trust and credibility. </p><p> Specific forms, including a quotation request form, a tour booking form for manufacturing plants, and a customer service inquiry form, enhance user engagement and streamline communication. The result is a well-designed, user-friendly website that not only preserves but also elevates the functionality of Capital Stallion's online presence.</p>",
        "link": "http://capitalorthoindia.com",
        "github": null,
        "type": "client",
        "status": "completed",
        "is_active": true,
        "priority": 5,
        "created_at": "2024-01-30T02:38:57.306974Z",
        "modified_at": "2024-01-30T02:38:57.306974Z"
    }
];