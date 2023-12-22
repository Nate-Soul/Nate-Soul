import Image from "next/image";

//components, uis and icons
import { CardHeader, Card, CardDescription, CardContent, CardTitle } from "../ui/card";

//types and interfaces
import { ProcessCardProps } from "@/types/interfaces";

const CreativeProcessCard: React.FC<ProcessCardProps> = ({ process }) => {
  return (
    <Card 
      className="creative-process-card rounded-3xl shadow-sm text-center bg-card dark:bg-card-foreground text-foreground dark:text-background"
    >
        <CardHeader className="relative h-56">
            <Image 
                src={process.icon.url} 
                alt={process.icon.alt} 
                className="h-full w-full object-cover rounded-3xl border-b-2 mb-4"
                fill
                sizes="(max-width: 768px) 80%, (max-width: 640px) 50%, 33%"
                priority
            />
        </CardHeader>
      <CardContent className="p-3">
        <CardTitle className="font-semibold text-lg mb-4">{process.name}</CardTitle>
        <CardDescription>
          {process.desc}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default CreativeProcessCard
