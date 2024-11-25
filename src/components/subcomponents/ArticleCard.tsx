import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";
import { ArticleProps } from "@/types/interfaces";

import moment from "moment";


interface ArticleCardProps {
  article: ArticleProps,
  classes?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, classes }) => {
  return (
    <article className={`${classes}`}>
        <figure className="overflow-hidden rounded-xl h-[240px] relative">
            <Image 
              src={article.featured_img_url || '/assets/images/unavailable.jpg'} 
              alt={article.title} 
              height={350} width={250} 
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 text-white p-5">
              <h4 className="text-base font-semibold mt-auto">{article.title}</h4>
            </figcaption>
        </figure>
        <div className="flex flex-col gap-y-4 p-3">
            <Badge variant="destructive" className="text-xs w-max">
                {moment(article.modified_date).format("YYYY-MM-DD")}
            </Badge>
            <p className="text-sm">{article?.excerpt}</p>
            <Link href={`blog/${article.slug}`} className="ml-auto inline-flex items-center gap-x-1 text-xs text-primary">
              Read post <ArrowUpRight size={15}/>
            </Link>
        </div>
    </article>
  )
}

export default ArticleCard