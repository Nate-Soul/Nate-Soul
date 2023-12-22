import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import WorksSection from "@/components/sections/Works";
import ServicesSection from "@/components/sections/Services";
import TestimonialsSection from "@/components/sections/Testimonials";
import CreativeProcess from "@/components/sections/CreativeProcess";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Stats/>
      <AboutSection/>
      <CreativeProcess/>
      <ServicesSection/>
      <WorksSection/>
      <TestimonialsSection/>
    </main>
  )
}
