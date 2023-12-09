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
        ? 'shadow-lg bg-accent bg-opacity-60 '
        : 'bg-transparent'
      } transition-all z-40 sticky top-0`}>
        <Navbar/>      
    </header>
  )
}

export default MainHeader
