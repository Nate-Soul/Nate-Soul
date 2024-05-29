"use client";

import CountUp from "react-countup";
import { Smile, CheckCircle, Calendar } from "lucide-react";

import { statsType } from "@/types/types";
// import { statData } from "@/utils/data";

//framer motion
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Stats = () => {

  const statData: statsType = [
    {
      id: 1,
      name: "Satisfied Clients",
      amount: 7,
      icon: <Smile size={30} />,
    },
    {
      id: 2,
      name: "Completed Projects",
      amount: 15,
      icon: <CheckCircle size={30} />,
    },
    {
      id: 3,
      name: "Years of Experience",
      amount: 4,
      icon: <Calendar size={30} />,
    },
];
  

  return (
    <div id="stats" className="py-6 bg-background dark:bg-foreground text-foreground dark:text-background">
      <div className="container">
        <motion.div 
          className="grid grid-cols-12 shadow dark:shadow-primary text-inherit rounded-3xl p-4"
          variants={slideIn("up", "spring", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          {statData.length > 0 &&
            statData.map((statItem) => (
              <div
                key={statItem.id}
                className="col-span-12 py-6 md:py-3 md:col-span-4 flex gap-4 items-center justify-center even:border-y dark:even:border-y-primary md:even:border-y-0 md:even:border-x-2 md:dark:even:border-x-2-primary"
              >
                {statItem.icon}
                <div className="flex flex-col justify-center items-center">
                <CountUp
                    end={statItem.amount}
                    delay={1}
                    duration={4}
                    className="text-xl font-bold text-primary"
                  />
                  <span className="font-medium text-inherit">{statItem.name}</span>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
