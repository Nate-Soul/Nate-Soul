//next.js modules
import Link from "next/link";

//icons
import { AlignJustify, Send, DownloadIcon } from "lucide-react";

//types and interfaces
import { navLinksType } from "@/types/types";

//components and ui
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
// import { Button } from "../ui/button";
import Logo from "../Logo";
import Socials from "./Socials";

const MobileMenu = () => {

  const mobileNavLinks: navLinksType = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "#about",
      text: "About"
    },
    {
      url: "/projects",
      text: "Projects"
    },
    {
      url: "/blog",
      text: "Blog"
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
      url: "/contact",
      text: "Let's Connect"
    },
    {
      url: "https://docs.google.com/document/d/1eEAxPE_7L9oD-gmAjzjckySuHOSpqYTI9V1koTpovFw/edit?usp=sharing",
      text: "Download Resume"
    }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent className="bg-background dark:bg-foreground text-foreground dark:text-background">
        <div className="flex flex-col items-center justify-between h-full py-8 overflow-y-scroll hide-scrollbar">
          <div className="flex flex-col gap-y-16 items-center">
            <Logo/>
            <ul className="flex flex-col items-center gap-y-6" role="menu">
                {mobileNavLinks.length > 0 && mobileNavLinks.map((mobileNavLink, index) => (
                <li key={index}>
                  { (mobileNavLink.url !== "/contact" && mobileNavLink.text !== "Download Resume") ? (
                    <Link href={mobileNavLink.url} role="menuitem">{mobileNavLink.text}</Link>
                    ) : mobileNavLink.url === "/contact" ? (
                    <Link href={mobileNavLink.url} className="btn btn-primary btn-md gap-x-2">
                        {mobileNavLink.text}
                        <Send size={18}/>
                      {/* <Button className="gap-x-2">
                      </Button> */}
                    </Link>
                    ) : mobileNavLink.text === "Download Resume" && (
                      <Link 
                        href={mobileNavLink.url} 
                        className="btn btn-secondary btn-md gap-x-2"
                        >
                          {mobileNavLink.text}
                          <DownloadIcon size={18}/>
                        {/* <Button variant="secondary" className="gap-x-2">
                        </Button> */}
                      </Link>
                    )}
                </li>
                ))}
            </ul>
            <Socials iconSize={24} containerStyles="flex gap-x-5 items-center"/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
