import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { IoMdDownload } from "react-icons/io";


export const HeroSection = () => {
  return (
    <div className="py-32 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute mt-[-40px] inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={720} rotation={-55} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
          <StarIcon className="size-20 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={540} rotation={8} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={98} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={545} rotation={160} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s">
          <StarIcon className="size-10 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={130} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-20 text-emerald-300 opacity-15" />
        </HeroOrbit>

        <HeroOrbit size={680} rotation={-10} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-10 text-emerald-300 opacity-15" />
        </HeroOrbit>

        <HeroOrbit size={850} rotation={-30} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="6s">
          <StarIcon className="size-16 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={850} rotation={150} shouldOrbit orbitDuration="15s" shouldSpin spinDuration="6s">
          <StarIcon className="size-16 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={580} rotation={190} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="6s">
          <StarIcon className="size-16 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={680} rotation={80} shouldOrbit orbitDuration="15s" shouldSpin spinDuration="6s">
          <StarIcon className="size-16 text-emerald-300 animate-pulse" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={-85} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
          <StarIcon className="size-10 text-emerald-300 animate-pulse" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[120px]" alt="Person" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm Muhammad Jowel, I specialize in transforming designs into
            functional, high-performing web applications. Let’s discuss your
            next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#project" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:text-emerald-300 duration-700">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a href={'Muhammad-Jowel-CV-Resume.pdf'} download="Muhammad-Jowel-CV-Resume.pdf" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:text-emerald-300 hover:border-white/15 hover:bg-transparent duration-700">
            <span className="font-semibold">Download CV</span>
            <span className="font-semibold"><IoMdDownload /></span>
          </a>
        </div>
      </div>
    </div>
  );
};
