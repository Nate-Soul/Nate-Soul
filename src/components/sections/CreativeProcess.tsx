// import { notFound } from "next/navigation";

//components
import CreativeProcessCard from "../subcomponents/CreativeProcessCard";
import SectionTitle from "../subcomponents/SectionTitle";

//data
import { processData } from "@/utils/data";

//types
// import { processesType } from "@/types/types";
// async function getData(url: string) {
//   const result = await fetch(url);
  
//   if(!result.ok){
//     return notFound
//   }

//   return result.json();

// }

const CreativeProcess = async () => {

  // const res = await getData("http://localhost:8000/api/processes");
  // const processData: processesType = res.data;

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
        {processData.length > 0 
          && processData.sort((a,b) => a.priority - b.priority)
          .map((processItem, processItemIndex) => (
          <CreativeProcessCard key={processItemIndex} process={processItem}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default CreativeProcess
