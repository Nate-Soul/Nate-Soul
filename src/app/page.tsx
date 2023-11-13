import Hero from "@/sections/Hero";
import AboutSection from "@/sections/About";
import WorksSection from "@/sections/Works";
import ContactSection from "@/sections/Contact";
import ServicesSection from "@/sections/Services";
import TestimonialsSection from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-main-50 snap-y snap-mandatory">
      <Hero/>
      <AboutSection/>
      <ServicesSection/>
      <WorksSection/>
      <ContactSection/>
      <TestimonialsSection/>
    </main>
  )
}
