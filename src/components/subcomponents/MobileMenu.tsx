//next.js modules
import Link from "next/link";

//icons
import { AlignJustify, Send, DownloadIcon } from "lucide-react";

//components and ui
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Logo from "../Logo";
import Socials from "./Socials";

const MobileMenu = () => {

  const mobileNavLinks = [
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
      url: "/assets/images/personal/nathanael-ukpong.png",
      text: "Download Resume"
    }
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col gap-y-32 items-center">
            <Logo/>
            <ul className="flex flex-col items-center gap-y-6" role="menu">
                {mobileNavLinks.length > 0 && mobileNavLinks.map((mobileNavLink, index) => (
                <li key={index}>
                  { (mobileNavLink.url !== "/contact" && mobileNavLink.text !== "Download Resume") ? (
                    <Link href={mobileNavLink.url} role="menuitem">{mobileNavLink.text}</Link>
                    ) : mobileNavLink.url === "/contact" ? (
                    <Link href={mobileNavLink.url}>
                      <Button className="gap-x-2">
                        {mobileNavLink.text}
                        <Send size={18}/>
                      </Button>
                    </Link>
                    ) : mobileNavLink.text === "Download Resume" && (
                      <Link href={mobileNavLink.url}>
                        <Button variant="secondary" className="gap-x-2">
                          {mobileNavLink.text}
                          <DownloadIcon size={18}/>
                        </Button>
                      </Link>
                    )}
                </li>
                ))}
            </ul>
          </div>
          <Socials iconSize={24} containerStyles="flex gap-x-5 items-center"/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
