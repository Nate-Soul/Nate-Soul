//motion
import * as motion from "@/utils/motionDefs";

//components
import CreativeProcessCard from "../subcomponents/CreativeProcessCard";
import SectionTitle from "../subcomponents/SectionTitle";

//data
// import { processData } from "@/utils/data";

//types
import { processesType } from "@/types/types";
import { slideIn, staggerContainer } from "@/utils/motion";
async function getData(url: string) {
  const result = await fetch(url, { next: { revalidate: 43200 } });
  
  if(!result.ok){
    throw new Error("Something went wrong");
  }

  return result.json();

}

const CreativeProcess = async () => {

  const res = await getData("https://nate-soul-api.vercel.app/api/processes");
  // const res = await getData("http://localhost:8000/api/processes");
  const processData: processesType = res.data;

  return (
    <section id="creativeProcess" className="py-10 bg-background dark:bg-foreground text-foreground dark:text-white">
      <motion.div 
        className="container"
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        animate="show"
      >
        <SectionTitle 
          containerStyles="mb-8 text-center" 
          title="My Creative Process" 
          extendedTitle="How I Put the pieces together"
          page={false}
        />
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={slideIn("up", "tween", 0.25, 0.5)}
        >
        {processData.length > 0 
          && processData.sort((a,b) => a.priority - b.priority)
          .map((processItem, processItemIndex) => (
          <CreativeProcessCard key={processItemIndex} process={processItem}/>
        ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CreativeProcess
