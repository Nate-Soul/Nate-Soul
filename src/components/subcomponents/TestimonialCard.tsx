//react.js modules

//next.js modules
import Image from "next/image";

//components, ui, icons
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { QuoteIcon } from "lucide-react";

//interfaces and types
import { TestimonialCardProps } from "@/types/interfaces"

const TestimonialCard: React.FC<TestimonialCardProps> = ({testimonial}) => {

  return (
    <Card className="flex flex-col p-5 relative bg-card text-card-foreground dark:bg-card-foreground dark:text-card">
      <div className="absolute top-0 right-4 inline-flex items-center justify-center p-2 rounded-b-xl bg-primary text-white">
        <QuoteIcon size={36}/>
      </div>
        <CardHeader className="px-0">
            <figure className="flex gap-3 items-center">
              {testimonial.avatar_url && (
                <Image 
                  src={testimonial.avatar_url} 
                  alt="testimonees name" 
                  height={70} 
                  width={70} 
                  className="rounded-full object-contain"
                />
              )}
                <figcaption>
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    <p>{testimonial?.role}, {testimonial?.company}.</p>
                </figcaption>
            </figure>
        </CardHeader>
        <CardDescription>
          {testimonial.review}
        </CardDescription>
    </Card>
  )
}

export default TestimonialCard
