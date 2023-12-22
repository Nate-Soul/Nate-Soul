import Link from "next/link";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

import Socials from "./subcomponents/Socials";

const MainFooter = () => {
  return (
    <footer className="bg-background text-black text-center dark:bg-foreground dark:text-white py-4 relative">
      <div className="container flex flex-col gap-5 sm:gap-24 sm:flex-row items-center justify-between md:justify-between">
        <Socials iconSize={30} containerStyles="flex items-center gap-x-6"/>
        <div>
          <p>Made with love using Next.js and Django</p>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter
