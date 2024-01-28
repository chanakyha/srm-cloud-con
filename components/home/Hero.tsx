"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SRMLogo from "@/images/srm-logo.png";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {}, []);
  return (
    <div className="relative h-fix">
      <div className="relative flex flex-col items-center justify-center h-fix gap-2 w-screen">
        <video
          autoPlay={true}
          muted
          loop
          controls={false}
          width={1920}
          height={1080}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute animate-bounce md:animate-pulse text-foreground/90 md:right-0 bottom-0 text-xs md:bottom-14 md:rotate-90 flex flex-col md:flex-row items-center md:gap-2">
          Scroll Down <ArrowRight className="rotate-90 md:rotate-0 w-3 h-3 " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
