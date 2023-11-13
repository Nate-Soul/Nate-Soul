import Image from "next/image";
import Link from "next/link";

const WorksSection = () => {
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
      </div>
    </section>
  )
}

export default WorksSection
