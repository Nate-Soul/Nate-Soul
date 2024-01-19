// import { motion } from "framer-motion";
// import { staggerContainer, textVariant } from "@/utils/motion";

// next.js modules
import Image from "next/image";
import Link from "next/link";

//components and uis
import { Button } from "../ui/button";
import { Send, FolderClosed, ArrowDown } from "lucide-react";

const Hero = () => {
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
            <span className="text-main-100 text-2xl">Hola, I&apos;m Nathanael.</span> <br />
            Full Stack Developer &amp; AI Enthusiast.
          </h1>
          <p className="font-light text-lg">
            I leverage technology and AI to help startups, and mid-sized companies transform their innovative ideas into seamless digital solutions with user centricity in mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary btn-md w-full sm:w-max gap-x-2"
            >
              {/* <Button className="gap-x-2 w-full"> </Button> */}Let's Connect <Send size={18}/>
            </Link>
            <Link
              href="/projects"
              className="btn btn-secondary btn-md w-full sm:w-max gap-x-2" 
            >
              Browse projects <FolderClosed size={18}/>
              {/* <Button variant="secondary" className="gap-x-2 w-full"> </Button> */}
            </Link>
          </div>
        </div>
        <div className="hero-img hidden lg:flex">
          <figure className="relative bg-blob-1-dark dark:bg-blob-1-light bg-no-repeat bg-bottom bg-cover w-[500px] h-[500px] overflow-hidden">
            <Image
              src="/assets/images/personal/nathanael-ukpong-transparent-bg.png"
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
