import { Montserrat } from "next/font/google";

// Landing Page Sections 
import Hero from "../app/sections/hero/Page";
import Client from "../app/sections/clients/Page";
import Services from "../app/sections/services/Page";
import About from "../app/sections/about/Page";
import Projects from "../app/sections/projects/page";
import TestimonialCarousel from "@/app/sections/testimonials/page";

const roboto = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {

  return (
    <div className={`${roboto.className} bg-background`}>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Client />
      <TestimonialCarousel />
    </div>
  );
}
