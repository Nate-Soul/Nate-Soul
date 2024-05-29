// "use client";
// next.js modules
import Image from "next/image";
import Link from "next/link";

//framer motion
import * as motion from "@/utils/motionDefs";
import { 
  staggerContainer, 
  textVariant, 
  slideIn 
} from "@/utils/motion";

//components and uis
import { Send, FolderClosed, ArrowDown } from "lucide-react";

async function getData(url: string) {
  const res = await fetch(url, { next: { revalidate: 43200 } });

  if(!res.ok) {
    throw new Error("Something went wrong while loading page hero. Please try again later.");
  }

  return res.json();

}

const Hero = async () => {

  const profileData = await getData("https://nate-soul-api.vercel.app/api/accounts/NSL416/");
  // const profileData = await getData("http://localhost:8000/api/accounts/natesoul/");

  return (
    <section id="hero" className="py-16 lg:py-4 relative bg-hero bg-no-repeat bg-center bg-fixed bg-cover dark:bg-hero-dark dark:text-background">
      <div className="absolute top-0 left-0 w-full h-full bg-accent/20 dark:bg-foreground/90"></div>
      <motion.div 
        className="container flex items-center justify-between gap-x-8"
        variants={staggerContainer(0.25, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div 
          className="hero-text flex flex-col gap-8 text-center sm:text-left z-10"
          variants={slideIn("left", "tween", 0.3, 0.5)}
        >
          <motion.h1 
            className="font-bold text-4xl xl:text-5xl capitalize leading-snug"
            variants={textVariant(0.7)}
          >
            <span className="text-main-100 text-2xl">Hola, I&apos;m {profileData.first_name}.</span> <br />
            {profileData.profile.headline}
          </motion.h1>
          <p className="font-light text-lg">
            {profileData.profile.subheading}
          </p>
          <div
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="btn btn-primary btn-md w-full sm:w-max gap-x-2"
            >
              Let's Connect <Send size={18}/>
            </Link>
            <Link
              href="/projects"
              className="btn btn-secondary btn-md w-full sm:w-max gap-x-2" 
            >
              Browse projects <FolderClosed size={18}/>
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="hero-img hidden lg:flex"
          variants={slideIn("right", "tween", 0.3, 0.5)}
        >
          <figure className="relative bg-blob-1-dark dark:bg-blob-1-light bg-no-repeat bg-bottom bg-cover w-[500px] h-[500px] overflow-hidden">
            <Image
              src={profileData.profile.headshot_url}
              alt="Nathanael Ukpong"
              className="object-contain"
              fill
              priority
            />
          </figure>
        </motion.div>
      </motion.div>
      <Link href="#about" className="absolute bottom-6 left-1/2 animate-bounce">
        <ArrowDown size={18}/>
      </Link>
    </section>
  );
};

export default Hero;
