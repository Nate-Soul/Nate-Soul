import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Send, DownloadIcon } from "lucide-react";

import SectionTitle from "../subcomponents/SectionTitle"; 

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background dark:bg-foreground text-foreground dark:text-white">
      <div className="container grid lg:grid-cols-2 items-center gap-5">
        <figure 
          className="about-img mx-auto h-auto w-4/5 lg:h-[500px] lg:w-[500px] rounded-full border-4 border-gray-300 dark:border-primary overflow-hidden"
        >
          <Image 
            src="/assets/images/personal/Nathanael-Ukpong.png" 
            alt="Photo of Nathanael Ukpong" 
            width={500} 
            height={500} 
            className="w-full h-auto object-contain"
          />
        </figure>
        <div className="about-text">
          <SectionTitle 
            containerStyles="text-center lg:text-left mb-8"
            title="About Me" 
            extendedTitle={`Why You Should Choose Me For Your Next Project`}
            page={false}
          />
          <div className="flex flex-col gap-3 text-justify">
            <p>
              I am a dedicated full stack software developer with a passion for translating ideas and innovative concepts into cutting-edge digital products. My expertise lies not only in the realm of websites and apps but in architecting user-centric solutions that blend business logic and design principles.
            </p>
            <p>
              I bring a robust skill set to the table, ensuring that every project meets the highest standards of functionality and user experience. I&apos;m proficient in JavaScript, Python &amp; PHP.
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
                className="btn btn-primary btn-md capitalize gap-x-2"
              >
                Let's Connect <Send size={18}/>
                {/* <Button className="gap-x-2"></Button> */}
              </Link>
              <Link 
                href="https://drive.google.com/file/d/1KXDbmxWegYspjYG08kgSSuKXjeiDAFE6/view?usp=drive_link"
                className="btn btn-md btn-secondary capitalize gap-x-2"
              >
                  Download Resume
                  <DownloadIcon size={18}/>
                {/* <Button variant="secondary" className="gap-x-2">
                </Button> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
