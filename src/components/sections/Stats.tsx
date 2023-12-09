"use client";

import CountUp from "react-countup";
import { Smile, CheckCircle, Calendar } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      name: "Satisfied Clients",
      amount: 5,
      icon: <Smile className="text-primary" size={30} />,
    },
    {
      id: 2,
      name: "Completed Projects",
      amount: 10,
      icon: <CheckCircle className="text-primary" size={30} />,
    },
    {
      id: 3,
      name: "Experience Years",
      amount: 3,
      icon: <Calendar className="text-primary" size={30} />,
    },
  ];

  return (
    <section id="stats" className="py-6 bg-white dark:bg-blue-200">
      <div className="container">
        <div className="grid grid-cols-12 shadow shadow-primary bg-background dark:bg-foreground rounded-3xl p-4">
          {stats.length > 0 &&
            stats.map((stat) => (
              <div
                key={stat.id}
                className="col-span-12 md:col-span-4 flex gap-4 items-center justify-center even:border-x-2 even:border-secondary"
              >
                {stat.icon}
                <div className="flex flex-col justify-center items-center">
                  <CountUp
                    end={stat.amount}
                    delay={1}
                    duration={4}
                    className="text-xl font-bold text-primary"
                  />
                  <span className="font-medium text-foreground dark:text-white">{stat.name}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
