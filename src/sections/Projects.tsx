import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import omniFood from '@/assets/images/omnifood.png'
import PizzaMama from '@/assets/images/pizza.png'
import eCom from '@/assets/images/ecom.png'
import MarketingAgency from '@/assets/images/marketingAgency.png'

const portfolioProjects = [
  {
    company: "Omni Food",
    year: "2024",
    title: "Omni Food Delivery Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://omnefood-by-ia.netlify.app/",
    image: omniFood,
  },
  {
    company: "Pizza Mama",
    year: "2024",
    title: "Crispy And Delicious Pizzas",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://responsive-pizza-website.vercel.app/",
    image: PizzaMama,
  },
  {
    company: "E-Shop Com",
    year: "2024",
    title: "E-commerce Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "#",
    image: eCom,
  },
  {
    company: "Marketing Agency",
    year: "2024",
    title: "Marketing Agency Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://react-agency-website.netlify.app/",
    image: MarketingAgency,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-20 lg:py-20" id="project">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="Discover how I turned creative visions into impactful digital solutions."
        />
        <div className="flex flex-col mt-10 md:mt-16 gap-10">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky top-16"
              style={{top: `calc(64px + ${projectIndex * 40}px`}}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl mt-2 md:mt-4">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-3 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target='_blank'>
                    <button className="bg-white border border-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:text-emerald-300 hover:border-white/15 hover:bg-transparent duration-700" >
                      <span>View Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-2xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
