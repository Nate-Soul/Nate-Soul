import Image from "next/image";
import { blogPosts } from "@/mock-database/blog";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { FacebookIcon, LinkedinIcon, ShareIcon, TwitterIcon } from "lucide-react";

type Props = {
    params: {
      slug: string
    }
};

const page = ({ params }: Props ) => {
  const blogArticle = blogPosts.filter(blogPost => blogPost.slug === params.slug)[0];

  if (!blogArticle) {
    return notFound();
  }

  return (
    <>
      <section className="relative py-16 min-h-[400px]">
        <div className="container">
          <figure className="absolute top-0 left-0 w-full h-full">
            <Image 
              src={blogArticle.featuredImgUrl ? blogArticle.featuredImgUrl : '/assets/images/unavailable.jpg'} 
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
                    {blogArticle.published_date}
                </Badge>
                <ul className="flex items-center gap-x-3">
                  <li>
                    <FacebookIcon size={20}/>
                  </li>
                  <li>
                    <LinkedinIcon size={20}/>
                  </li>
                  <li>
                    <TwitterIcon size={20}/>
                  </li>
                </ul>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-sm">Tags:</span>
                  {blogArticle.tags.map((tag, tagIndex) => (
                    <Badge variant="outline" key={tagIndex} className="text-white">{tag}</Badge>
                  ))}
                </div>
              </div>       
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="py-12 bg-background text-foreground dark:bg-foreground dark:text-background">
        <div className="container">
          <div className="w-full smx:w-4/5 md:w-3/4 mx-auto" dangerouslySetInnerHTML={{ __html: blogArticle.content }}>

          </div>
        </div>
      </section>
    </>
  )
}

export default page