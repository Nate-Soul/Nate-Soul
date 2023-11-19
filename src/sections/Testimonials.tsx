import Image from "next/image"

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container grid grid-cols-12 gap-5">
        <header className="col-span-4">
          <h2 className="text-4xl font-bold leading-snug mb-8 capitalize">
            <span className="uppercase text-sm text-main-500">
              Testimonials
            </span> <br />
            What my <br /> clients are saying <br /> about me
          </h2>
        </header>
        <div className="card col-span-8 relative">
            <div 
              className="absolute z-10 -bottom-3 right-6 flex"
            >
                <button 
                  className="inline-flex justify-center items-center bg-main-500 text-white px-3 py-1 shadow-sm shadow-white rounded-l-2xl"
                >
                  Prev
                </button>
                <button
                  className="inline-flex justify-center items-center bg-main-500 text-white px-3 py-1 shadow-sm shadow-white rounded-r-3xl">Next</button>
            </div>
            <div className="rounded-3xl bg-white shadow flex flex-col gap-8 p-5">
                <div className="flex justify-between items-start">
                    <figure className="flex gap-3 items-center">
                        <Image src="/assets/images/testimonees/avatar.jpg" alt="testimonees name" height="70" width="70" className="rounded-full"/>
                        <figcaption>
                            <h5>John Doe</h5>
                            <p>CEO, Joe Enterprises</p>
                        </figcaption>
                    </figure>
                    <span className="bi-chat-square-quote-fill text-5xl text-main-500"></span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
