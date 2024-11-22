import Image from "next/image";
import Link from "next/link";

import * as motion from "@/utils/motionDefs";
import { staggerContainer, slideIn } from "@/utils/motion";

import { ArrowUpRight, ChevronRightIcon } from "lucide-react";

import SectionTitle from "../subcomponents/SectionTitle";
import ArticleCard from "../subcomponents/ArticleCard";
import { ArticleProps } from "@/types/interfaces";

async function getData(url: string) {
  const res = await fetch(url, { next: { revalidate: 43200 } });

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  return res.json();
}

const FeaturedBlog = async () => {

  const blogAPIURL = process.env.NODE_ENV === "development" 
                      ? "http://localhost:8000/api/blog"
                      : "https://nate-soul-api.vercel.app/api/blog";
  const res = await getData(`${blogAPIURL}`);
  const featuredArticles: ArticleProps[] = res.results;

  return (
    <section id="creativeProcess" className="py-10 bg-background dark:bg-foreground text-foreground dark:text-white">
      <motion.div 
        className="container"
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-10">
          <SectionTitle 
            containerStyles="mb-4" 
            title="My Blog" 
            extendedTitle="Stories crafted from experience"
            page={false}
          />
          <Link href="/blog" className="btn btn-md btn-primary gap-x-2">
              Read More <ChevronRightIcon size={20}/>
          </Link>          
        </div>
        <motion.div 
          className="flex flex-wrap lg:flex-nowrap items-stretch gap-6 md:gap-8"
          variants={slideIn("up", "tween", 0.25, 0.5)}
        >
        {featuredArticles.length > 0 
        && featuredArticles
        .filter(article => article.featured === true)
        .slice(0, 3).map((article, articleIndex) => articleIndex === 0 ? (
          <div className="relative basis-full lg:basis-2/5" key={article.id}>
            <figure className="rounded-3xl overflow-hidden relative w-full h-full">
              <Image 
                src={article.featured_img_url} 
                alt={article.title} 
                height={350} width={250} 
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 h-1/2 w-full bg-black bg-opacity-50 text-white p-5 ">
                <h4 className="text-lg md:text-2xl font-semibold">{article.title}</h4>
              </figcaption>
            </figure>
            <div className="absolute -top-1 -left-[10%] h-[13%] w-[70%] bg-background dark:bg-foreground rounded-tr-3xl rounded-tl-3xl -rotate-180"></div>
            <Link href={`/blog/${article.slug}`} className="inline-flex items-center justify-center absolute top-2 right-2 btn-primary w-10 h-10 rounded-full">
              <ArrowUpRight size={15} />
            </Link>
          </div>
          ) : ( 
            <ArticleCard article={article} key={articleIndex} classes="flex-0 smx:flex-1" />
          ))
        }
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedBlog