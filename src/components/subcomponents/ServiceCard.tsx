//next.js modules
import Image from "next/image";

//components, ui and icons
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "../ui/card";

//types and interfaces
import { ServiceCardProps } from "@/types/interfaces";

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card 
      key={service.id}
      className="col-span-4 bg-white text-center flex flex-col gap-y-4 items-center justify-center " 
    >
      {service.icon.url && (
      <CardHeader>
        <Image src={service.icon.url} alt={service.icon.alt} height={70} width={70} />
      </CardHeader>
      )}
      <CardContent className="flex flex-col gap-y-4">
        <CardTitle>{service.name}</CardTitle>
        <CardDescription className="text-lg">
          {service.text}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
