// import { motion } from "framer-motion";
// import { navVariants } from "@/utils/motion";
import Link from "next/link";


const Navbar = () => {

  const navLinks = [
    {
      url: "#hero",
      text: "Home"
    },
    {
      url: "#about",
      text: "About"
    },
    {
      url: "#works",
      text: "Projects"
    },
    {
      url: "#services",
      text: "What I do"
    },
    {
      url: "#testimonials",
      text: "Testimonials"
    },
    {
      url: "#contact",
      text: "Let's Connect"
    },
  ];
  
  return (
    // <motion.nav  
    //   variants={navVariants}
    //   initial="hidden"
    //   whileInView="show"
    //   className="py-4"
    // >
    <nav className="bg-main-50 py-4 shadow shadow-main-100">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-extrabold">Nate Soul</Link>
        <ul className="flex items-center gap-6">
          {navLinks.length > 0 && navLinks.map((navLink, i) => 
            navLink.url !== "#contact" ? (<li key={i} className="inline-flex items-center">
              <Link href={navLink.url}>{navLink.text}</Link>
            </li>) : (
          <li key={i} className="inline-flex items-center bg-sec-600 text-white rounded-3xl px-4 py-2">
            <Link href={navLink.url}>{navLink.text}</Link>
          </li>)
          )}
        </ul>      
      </div>
    </nav>
    // </motion.nav>
  )
}

export default Navbar
