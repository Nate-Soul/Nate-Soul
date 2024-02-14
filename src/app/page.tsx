import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import WorksSection from "@/components/sections/Works";
import ServicesSection from "@/components/sections/Services";
import TestimonialsSection from "@/components/sections/Testimonials";
import CreativeProcess from "@/components/sections/CreativeProcess";
import Stats from "@/components/sections/Stats";
import CTABanner from "@/components/sections/CTABanner";

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
      <CTABanner 
        heading="Transform Ideas Into Impact!"
        subtext="Ready to turn your ideas into reality? Explore my portfolio and envision the possibilities. Let's collaborate on your next digital venture"
        cta="Let's Build Together"
      />
    </main>
  )
}
