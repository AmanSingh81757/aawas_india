import * as React from "react"
import apartment1 from "/public/apartment1.jpg"
import apartment2 from "/public/apartment2.jpg"
import apartment3 from "/public/apartment3.jpg"
import apartment4 from "/public/apartment4.jpg"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function HeroSection() {
    return (
      <main className="flex items-center justify-center px-auto md:px-4 py-6 max-h-82 max-w-screen-2xl">
        <Carousel className="flex items-center justify-center">
            <CarouselContent >
                <CarouselItem key={1} className="flex items-center justify-center h-{700px} w-{1400px}" >
                    <Image src={apartment1} alt="Apartment 1" />
                </CarouselItem>
                <CarouselItem key={2} className="flex items-center justify-center">
                    <Image src={apartment2} alt="Apartment 2" height={700} width={1400}/>
                </CarouselItem>
                <CarouselItem key={3} className="flex items-center justify-center">
                    <Image src={apartment3} alt="Apartment 3" height={700} width={1400}/>
                </CarouselItem>
                <CarouselItem key={4} className="flex items-center justify-center">
                    <Image src={apartment4} alt="Apartment 4" height={700} width={1400}/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </main>
    );
  }
