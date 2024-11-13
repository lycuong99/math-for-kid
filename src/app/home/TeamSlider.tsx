"use client";

import { MemberCard } from "@/components/MemberCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  image: string;
}

interface TeamSliderProps {
  members: TeamMember[];
}

export function TeamSlider({ members }: TeamSliderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: isMobile ? 1 : 2,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {members.map((member, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
            <MemberCard name={member.name} image={member.image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
