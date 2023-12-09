"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

import { useRef, useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "../subcomponents/TestimonialCard";

const TestimonialsSection = () => {

  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatarUrl: "/assets/images/testimonees/avatar.jpg",
      role: "CEO",
      company: "Frivolous Ventures",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum."
    },
    {
      id: 2,
      name: "Jane Doe",
      avatarUrl: "/assets/images/testimonees/avatar.jpg",
      role: "CEO",
      company: "Frivolous Inc",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum."
    },
    {
      id: 3,
      name: "George Doe",
      avatarUrl: "/assets/images/testimonees/avatar.jpg",
      role: "Deisgner",
      company: "Capital Stallion HQ",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam cum alias, consequuntur odio at veniam fugit debitis eligendi quos atque provident magnam dolore esse placeat amet aut quo unde veritatis quis modi aperiam sapiente voluptatibus voluptatum? Deleniti temporibus nemo fugiat expedita saepe id et earum a vero, eligendi rerum."
    },
  ];

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
        <div className="col-span-8">
          <div className="swiper-wrapper py-6 relative">
            <Swiper
              onInit={
                () => setInit(true)
              } 
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
              spaceBetween={30} 
              modules={[Pagination, A11y, Navigation]}
              loop
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              autoplay
              className="relative"
            >
              {testimonials.length > 0 && testimonials.map((testimonial, testimonialIndex) => (
                <SwiperSlide key={testimonialIndex}>
                  <TestimonialCard testimonial={testimonial}/>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="absolute z-10 bottom-4 right-0 flex"
            >
              <Button
                id="swiperButtonPrev"
                className="swiper-button-prev shadow-sm dark:shadow-blue-100 rounded-none rounded-l-3xl"
                size="sm"
                ref={prevRef}
              >
                <span className="sr-only">prev</span>
                <ChevronLeft size={20}/>
              </Button>
              <Button
                id="swiperButtonNext"
                className="swiper-button-next shadow-sm dark:shadow-blue-100 rounded-none rounded-r-3xl"
                size="sm"
                ref={nextRef}
              >
                <span className="sr-only">Next</span>
                <ChevronRight size={20}/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
