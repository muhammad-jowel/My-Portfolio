import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
