import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <Link href="#top">
      <Button size="icon" className="rounded-none border-y-white dark:border-y-foreground"><ChevronUp/></Button>
    </Link>
  )
}

export default ScrollToTop
