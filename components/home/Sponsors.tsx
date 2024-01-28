import Marquee from "react-fast-marquee";

import GoogleImage from "@/images/sponsors/google.webp";
import MicrosoftImage from "@/images/sponsors/microsoft.png";
import GithubImage from "@/images/sponsors/github.png";
import Image, { StaticImageData } from "next/image";

const Sponsors = () => {
  const sponsorImages = [GoogleImage, MicrosoftImage, GithubImage];
  return (
    <div className="bg-ui-lightBg py-4 px-4 md:px-16">
      <h1 className="text-center text-2xl text-background font-semibold underline underline-offset-8 decoration-ui-primary">
        Sponsors
      </h1>
      <Marquee
        direction="right"
        gradientColor="white"
        className="w-screen h-fit  text-background p-4"
        speed={50}
        pauseOnHover
        autoFill
      >
        <div className="flex items-center gap-8 mt-4 mx-4">
          {sponsorImages.map((image: StaticImageData, index: number) => {
            return (
              <Image
                key={index}
                alt="sponsor-image"
                src={image}
                className="h-fit w-20 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out object-contain"
              />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
