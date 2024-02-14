import Image from "next/image";
import Link from "next/link";

import { Send, DownloadIcon } from "lucide-react";

import SectionTitle from "../subcomponents/SectionTitle"; 

async function getData(url: string) {

  const res = await fetch(url, { cache: "no-store" });

  if(!res.ok){
   throw new Error("something went wrong");
  }

  return res.json();
}

const AboutSection = async () => {

  const profileData = await getData("https://nate-soul-api.vercel.app/api/accounts/NSL416/");

  return (
    <section id="about" className="py-16 bg-background dark:bg-foreground text-foreground dark:text-white">
      <div className="container grid lg:grid-cols-2 items-center gap-5">
        <figure 
          className="about-img mx-auto h-auto w-4/5 lg:h-[500px] lg:w-[500px] rounded-full border-4 border-gray-300 dark:border-primary overflow-hidden"
        >
          <Image 
            src={profileData.profile.profile_img_url} 
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
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3 text-justify" dangerouslySetInnerHTML={{ __html: profileData.profile.bio }}></div>
            <div className="flex items-center gap-x-3">
              <Link 
                href="/contact"
                className="btn btn-primary btn-md capitalize gap-x-2"
              >
                Let's Connect <Send size={18}/>
              </Link>
              <Link 
                href="https://drive.google.com/file/d/1KXDbmxWegYspjYG08kgSSuKXjeiDAFE6/view?usp=drive_link"
                className="btn btn-md btn-secondary capitalize gap-x-2"
              >
                  Download Resume
                  <DownloadIcon size={18}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
