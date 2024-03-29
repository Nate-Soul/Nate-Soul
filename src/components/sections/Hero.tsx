// import { motion } from "framer-motion";
// import { staggerContainer, textVariant } from "@/utils/motion";

// next.js modules
import Image from "next/image";
import Link from "next/link";

//components and uis
import { Send, FolderClosed, ArrowDown } from "lucide-react";

async function getData(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if(!res.ok) {
    throw new Error("Something went wrong while loading page hero. Please try again later.");
  }

  return res.json();

}

const Hero = async () => {

  const profileData = await getData("https://nate-soul-api.vercel.app/api/accounts/NSL416/");

  return (
    <section id="hero" className="py-16 lg:py-4 relative bg-hero bg-no-repeat bg-center bg-fixed bg-cover dark:bg-hero-dark dark:text-background">
      {/* <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
      </motion.div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-accent/20 dark:bg-foreground/90"></div>
      <div className="container flex items-center justify-between gap-x-8">
        <div className="hero-text flex flex-col gap-8 text-center sm:text-left z-10">
          <h1 className="font-bold text-4xl xl:text-5xl capitalize leading-snug">
            <span className="text-main-100 text-2xl">Hola, I&apos;m {profileData.first_name}.</span> <br />
            {profileData.profile.headline}
          </h1>
          <p className="font-light text-lg">
            {profileData.profile.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
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
        </div>
        <div className="hero-img hidden lg:flex">
          <figure className="relative bg-blob-1-dark dark:bg-blob-1-light bg-no-repeat bg-bottom bg-cover w-[500px] h-[500px] overflow-hidden">
            <Image
              src={profileData.profile.headshot_url}
              alt="Nathanael Ukpong"
              className="object-contain"
              fill
              priority
            />
          </figure>
        </div>
      </div>
      <Link href="#about" className="absolute bottom-6 left-1/2 animate-bounce">
        <ArrowDown size={18}/>
      </Link>
    </section>
  );
};

export default Hero;
