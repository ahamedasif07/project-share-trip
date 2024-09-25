import Hero from "@/components/hero/Hero";
import Wellcome from "@/components/Wellcome/Wellcome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <Hero></Hero>
        <div className="absolute top-[350px]  w-full">
          <Wellcome></Wellcome>
        </div>
      </div>
    </div>
  );
}
