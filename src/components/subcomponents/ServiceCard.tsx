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
      className="service-card text-center flex flex-col gap-y-4 items-center justify-center dark:bg-card-foreground dark:text-background" 
    >
      {service.icon_url && (
      <CardHeader>
        <Image src={service.icon_url} alt={service.icon_alt} height={70} width={70} />
      </CardHeader>
      )}
      <CardContent className="flex flex-col gap-y-4">
        <CardTitle>{service.name}</CardTitle>
        <CardDescription className="text-sm sm:text-base lg:text-lg">
          {service.desc}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
