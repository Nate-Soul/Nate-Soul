"use client";

//components
import Navbar from "./Navbar";

//hooks
import useWindowScroll from "@/hooks/useWindowScroll";


const MainHeader = () => {

  const [ windowScrollPos ] = useWindowScroll();

  return (
    <header className={`${
      windowScrollPos 
        ? 'shadow bg-accent bg-opacity-10'
        : 'bg-background'
      } transition-all z-40 sticky top-0 dark:bg-foreground dark:text-white`}>
        <Navbar/>      
    </header>
  )
}

export default MainHeader
