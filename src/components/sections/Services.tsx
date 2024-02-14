import ServiceCard from "../subcomponents/ServiceCard";
import SectionTitle from "../subcomponents/SectionTitle";
import { notFound } from "next/navigation";

import { servicesType } from "@/types/types";
// import { serviceData } from "@/utils/data";

async function getData(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if(!res.ok){
    notFound();
  }

  return res.json();
}


const ServicesSection = async () => {

  const res = await getData("https://nate-soul-api.vercel.app/api/services");
  const serviceData: servicesType = res.data;

  return (
    <section id="services" className="py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <SectionTitle
        containerStyles="mb-8 text-center"
        title="My Services"
        extendedTitle="Digital Solutions Tailored for You"
        page={false}
      />
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 justify-center content-center gap-4">
        {
          serviceData.length > 0 
            && serviceData.sort((a,b) => a.priority - b.priority)
            .map((serviceItem, serviceItemIndex) => (
            <ServiceCard service={serviceItem} key={serviceItemIndex}/>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesSection
