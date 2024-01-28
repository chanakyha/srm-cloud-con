import { StarIcon } from "lucide-react";
import Marquee from "react-fast-marquee";

const EventsDivider = () => {
  return (
    <Marquee
      direction="right"
      gradientColor="black"
      className="w-screen h-fit bg-ui-lightBg text-foreground p-4"
      speed={100}
      pauseOnHover
      autoFill
    >
      <div className="flex items-center gap-4 mx-2">
        <p className="text-lg uppercase text-secondary font-semibold">
          Technical Events
        </p>
        <StarIcon className="text-secondary fill-ui-primary" />
        <p className="text-lg text-secondary uppercase font-semibold">
          Non-Technical Events
        </p>
        <StarIcon className="text-secondary fill-ui-primary" />
        <p className="text-lg text-secondary uppercase font-semibold">
          Hackathon
        </p>
        <StarIcon className="text-secondary fill-ui-primary" />
      </div>
    </Marquee>
  );
};

export default EventsDivider;
