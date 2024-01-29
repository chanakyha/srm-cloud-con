import BG from "@/images/eventsbar-bg.jpg";
import { cn } from "@/lib/utils";
import {
  Gamepad2Icon,
  GitCompare,
  LucideIcon,
  PencilRuler,
  TerminalSquareIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const EventsBar = () => {
  return (
    <div className="h-full w-screen relative bg-background">
      <Image
        src={BG}
        alt="bg-image"
        width={1920}
        height={1080}
        className="w-full h-full absolute top-0 -z-0 opacity-20 object-cover object-center"
      />
      <div className="container-fix">
        <h1 className="text-center text-2xl font-semibold underline underline-offset-8 decoration-ui-primary">
          Events Category
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container-fix md:items-stretch px-0 md:px-16 xl:max-w-6xl">
          <Card
            title="Technical Events"
            Icon={TerminalSquareIcon}
            description="Technical events are forums or symposiums dedicated to exploring various facets of technology, innovation, and advancements specific to industries. These gatherings offer a platform for professionals, experts, enthusiasts, and industry leaders to convene, exchange insights, and deliberate on the latest trends and progressions within their respective domains."
          />
          <Card
            title="Non Technical Events"
            Icon={Gamepad2Icon}
            description="Non-technical events are gatherings or conferences that emphasize diverse aspects outside the realm of technology, encompassing fields such as arts, culture, entertainment, and other non-specialized domains. These events provide platforms for individuals from various backgrounds, including artists, creatives, enthusiasts, and leaders, to converge, exchange ideas, and explore the latest trends and innovations in their respective non-technical domains. They serve as opportunities to foster collaboration, share insights, and celebrate creativity across a wide spectrum of interests."
          />
        </div>
      </div>
    </div>
  );
};

export default EventsBar;

interface CardProps {
  className?: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const Card = ({ className, title, description, Icon }: CardProps) => {
  const ICON = Icon;

  return (
    <div
      className={cn(
        className,
        "group hover:shadow-white/10 relative cursor-pointer overflow-hidden bg-background px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:rounded-lg sm:px-10"
      )}
    >
      {/* <span className="absolute top-10 z-0 h-20 w-20 invisible group-hover:visible rounded-full bg-ui-primary transition-all duration-700 group-hover:scale-[30]"></span> */}
      <div className="relative z-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-ui-primary transition-all duration-300 group-hover:bg-ui-primary/90 group-hover:border group-hover:border-foreground/80">
            <ICON className="h-10 w-10 text-secondary transition-all" />
          </span>

          <p className="space-y-6 text-center md:text-left font-semibold text-base line-clamp-2 leading-7 text-foreground transition-all duration-300 group-hover:text-foreground/90">
            {title}
          </p>
          <Link href={"/events"}>
            <Button
              className="lg:ml-auto group-hover:text-foreground/90"
              variant={"secondary"}
            >
              Explore
            </Button>
          </Link>
        </div>
        <div className="space-y-6 pt-5 text-sm text-justify text-foreground transition-all duration-500 group-hover:text-foreground/90">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
