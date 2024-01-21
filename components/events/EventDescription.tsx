"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowBigUp,
  CalendarDays,
  Clock,
  MapPin,
  UserPlus,
} from "lucide-react";
import RegisterEventModal from "./RegisterEventModal";

interface EventDescriptionProps {
  event: EventType;
}

const EventDescription = ({ event }: EventDescriptionProps) => {
  return (
    <div>
      <div className="lg:max-w-7xl lg:mx-auto lg:px-16 lg:pt-16">
        <Image
          alt="event-banner"
          src={event.banner}
          width={1920}
          height={1080}
          className="w-full h-full lg:rounded-lg"
        />
      </div>

      <div className="container-fix">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-lg  md:text-3xl font-semibold">{event.title}</p>
          <RegisterEventModal />
        </div>

        <div className="my-8 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <div className="flex items-center gap-2">
            <CalendarDays className="md:w-8 md:h-8 w-5 h-5 text-ui-primary" />
            <p className="font-medium text-base md:text-lg">Feb 20 2024</p>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="md:w-8 md:h-8 w-5 h-5 text-ui-primary" />
            <p className="font-medium text-base md:text-lg">
              {event.venue ? event.venue : "Venue will be informed later"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="md:w-8 md:h-8 w-5 h-5 text-ui-primary" />
            <p className="font-medium text-base md:text-lg">{event.time}</p>
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="md:w-8 md:h-8 w-5 h-5 text-ui-primary" />
            <p className="font-medium text-base md:text-lg">
              {event.team_size.min} - {event.team_size.max}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Event Description</h1>
          <p className="text-justify text-gray-400 text-base">{event.desc}</p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-8">
          <p className="font-semibold text-xl">
            Entry Fee:{" "}
            <span className="text-ui-primary">₹{event.entry_fee}</span>
          </p>
          <div>
            <p className="font-semibold text-xl">Student Coordinators:</p>
            <div>
              {event.student_co.map(
                (
                  { name, contact }: { name: string; contact: string },
                  index
                ) => {
                  return (
                    <p key={index} className="italic text-gray-400 ">
                      {name}{" "}
                      <span className="text-ui-primary/70 font-medium text-sm">
                        {contact}
                      </span>
                    </p>
                  );
                }
              )}
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl">Faculty Coordinators:</p>
            <div>
              {event.faculty_co.map(
                (
                  { name, contact }: { name: string; contact: string },
                  index
                ) => {
                  return (
                    <p key={index} className="italic text-gray-400 ">
                      {name}{" "}
                      <span className="text-ui-primary/70 font-medium text-sm">
                        {contact}
                      </span>
                    </p>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
