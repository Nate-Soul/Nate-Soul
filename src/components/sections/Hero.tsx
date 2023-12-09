// import { motion } from "framer-motion";
// import { staggerContainer, textVariant } from "@/utils/motion";

// next.js modules
import Image from "next/image";
import Link from "next/link";

//components and uis
import { Button } from "../ui/button";
import { Send, FolderClosed, ArrowDown } from "lucide-react";

//images
import MyImg from "../../../public/assets/images/personal/nathanael-ukpong-transparent-bg.png";

const Hero = () => {
  return (
    <section id="hero" className="py-4 relative bg-blue-100 text-foreground dark:bg-foreground dark:text-white">
      {/* <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
      </motion.div> */}
      <div className="container flex items-center justify-between gap-x-8">
        <div className="hero-text flex flex-col gap-8">
          <h1 className="font-bold text-5xl capitalize leading-snug">
            <span className="text-main-100 text-2xl">Hola, I&apos;m Nathanael.</span> <br />
            I build innovative digital products for tomorrow.
          </h1>
          <p className="font-light text-lg">
            I help startups, and mid-sized companies transform their innovative ideas into seamless digital solutions with user centricity in mind. I also help automate tasks and processes to help organizations get more done with less effort.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="w-full md:w-max"
            >
              <Button className="gap-x-2 w-full"> Let's Connect <Send size={18}/></Button>
            </Link>
            <Link
              href="/projects"
              className="w-full md:w-max"
            >
              <Button variant="secondary" className="gap-x-2 w-full"> Browse projects <FolderClosed size={18}/></Button>
            </Link>
          </div>
        </div>
        <div className="hero-img hidden xl:flex">
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
