import Image from "next/image";
import Link from "next/link";

//motion
import * as motion from "@/utils/motionDefs";
import { slideIn, staggerContainer } from "@/utils/motion";

//components
import { Send, DownloadIcon } from "lucide-react";
import SectionTitle from "../subcomponents/SectionTitle";

async function getData(url: string) {

  const res = await fetch(url, { next: { revalidate: 43200 } });

  if(!res.ok){
   throw new Error("something went wrong");
  }

  return res.json();
}

const AboutSection = async () => {

  const baseURL = process.env.NEXT_PUBLIC_ENVIRONMENT === "DEVELOPMENT" 
                    ? "http://localhost:8000/api/accounts/nate/" : 
                    "https://nate-soul-api.vercel.app/api/accounts/NSL416/";
  const profileData = await getData(baseURL);

  return (
    <section id="about" className="py-16 bg-background dark:bg-foreground text-foreground dark:text-white">
      <motion.div 
        className="container grid lg:grid-cols-2 items-center gap-5"
        variants={staggerContainer(0.25, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <motion.figure 
          className="about-img mx-auto h-auto w-4/5 lg:h-[500px] lg:w-[500px] rounded-full border-4 border-gray-300 dark:border-primary overflow-hidden"
          variants={slideIn("left", "tween", 0.25, 0.5)}
        >
          <Image 
            src={profileData.profile.profile_img_url} 
            alt="Photo of Nathanael Ukpong" 
            width={500} 
            height={500} 
            className="w-full h-auto object-contain"
          />
        </motion.figure>
        <motion.div 
          className="about-text"
          variants={slideIn("right", "tween", 0.25, 0.5)}
        >
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
                href="https://docs.google.com/document/d/1eEAxPE_7L9oD-gmAjzjckySuHOSpqYTI9V1koTpovFw/edit?usp=sharing"
                className="btn btn-md btn-secondary capitalize gap-x-2"
                target="_blank"
              >
                  Download Resume
                  <DownloadIcon size={18}/>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
