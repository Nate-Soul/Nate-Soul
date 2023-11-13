import Image from "next/image";

const ServicesSection = () => {


  const services = [
    {
      id: 1,
      icon: "bi-dragon",
      name: "Frontend Development",
      text: "Crafting captivating digital experiences is not just a skill—it's an art. Elevate your online presence with seamless frontend web development and UX design. From intuitive interfaces to visually stunning layouts, I specialize in bringing your brand to life in the digital realm.",
    },
    {
      id: 2,
      icon: "bi-dragon",
      name: "Backend Development",
      text: "The backbone of every robust digital solution lies in its backend. Trust me to architect and develop the foundation that powers your applications. From database management to server-side scripting, I ensure a reliable and scalable backend for your digital ventures.",
    },
    {
      id: 3,
      icon: "bi-dragon",
      name: "On-Page Search Engine Optimization",
      text: "Unlock the full potential of your digital presence with strategic on-page SEO. I optimize every aspect of your content to ensure visibility and ranking on search engines. Let's make your website the go-to destination for your target audience.",
    },
    {
      id: 3,
      icon: "bi-dragon",
      name: "Accessibility & Speed Optimization",
      text: "In the digital landscape, speed and accessibility matter. I specialize in optimizing your website or application for lightning-fast performance and seamless accessibility. Reach a broader audience and enhance user satisfaction with a site that performs at its peak.",
    },
    {
      id: 4,
      icon: "bi-dragon",
      name: "Branding + Logo Design",
      text: "Your brand is more than just a logo; it's an identity. Let's craft a brand that tells your story and resonates with your audience. From logo design to overall branding strategy, I bring a creative touch to turn your passion into a brand that stands out.",
    },
    {
      id: 5,
      icon: "bi-dragon",
      name: "App Development",
      text: "Transform your innovative ideas into powerful, user-friendly applications. With expertise in app development and a keen eye for user experience design, I bring your vision to fruition. Let's create applications that resonate with your audience and make a lasting impact.",
    },
  ]

  return (
    <section id="services" className="py-16">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-bold leading-snug capitalize">
          <span className="uppercase text-sm text-main-500">
            My Services
          </span> <br />
          I Specialize In
        </h2>
      </header>
      <div className="container grid grid-cols-12 justify-center content-center gap-6">
        {
          services.length > 0 && services.map((service) => (
            <div className="col-span-4 bg-white rounded-3xl shadow p-5 flex flex-col gap-5" key={service.id}>
              <h3 className="font-semibold text-xl">{service.name}</h3>
              <p>
                {service.text}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesSection
