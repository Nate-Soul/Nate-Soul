"use client";

//react.js modules

// next.js modules
import Link from "next/link";
import { usePathname } from "next/navigation";

// framer motion
// import { motion } from "framer-motion";
// import { navVariants } from "@/utils/motion";

//components and uis
import Logo from "@/components/Logo";
import MobileMenu from "./subcomponents/MobileMenu";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

//types and interfaces
import { navLinksType } from "@/types/types";


const Navbar = () => {

  const navLinks: navLinksType = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "/#about",
      text: "About"
    },
    {
      url: "/projects",
      text: "Projects"
    },
    {
      url: "/#services",
      text: "What I do"
    },
    {
      url: "/#testimonials",
      text: "Testimonials"
    },
    {
      url: "/contact",
      text: "Let's Connect"
    },
  ];

  const currentPage = usePathname();

  return (
    // <motion.nav  
    //   variants={navVariants}
    //   initial="hidden"
    //   whileInView="show"
    //   className="py-4"
    // >
    <nav className={`py-3 bg-inherit`}>
      <div className="container flex items-center justify-between">
        <Logo/>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.length > 0 && navLinks.map((navLink, i) => 
            navLink.url !== "/contact" ? (
            <li key={i} className={`${currentPage === navLink.url ? 'text-primary' : ''} inline-flex items-center`}>
              <Link href={navLink.url}>{navLink.text}</Link>
            </li>) : (
          <li key={i}>
            <Link href={navLink.url}>
              <Button className="gap-x-2">{navLink.text} <Send size={15}/> </Button>
            </Link>
          </li>)
          )}
        </ul>
        <div className="flex md:hidden">
          <MobileMenu/>
        </div>
      </div>
    </nav>
    // </motion.nav>
  )
}

export default Navbar
