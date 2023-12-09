import CreativeProcessCard from "../subcomponents/CreativeProcessCard";

const CreativeProcess = () => {

  const processes = [
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

  return (
    <section id="creativeProcess" className="py-10">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-bold leading-snug capitalize">
          <span className="uppercase text-sm text-main-500">
            My Creative Process
          </span> <br />
          How I Put the pieces together
        </h2>
      </header>
      <div className="container grid grid-cols-12 gap-8">
        {processes.length > 0 && processes.map((process, processIndex) => (
          <CreativeProcessCard key={processIndex} process={process}/>
        ))}
      </div>
    </section>
  )
}

export default CreativeProcess
