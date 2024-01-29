import {
  ArrowRight,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import SRMLogo from "@/images/srm-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-stone-900">
      <div className="p-4 md:p-16 xl:max-w-7xl xl:mx-auto">
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:justify-between lg:items-start lg:gap-8">
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <Image
              src={SRMLogo}
              alt="logo-image"
              width={1920}
              height={1080}
              className="w-full h-16 bg-foreground p-2 rounded-md "
            />
            <h1 className="text-nav font-bold">Thrive Through Tech</h1>
          </div>
          <div className="flex flex-col gap-4 text-nav md:hidden lg:inline-flex lg:flex-row lg:flex-1 lg:justify-center  lg:text-left lg:gap-8">
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-foreground">Categories</h1>
              <p className="hover:underline cursor-pointer">Events</p>
              <p className="hover:underline cursor-pointer">About</p>
              <p className="hover:underline cursor-pointer">Sponsors</p>
              <p className="hover:underline cursor-pointer">Contact</p>
            </div>
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-foreground">Social Media</h1>
              <p className="hover:underline cursor-pointer">Email</p>
              <p className="hover:underline cursor-pointer">Whatsapp</p>
              <p className="hover:underline cursor-pointer">Instagram</p>
            </div>
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-foreground">Support</h1>
              <p className="hover:underline cursor-pointer">Contact Us</p>
              <p className="hover:underline cursor-pointer">Privacy Policy</p>
              <p className="hover:underline cursor-pointer">
                Terms and Conditions
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/3">
            <h1 className="font-bold">Any Queries ?</h1>
            <div className="flex items-center justify-between w-full p-4 border gap-2 rounded-md shadow-sm">
              <input
                type="text"
                readOnly
                value={"cloudcon24@gmail.com"}
                className="bg-transparent flex-1 outline-none text-sm"
              />
              <Link href={"mailto:cloudcon24@gmail.com"}>
                <ArrowRight className="hover:translate-x-1 transition-all duration-300 ease-in-out cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="p-4 flex flex-col gap-4 md:flex-row md:justify-between md:px-16 xl:max-w-7xl xl:mx-auto ">
        <div className="text-nav flex flex-col text-center md:text-left md:flex-row md:gap-4">
          <p className="text-sm">© 2024 Cloud Con&apos;24</p>•
          <p className="text-sm hover:underline cursor-pointer">
            Designed and Developed by Students of Dept.of CSE CC
          </p>
        </div>
        <div className=" text-nav justify-center flex gap-3 items-center">
          <TwitterIcon className="w-5 h-5 cursor-pointer hover:scale-105 duration-200 transition-all ease-out" />
          <FacebookIcon className="w-5 h-5 cursor-pointer hover:scale-105 duration-200 transition-all ease-out" />
          <LinkedinIcon className="w-5 h-5 cursor-pointer hover:scale-105 duration-200 transition-all ease-out" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
