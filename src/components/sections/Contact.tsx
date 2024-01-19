//next.js modules
import Link from "next/link";

//components, uis and icons
import SectionTitle from "../subcomponents/SectionTitle";
import ContactForm from "../subcomponents/ContactForm";
import Socials from "../subcomponents/Socials";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background dark:bg-foreground text-foreground dark:text-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 h-auto md:h-[400px]">
          <SectionTitle
            containerStyles="flex flex-col justify-start md:justify-center"
            title="Contact Me"
            extendedTitle="Let's Have A Coffee"
            text="Whether you're ready to kickstart a new project or just want to connect, I&apos;m here to make it easy. Feel free to reach out through any of the channels below:"
            page={true}
          />
          <div className="bg-contact-illustration bg-contain bg-top bg-no-repeat w-full hidden md:flex"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <p>
            </p>
            <div className="wrapper flex gap-x-5 items-center">
              <MailIcon size={18} className="text-primary"/>
              <Link href="mailto:natesoul.dev@gmail.com">natesoul.dev@gmail.com</Link>
            </div>
            <div className="wrapper flex gap-x-5 items-center">
              <PhoneCall size={18} className="text-primary"/>
              <Link href="tel:+2347086752038">+234 708 675 2038</Link>
            </div>
            <div className="wrapper flex gap-x-5 items-center">
              <HomeIcon size={18} className="text-primary"/>
              <address>
                Port Harcourt, Rivers, Nigeria.
              </address>
            </div>
            <div className="wrapper">
              <h6 className="mb-4"> Follow Me </h6>
              <Socials iconSize={40} containerStyles="flex items-center gap-4"/>
            </div>
            <p>
              I look forward to hearing from you and discussing how we can collaborate to bring your digital vision to life. Whether you have a specific project in mind or simply want to explore the possibilities every conversation is a step towards turning ideas into extraordinary digital experiences. Let's connect and create something remarkable!
            </p>
          </div>
          <div className="flex flex-col gap-5 py-8 px-5 rounded-3xl shadow shadow-foreground dark:shadow-background">
            <ContactForm/>
          </div>
        </div>
      </div>
  </section>
  )
}

export default ContactSection
