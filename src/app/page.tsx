import Hero from "@/sections/Hero";
import AboutSection from "@/sections/About";
import WorksSection from "@/sections/Works";
import ContactSection from "@/sections/Contact";
import ServicesSection from "@/sections/Services";
import TestimonialsSection from "@/sections/Testimonials";
import CreativeProcess from "@/sections/CreativeProcess";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <main className="bg-main-50 snap-y snap-mandatory">
      <Hero/>
      <Stats/>
      <AboutSection/>
      <CreativeProcess/>
      <ServicesSection/>
      <WorksSection/>
      <ContactSection/>
      <TestimonialsSection/>
    </main>
  )
}
