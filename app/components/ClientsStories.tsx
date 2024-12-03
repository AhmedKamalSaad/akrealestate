"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { stories } from ".";

const ClientsStories = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <motion.section
    initial={{opacity:0,translateX:"-100%"}} 
    whileInView={{opacity:1,translateX:0}} 
    transition={{duration:1}}
    viewport={{once:true}}
    className="mx-auto pb-4 mt-16">
      <h1 className="tracking-widest text-xl text-black font-thin lg:text-2xl mb-8 text-center ">
      CLIENTS STORIES
      </h1>
      <div className="w-[95%] mx-auto bg-slate-900">
        <Carousel
          className="w-3/4 max-w-screen-2xl mx-auto"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className=" p-0 ">
                <div>
                  <Card className="rounded-none bg-transparent border-none shadow-none lg:w-3/4 w-full mx-auto">
                    <CardContent className="flex flex-col px-20 py-24 items-center justify-center text-center tracking-wide gap-8  ">
                      <p className="text-lg text-white/90  leading-[35px]">&quot; {story.story} &quot;</p>
                      <p className="text-xl text-rose-500 ">{story.writer}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
};

export default ClientsStories;
