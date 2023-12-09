import Link from "next/link";

import { Button } from "../ui/button";
import ProjectCard from "../subcomponents/ProjectCard";

const WorksSection = () => {

  const projects = [
    {
      id: 2,
      name: "Sphenyx Digitals",
      slug: "sphenyx-digitals",
      excerpt: "Minimal & clean design for project one and two excluding three",
      link: "https://sphenyx.netlify.app",
      github: "",
      category: "Corporate",
      tags: ["corporate website", "landing page", "digital agency", "one page website"],
      technologies: ["bootstrap5", "css3", "html5", "jQuery", "JavaScript"],
      featured_image: "/assets/images/portfolio/sphenyx.png"
    },
    {
      id: 4,
      name: "Sphene Reserves",
      slug: "sphene-reserves",
      excerpt: "Minimal & clean design for project one and two excluding three",
      link: "https://sphenereserves.netlify.app",
      github: "https://github.com/Nate-Soul/sphene-reserves.git",
      category: "Travel & Booking",
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
      category: "Online Food Restaurant",
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
      category: "Learning Management Portal",
      tags: ["LMS", "learning management portal", "online learning"],
      technologies: ["CSS3", "HTML5", "JavaScript", "PHP"],
      featured_image: "/assets/images/portfolio/blazeskills-learning.jpg"
    },
    {
      id: 1,
      name: "Boot5",
      slug: "boot-5",
      excerpt: "Minimal & clean design for project one and two excluding three",
      link: "https://boot5.netlify.app",
      github: "https://github.com/boot-5-project",
      category: "LMS",
      tags: ["learning management system", "landing page"],
      technologies: ["bootstrap5", "css3"],
      featured_image: "/assets/images/portfolio/boot5.jpg"
    },
    {
      id: 3,
      name: "Capital Stallion",
      slug: "capital-stallion",
      excerpt: "Minimal & clean design for project one and two excluding three",
      link: "http://capitalorthoindia.com",
      github: "",
      category: "E-Commerce",
      tags: ["catalogless e-commerce website", "brochure", "Tour booking",],
      technologies: ["Tailwind CSS", "CSS3", "HTML5", "jQuery", "JavaScript", "PHP", "Wordpress", "WooCommerce"],
      featured_image: "/assets/images/portfolio/capital-stallion.jpg"
    },
  ];

  return (
    <section id="works" className="py-0">
      <div className="max-w-[1560px] w-full mx-auto px-8">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold leading-snug capitalize mb-5">
            <span className="uppercase text-sm text-main-500">
              My Projects
            </span> <br />
            Featured Case Studies
          </h2>
          <Link href="/projects"><Button>View All Projects</Button></Link>
        </header>
        <div className="grid grid-cols-12 gap-x-4">
          {
            projects.length > 0 && projects.slice(0,3).map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorksSection
