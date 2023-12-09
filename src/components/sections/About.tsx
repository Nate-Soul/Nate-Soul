import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Send, DownloadIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background dark:bg-foreground text-foreground dark:text-white">
      <div className="container flex flex-col md:flex-row items-center gap-5">
        <figure className="about-img flex-none md:flex-1">
          <Image 
            src="/assets/images/personal/Nathanael-Ukpong.png" 
            alt="Photo of Nathanael Ukpong" 
            width={500} 
            height={500} 
            className="rounded-full object-contain border-4 border-gray-300 dark:border-primary"
          />
        </figure>
        <div className="about-text flex-none md:flex-1">
          <h2 className="text-3xl font-bold leading-snug mb-8 capitalize">
            <span className="uppercase text-sm text-main-500">
              About Me
            </span> <br />
            Why You Should choose me <br /> for your next project?
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              I am a dedicated full stack software developer with a passion for translating innovative concepts into cutting-edge digital products. My expertise lies not only in the realm of websites and apps but in architecting user-centric solutions that blend business logic and design principles.
            </p>
            <p>
              With a focus on elevating efficiency, I bring a robust skill set to the table, ensuring that every project meets the highest standards of functionality and user experience. I&apos;m proficient in JavaScript, Python &amp; PHP.
            </p>
            <p>
              I've also honed my project management skills through a fundamental course, embracing agile methodologies and scrum practices. My strengths include an unwavering attention to detail, effective communication, and analytical prowess.
            </p>
            <p>
              Ready to embark on a digital journey together? Whether you're a startup with an innovative idea or a company seeking to streamline processes, let's connect. Contact me for inquiries or download my resume to explore how we can shape the future together. Let's build something extraordinary!
            </p>
            <div className="flex items-center gap-x-3">
              <Link 
                href="/contact"
                className="capitalize"
              >
                <Button className="gap-x-2">
                  Let's Connect
                  <Send size={18}/>
                </Button>
              </Link>
              <Link 
                href="/personal/nathanael-ukpong.png"
                className="capitalize"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download Resume
                  <DownloadIcon size={18}/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
