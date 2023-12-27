import ServiceCard from "../subcomponents/ServiceCard";
import SectionTitle from "../subcomponents/SectionTitle";

import { serviceData } from "@/utils/data";


const ServicesSection = () => {

  return (
    <section id="services" className="py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <SectionTitle
        containerStyles="mb-8 text-center"
        title="My Services"
        extendedTitle="I Specialize In"
        page={false}
      />
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 justify-center content-center gap-4">
        {
          serviceData.length > 0 && serviceData.map((serviceItem, serviceItemIndex) => (
            <ServiceCard service={serviceItem} key={serviceItemIndex}/>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesSection
