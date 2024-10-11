import { Montserrat } from "next/font/google";

import Hero from "../app/sections/hero/Page";
import Client from "../app/sections/clients/Page";
import Services from "../app/sections/services/Page";
import About from "../app/sections/about/Page";

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
      <Client />
    </div>
  );
}
