import Image from "next/image";

//components, uis and icons
import { CardHeader, Card, CardDescription, CardContent, CardTitle } from "../ui/card";

//types and interfaces
import { ProcessCardProps } from "@/types/interfaces";

const CreativeProcessCard: React.FC<ProcessCardProps> = ({ process }) => {
  return (
    <Card 
      className="col-span-12 md:col-span-6 xl:col-span-3 rounded-3xl shadow-sm shadow-main-500 text-center bg-white"
    >
        <CardHeader className="relative h-56">
            <Image 
                src={process.icon.url} 
                alt={process.icon.alt} 
                className="h-full w-full object-cover rounded-3xl border-b-2 mb-4"
                fill
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
