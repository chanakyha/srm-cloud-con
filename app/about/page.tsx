import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col font-montserrat items-center justify-center">
      <div className="w-full">
        <div className="w-full bg-[url('https://res.cloudinary.com/deibx8nfv/image/upload/v1679303224/texus2k23/bgoverlay_brtru3.png')] bg-center lg:bg-right bg-cover bg-no-repeat">
          <div className="p-4 md:p-16 max-w-6xl mx-auto">
            <h1 className="text-left text-2xl text-foreground font-semibold underline underline-offset-8 decoration-ui-primary">
              About
            </h1>
            <p className="text-foreground/70 text-justify mt-3 text-base">
              Welcome to Cloud Con 24, the pinnacle intercollege cloud computing
              event hosted by SRM Institute of Science and Technology&apos;s
              Department of Computer Science and Engineering on February 17,
              2024. This one-day extravaganza is a celebration of cloud
              technology, fostering intellect, innovation, and creativity. Join
              us for a focused day of activities, including cutting-edge
              technical events like cloud coding competitions and virtualization
              challenges, as well as engaging non-technical pursuits such as art
              exhibitions and gaming competitions—all centered around the theme
              of cloud computing.
            </p>
          </div>
          <div className="flex items-center p-4 md:p-16 justify-center w-full">
            <div className="flex max-w-5xl mx-auto w-full flex-col lg:flex-row items-center justify-between">
              <div className="text lg:w-[60%] mr-[3%] lg:mt-[0px] mt-[50px]">
                <h1 className="text-left text-2xl text-foreground font-semibold underline underline-offset-8 decoration-ui-primary">
                  About SRM Ramapuram
                </h1>
                <p className="lg:text-right text-justify mt-3 text-foreground/70">
                  SRM Institute of Science and Technology (formerly known as SRM
                  University) is one of the top ranking universities in India
                  with over 20,000 students and 1,500 faculty, offering a wide
                  range of undergraduate, postgraduate and doctoral programs in
                  Engineering, Management, Medicine and Health sciences, Science
                  and Humanities.
                </p>
              </div>
              <div className="lg:w-[600px flex relative order-[-1] lg:order-[1]">
                <Image
                  className="rounded-md w-fit h-32"
                  src={require("@/images/event-logo.png")}
                  alt="srm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
