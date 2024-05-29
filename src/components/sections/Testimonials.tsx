"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

import { useEffect, useRef, useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "../subcomponents/TestimonialCard";
import SectionTitle from "../subcomponents/SectionTitle";
// import TestimonialCardSkeleton from "../subcomponents/TestimonialCardSkeleton";

//types and interfaces
import { testimonialsType } from "@/types/types";

//data
// import { testimonialData } from "@/utils/data";
async function getData(url:string) {
  const res = await fetch(url, { next: { revalidate: 43200 } });

  if(!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();  
}


const TestimonialsSection = () => {
  
  const [testimonialData, setTestimonialData] = useState<testimonialsType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData("https://nate-soul-api.vercel.app/api/testimonials/");
        // const res = await getData("http://localhost:8000/api/testimonials/");
        setTestimonialData(res.data);
      } catch(err) {
        console.error(err);        
      }
    };

    fetchData();
  }, []);
  
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-background text-foreground dark:bg-foreground dark:text-background">
      <div className="container grid grid-cols-12 gap-5">
        <SectionTitle 
          containerStyles="col-span-full sm:col-span-4 text-center sm:text-left" 
          title="Testimonials"
          extendedTitle="What my <br/> clients are saying"
          page={false}
        />
        <div className="col-span-full sm:col-span-8">
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
              {(testimonialData || []).length > 0 && (testimonialData || []).map((testimonialItem, testimonialItemIndex) => (
                <SwiperSlide key={testimonialItemIndex}>
                  <TestimonialCard testimonial={testimonialItem}/>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="absolute z-10 bottom-4 right-0 flex gap-x-2"
            >
              <Button
                id="swiperButtonPrev"
                className="swiper-button-prev btn btn-primary rounded-none rounded-l-3xl"
                size="icon"
                ref={prevRef}
              >
                <span className="sr-only">prev</span>
                <ChevronLeft size={20}/>
              </Button>
              <Button
                id="swiperButtonNext"
                className="swiper-button-next btn btn-primary rounded-none rounded-r-3xl"
                size="icon"
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
