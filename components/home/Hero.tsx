import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative h-fix">
      <div className="relative flex flex-col items-center justify-center h-fix gap-2 w-screen p-4">
        <h1 className="text-center text-3xl font-bold md:text-5xl lg:text-7xl ">
          Cloud Con'24
        </h1>
        <p className="text-center text-xl md:text-2xl font-medium">
          Admin Dashboard
        </p>

        <Button className="w-full max-w-xl mt-4">Main Website</Button>
      </div>
    </div>
  );
};

export default Hero;
