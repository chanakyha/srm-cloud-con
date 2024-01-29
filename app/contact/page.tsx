import { Instagram, MailIcon, Phone } from "lucide-react";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Contact = () => {
  const contacts = [
    {
      name: "CharanKarthikeyan",
      img: "https://scontent-tir3-1.cdninstagram.com/v/t51.2885-19/419019528_347677191532658_208401818188847340_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-tir3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Zm51VYtO8UAAX9cW-dn&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBPj2LaoFH88pnPmaJTKYlxXvs_hdVhAlO0C6ByPy7D6w&oe=65BC7466&_nc_sid=ee9879",
      designation: "Student Coordinator",
      phone: "+91 99629 37278",
      insta: "_charankarthikeyan_17",
      link: "https://www.instagram.com/_charankarthikeyan_17/",
      mail: "ss8123@srmist.edu.in",
    },
    {
      name: "Raswanth.M.K",
      img: "https://scontent-tir3-1.cdninstagram.com/v/t51.2885-19/412129653_885838076551519_1808552917297353425_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-tir3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MSd2BZIJ_fIAX9r2MKM&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCtDoIdzzS2cxjCycg5wyHiN0rJN-ZpDa0ReyI1ehuT3Q&oe=65BC9094&_nc_sid=ee9879",
      designation: "Student Coordinator",
      phone: "+91 70104 64877",
      insta: "rasz7_/",
      link: "https://www.instagram.com/rasz7_/",
      mail: "mm2438@srmist.edu.in",
    },
  ];

  return (
    <section className="w-full space-y-10 mt-10 p-4 md:p-16 font-montserrat">
      <Head>
        <title>Contact</title>
      </Head>
      <div className='grid grid-cols-1 bg-[url("https://res.cloudinary.com/deibx8nfv/image/upload/v1679303224/texus2k23/bgoverlay_brtru3.png")] bg-contain bg-no-repeat bg-bottom h-full md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {contacts.map((contact, index) => (
          <Card key={index} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default Contact;

interface CardProps {
  contact: {
    name: string;
    img: string;
    designation: string;
    phone: string;
    insta: string;
    link: string;
    mail: string;
  };
}

const Card = ({ contact }: CardProps) => {
  return (
    <div className='w-full h-80 border bg-[url("https://res.cloudinary.com/deibx8nfv/image/upload/v1679303863/texus2k23/eventcard_iemlil.png")] bg-cover bg-center bg-no-repeat rounded-md'>
      <div className="w-full h-full flex flex-col lg:flex-row lg:items-center justify-around p-4 bg-gradient-to-t lg:bg-gradient-to-l from-background/75 to-transparent">
        <div className="w-full hover:scale-105 duration-100 ease-out cursor-pointer lg:w-1/3 flex justify-center rounded-full">
          <Image
            width={100}
            height={100}
            className="rounded-full border-slate-200 border-2 shadow-2xl w-32 h-32 object-cover"
            src={contact.img}
            alt={""}
          />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="text-center mt-4">
            <h1 className="font-medium lg:text-2xl text-ui-primary">
              {contact.name}
            </h1>
            <p className="lg:text-lg">{contact.designation}</p>
          </div>
          <div className="grid grid-cols-2 items-center w-full justify-center gap-4">
            <div className="flex justify-center items-center col-span-1">
              <Phone />
              <a href={`tel:${contact.phone}`} className="text-sm ml-1">
                {contact.phone}
              </a>
            </div>
            <div className="flex justify-center items-center col-span-1">
              <Instagram />
              <a target="_blank" href={contact.link} className="text-sm ml-1">
                {contact.insta}
              </a>
            </div>
            <div className="flex justify-center items-center col-span-2">
              <MailIcon />
              <a href={`mailto:${contact.mail}`} className="text-sm ml-1">
                {contact.mail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
