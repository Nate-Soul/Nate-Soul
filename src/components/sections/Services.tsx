//motion
import * as motion from "@/utils/motionDefs";
import { slideIn } from "@/utils/motion";

//components
import ServiceCard from "../subcomponents/ServiceCard";
import SectionTitle from "../subcomponents/SectionTitle";

import { servicesType } from "@/types/types";
// import { serviceData } from "@/utils/data";

async function getData(url: string) {
  const res = await fetch(url, { next: { revalidate: 43200 } });

  if(!res.ok){
    throw new Error("Error in Network response");
  }

  return res.json();
}


const ServicesSection = async () => {

  const res = await getData("https://nate-soul-api.vercel.app/api/services");
  // const res = await getData("http://localhost:8000/api/services");
  const serviceData: servicesType = res.data;

  return (
    <section id="services" className="py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <SectionTitle
        containerStyles="mb-8 text-center"
        title="My Services"
        extendedTitle="Digital Solutions Tailored for You"
        page={false}
      />
      <motion.div 
        className="container grid sm:grid-cols-2 lg:grid-cols-3 justify-center content-center gap-4"
        variants={slideIn("up", "tween", 0.3, 0.5)}
        initial="hidden"
        animate="show"
      >
        {
          serviceData.length > 0 
            && serviceData.sort((a,b) => a.priority - b.priority)
            .map((serviceItem, serviceItemIndex) => (
            <ServiceCard service={serviceItem} key={serviceItemIndex}/>
          ))
        }
      </motion.div>
    </section>
  )
}

export default ServicesSection
