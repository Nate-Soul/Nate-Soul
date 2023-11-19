

const Stats = () => {

    const stats = [
        {
            id: 1,
            name: "Satisfied",
            amount: "3+ Clients",
            icon: "bi-emoji-smile",
        },
        {
            id: 2,
            name:"Completed",
            amount: "8+ Projects",
            icon: "bi-check-circle",
        },
        {
            id: 3,
            name: "Experience",
            amount: "3+ Years",
            icon: "bi-calendar",
        },
    ];

  return (
    <section id="stats" className="pt-10">
      <div className="container">
        <div className=" grid grid-cols-12 shadow shadow-main-500 bg-white rounded-3xl p-4">
            {stats.length > 0 && stats.map(stat => (
                <div 
                    key={stat.id} 
                    className="col-span-4 flex gap-4 items-center justify-center even:border-x-2 even:boder-main-500"
                >
                    <span className={`${stat.icon} text-main-500 text-3xl font-medium`}></span>
                    <div className="flex flex-col items-between">
                        <span>{stat.amount}</span>
                        <span className="font-medium text-main-500">{stat.name}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
