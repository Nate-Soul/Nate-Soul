// import { motion } from "framer-motion";
// import { staggerContainer, textVariant } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-1 text-white bg-no-repeat bg-cover bg-center">
      {/* <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
      </motion.div> */}
      <div className="container flex items-center justify-between">
        <div className="hero-text flex flex-col gap-8">
          <h1 className="font-extrabold text-5xl capitalize leading-snug">
            <span className="text-main-100 text-2xl">Hola, I&apos;m Nathanael.</span> <br />
            I build innovative digital products for tomorrow.
          </h1>
          <p>
            I help startups, and mid-sized companies transform their innovative ideas into seamless digital solutions with user centricity in mind. I also help automate tasks and processes to help organizations get more done with less effort.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="bg-sec-600 text-white font-medium capitalize rounded-3xl px-10 py-3 w-max"
            >
              Let's Connect
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border border-main-100 text-white font-medium capitalize rounded-3xl px-10 py-3 w-max"
            >
              Browse projects
            </Link>
          </div>
        </div>
        {/* <figure> */}
          <Image
            src="/assets/images/personal/nathanael-ukpong-transparent-bg.png"
            alt="Nathanael Ukpong"
            width={340}
            height={467}
          />
        {/* </figure> */}
      </div>
    </section>
  );
};

export default Hero;
