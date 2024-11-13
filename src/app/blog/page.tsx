import Image from "next/image";
import Link from "next/link";

import ArticleCard from "@/components/subcomponents/ArticleCard";
import SectionTitle from "@/components/subcomponents/SectionTitle";
import { blogPosts } from "@/mock-database/blog";
import CTABanner2 from "@/components/sections/CTABanner2";
import { ArrowUpRight } from "lucide-react";

const page = () => {

    const featuredArticle = blogPosts[0];

  return (
    <>
        <section className="py-8 bg-hero bg-no-repeat bg-center bg-fixed bg-cover dark:bg-hero-dark dark:text-background relative z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-accent/20 dark:bg-foreground/90 -z-[1]"></div>
            <div className="container">    
                <div className="grid grid-cols-1 md:grid-cols-2 mb-10 h-auto md:h-[400px]">
                <SectionTitle
                    containerStyles="flex flex-col justify-start md:justify-center"
                    title="My Blog"
                    extendedTitle="Read Insights, Tips, and Stories from My Developer Journey"
                    text="Welcome to my blog! Here, I share personal insights, practical tips, and stories about navigating the world of software development, creative design, and technology. Join me as we explore ideas, learn new skills, and grow together."
                    page={true}
                />
                <div className="bg-[url(/assets/images/icons/teen-with-laptop-blogging.svg)] bg-contain bg-top bg-no-repeat w-full hidden md:flex"></div>
                </div>
            </div>
        </section>
        <section className="py-16 bg-background dark:bg-foreground text-foreground dark:text-background">
            <div className="container">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-8 mb-12">
                    <div className="flex-shrink-0 basis-full sm:basis-1/2 h-auto lg:h-[355px] overflow-hidden rounded-3xl">
                        <Image 
                            src={featuredArticle.featuredImgUrl} 
                            width={578} 
                            height={355} 
                            className="w-full h-full object-cover"
                            alt={featuredArticle.title} 
                        />
                    </div>
                    <div className="basis-full sm:basis-1/2 flex flex-col gap-y-3">
                        <p className="text-xs text-gray-500">{featuredArticle.published_date}</p>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{featuredArticle.title}</h3>
                        <p className="text-sm">{featuredArticle.excerpt}</p>
                        <Link 
                            href={`/blog/${featuredArticle.slug}`}
                            className="btn btn-sm btn-primary w-max gap-x-1"
                        >
                            Read Post
                            <ArrowUpRight/>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 smx:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {blogPosts.slice(1).map((blogPost, blogPostIndex) => (
                    <ArticleCard article={blogPost} key={blogPostIndex} />
                ))}
                </div>
            </div>
        </section>
        <CTABanner2/>
    </>
  )
}

export default page