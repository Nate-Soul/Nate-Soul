"use client";

import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type SocialsParam = {
  iconSize: number;
  containerStyles: string;
};

type socialLinksType = {
  id: number,
  platform: string,
  icon: string,
  icon_dark: string,
  link: string
}

async function getData(url: string) {
  const res = await fetch(url);

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  return res.json();
}

const Socials = ({ iconSize, containerStyles }: SocialsParam) => {

  const [socialLinks, setSocialLinks] = useState<socialLinksType[] | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData("https://nate-soul-api.vercel.app/api/accounts/NSL416/");
        // const res = await getData("http://loaclhost:8000/api/accounts/NSL416/");
        setSocialLinks(res.profile.social);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={containerStyles}>
      {
        (socialLinks || []).length > 0 && (socialLinks || []).map(socialLink => (
          <Link 
            key={socialLink.id}
            href={socialLink.link}
          >
            <Image
              src={(theme === "dark" && socialLink.icon_dark) ? socialLink.icon_dark : socialLink.icon }
              alt={`${socialLink.platform}'s profile icon`}
              height={iconSize}
              width={iconSize}
            />
          </Link>
        ))
      }
    </div>
  );
};

export default Socials;
