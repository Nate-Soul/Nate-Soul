import Skeleton from "react-loading-skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ProjectCardSkeleton = ({ cards }: {cards: number}) => {
  return (
    Array(cards).fill(0).map((_, index) => (
        <Card 
            className="bg-card text-card-foreground dark:bg-card-foreground dark:text-card overflow-hidden" 
            key={index}
        >
            <CardHeader className="p-0">
                <Skeleton height={300} />
            </CardHeader>
            <CardContent className="flex flex-col gap-y-2 h-full px-8 py-6">
                <Skeleton className="rounded-3xl w-1/4" />
                <CardTitle><Skeleton/></CardTitle>
                <CardDescription><Skeleton count={2}/></CardDescription>
            </CardContent>
        </Card>
    ))
  )
}

export default ProjectCardSkeleton
