import Link from "next/link";
import Image from "next/image";

type SocialsParam = {
  iconSize: number;
  containerStyles: string;
};

const Socials = ({ iconSize, containerStyles }: SocialsParam) => {
  return (
    <div className={containerStyles}>
      <Link href="https://linkedin.com/in/nathanael-ukpong">
        <Image
          src="/assets/images/icons/square-linkedin.svg"
          alt="LinkedIn profile icon"
          height={iconSize}
          width={iconSize}
        />
      </Link>
      <Link href="https://mobile.twitter.com/Nate_ukpong">
        <Image
          src="/assets/images/icons/twitter-square-icon.svg"
          alt="X handle icon"
          height={iconSize}
          width={iconSize}
        />
      </Link>
      <Link href="https://github.com/Nate-Soul" className="inline-flex dark:hidden">
        <Image
          src="/assets/images/icons/github-square-icon.png"
          alt="Github profile icon"
          height={iconSize}
          width={iconSize}
        />
      </Link>
      <Link href="https://github.com/Nate-Soul" className="hidden dark:inline-flex">
        <Image
          src="/assets/images/icons/github-square.svg"
          alt="Github profile icon"
          height={iconSize + 3}
          width={iconSize + 3} 
        />
      </Link>
      <Link href="https://wa.me/message/7DZ5UKEELTYSG1">
        <Image
          src="/assets/images/icons/square-whatsapp-business.svg"
          alt="Whatsapp business icon"
          height={iconSize}
          width={iconSize}
        />
      </Link>
    </div>
  );
};

export default Socials;
