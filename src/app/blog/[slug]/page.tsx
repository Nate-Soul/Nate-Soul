import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import moment from "moment";

import { Badge } from "@/components/ui/badge";
import { FacebookIcon, LinkedinIcon, LinkIcon, TwitterIcon } from "lucide-react";

import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { ArticleProps } from "@/types/interfaces";
import Link from "next/link";

type Props = {
    params: {
      slug: string
    }
};

const getData = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });

  if(!res.ok){
    return notFound();
  }

  return res.json();
};

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  

  const blogAPIURL = process.env.NODE_ENV === "development" 
                      ? "http://localhost:8000/api/blog"
                      : "https://nate-soul-api.vercel.app/api/blog";
  const article: ArticleProps = await getData(`${blogAPIURL}/${params.slug}`);
  return {
    title: `${article.title}'s Project Case Study`,
    description: article?.excerpt,
    keywords: article.tags.map(tag => tag.name),
    openGraph: {
      images: [article.featured_img_url]
    },
    twitter: {
      images: [article.featured_img_url,]
    }
  }
}

const page = async ({ params }: Props ) => {

  const window = new JSDOM("").window;
  const purify = DOMPurify(window);

  const blogAPIURL = process.env.NODE_ENV === "development" 
                      ? "http://localhost:8000/api/blog"
                      : "https://nate-soul-api.vercel.app/api/blog";
  const blogArticle: ArticleProps = await getData(`${blogAPIURL}/${params.slug}`);

  if (!blogArticle) {
    return notFound();
  }

  return (
    <>
      <section className="relative py-16 min-h-[400px]">
        <div className="container">
          <figure className="absolute top-0 left-0 w-full h-full">
            <Image 
              src={blogArticle.featured_img_url || '/assets/images/unavailable.jpg'} 
              alt={blogArticle.title} 
              height={1024} 
              width={1024}
              className="w-full h-full object-cover"
              priority
            />
            <figcaption className="absolute top-0 left-0 h-full w-full bg-foreground/75 dark:bg-foreground/90 text-background flex items-center">
              <div className="w-full smx:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col gap-y-4 px-8 my-8">
                <hgroup className="flex flex-col gap-y-4">
                  <h1 className="text-2xl xsm:text-3xl md:text-4xl font-bold">{blogArticle.title}</h1>
                  <p>{blogArticle.excerpt}</p>
                </hgroup>
                <Badge variant="destructive" className="text-xs w-max">
                    {moment(blogArticle.modified_date).format("MMMM Do YYYY")}
                </Badge>
                <ul className="flex items-center gap-x-3">
                  <li>
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://nate-soul.vercel.app/blog/${blogArticle.slug}`} target="_blank">
                      <FacebookIcon size={20}/>
                    </Link>
                  </li>
                  <li>
                    <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nate-soul.vercel.app/blog/${blogArticle.slug}`} target="_blank">
                      <LinkedinIcon size={20}/>
                    </Link>
                  </li>
                  <li>
                    <Link href={`https://x.com/share?text=${blogArticle.title}&url=https://nate-soul.vercel.app/blog/${blogArticle.slug}&hashtags=${blogArticle?.tags?.map(tag => tag.name)}`} target="_blank">
                      <TwitterIcon size={20}/>
                    </Link>
                  </li>
                  <li>
                    <LinkIcon size={20}/>
                  </li>
                </ul>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-sm">Tags:</span>
                  {blogArticle.tags.map((tag, tagIndex) => (
                    <Badge variant="outline" key={tagIndex} className="text-white">{tag.name}</Badge>
                  ))}
                </div>
              </div>       
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="py-12 bg-background text-foreground dark:bg-foreground dark:text-background">
        <div className="container">
          <div className="w-full smx:w-4/5 md:w-3/4 mx-auto flex flex-col gap-y-3" dangerouslySetInnerHTML={{ __html: purify.sanitize(blogArticle?.content || "") }}></div>
        </div>
      </section>
    </>
  )
}

export default page