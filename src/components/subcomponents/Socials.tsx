import Link from "next/link";
import Image from "next/image";

type SocialsParam = {
    iconSize: number,
    containerStyles: string
}

const Socials = ({ iconSize, containerStyles}: SocialsParam) => {
  return (
    <div className={containerStyles}>
      <Link href="https://linkedin.com/in/nathanael-ukpong">
        <Image src="/assets/images/icons/square-linkedin.svg" alt="LinkedIn profile icon" height={iconSize} width={iconSize}/>
      </Link>
      <Link href="https://mobile.twitter.com/Nate_ukpong">
        <Image src="/assets/images/icons/twitter-square-icon.svg" alt="X handle icon" height={iconSize} width={iconSize}/>
      </Link>
      <Link href="https://github.com/Nate-Soul">
        <Image src="/assets/images/icons/github-square.svg" alt="Github profile icon" height={iconSize} width={iconSize}/>
      </Link>
      <Link href="https://whatsapp.com/profile/">
        <Image src="/assets/images/icons/square-whatsapp-business.svg" alt="Whatsapp business icon" height={iconSize} width={iconSize}/>
      </Link>
    </div>
  )
}

export default Socials
