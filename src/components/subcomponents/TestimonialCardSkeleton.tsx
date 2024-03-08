import Skeleton from "react-loading-skeleton";
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "../ui/card";

const TestimonialCardSkeleton = ({ cards }: {cards: number}) => {
  return (
    Array(cards).fill(0).map((item, index) => (
        <Card 
          key={index} 
          className="bg-card text-card-foreground dark:bg-card-foreground dark:text-card flex flex-xol gap-y-3"
        >
            <CardHeader className="flex gap-x-3 items-center">
              <div>
                <Skeleton circle width={70} height={70} />
              </div>
              <div>
                <CardTitle><Skeleton/></CardTitle>
                <p><Skeleton/></p>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription><Skeleton count={4}/></CardDescription>
            </CardContent>
        </Card>
    ))
  )
}

export default TestimonialCardSkeleton
