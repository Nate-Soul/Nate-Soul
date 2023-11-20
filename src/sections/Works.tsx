import Image from "next/image";
import Link from "next/link";

const WorksSection = () => {

  const projects = [
    {
      id: 1,
      name: "Le' Bronyx",
      slug: "le-bronyx",
      excerpt: "Minimal & clean design for project one and two excluding three",
      link: {
        live_preview: "https://Le'bronyx.netlify.app",
        github_repo: "https://github.com/le-bronyx-project",
      },
      category: "Luxury",
      featured_image: "/assets/images/portfolio/boot5.jpg"
    },
    {
      id: 2,
      name: "Capital Stallion",
      slug: "capital-stallion",
      excerpt: "Catalogless wordpress website for health equipment manufacturer & supplier.",
      link: {
        live_preview: "http://capitalorthoindia.com",
        github_repo: "",
      },
      category: "Health Care",
      featured_image: "/assets/images/portfolio/capital-stallion.jpg"
    },
  ];

  return (
    <section id="works" className="section py-16">
      <div className="container">
        <header className="mb-8 text-center">
          <h2 className="text-4xl font-bold leading-snug capitalize">
            <span className="uppercase text-sm text-main-500">
              My Projects
            </span> <br />
            Featured Case Studies
          </h2>
        </header>
        <div className="container grid grid-cols-12 gap-2">
          {
            projects.length > 0 && projects.map((project) => (
              <figure className="col-span-4 rounded-xl relative overflow-hidden" key={project.id}>
                <Image src={project.featured_image} alt={project.name} width={800} height={600} priority/>
                <figcaption 
                  className="flex flex-col gap-2 absolute bottom-0 left-0 h-3/5 bg-main-500 text-white bg-opacity-80 p-3 overflow-auto hide-scrollbar">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p>{project.excerpt}</p>
                  <div className="flex gap-3 items-center">
                    <Link href={project.link.live_preview} className="bi-eye"></Link>
                    <Link href={project.link.github_repo} className="bi-github"></Link>
                    <Link href={`project/${project.slug}`} className="bi-plus-circle"></Link>
                  </div>
                </figcaption>
              </figure>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorksSection
