import CreativeProcessCard from "../subcomponents/CreativeProcessCard";
import SectionTitle from "../subcomponents/SectionTitle";

import { processData } from "@/utils/data";

const CreativeProcess = () => {

  return (
    <section id="creativeProcess" className="py-10 bg-backgroundd dark:bg-foreground text-foreground dark:text-white">
      <div className="container">
        <SectionTitle 
          containerStyles="mb-8 text-center" 
          title="My Creative Process" 
          extendedTitle="How I Put the pieces together"
          page={false}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {processData.length > 0 && processData.map((processItem, processItemIndex) => (
          <CreativeProcessCard key={processItemIndex} process={processItem}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default CreativeProcess
