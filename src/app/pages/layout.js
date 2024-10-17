import { Montserrat } from "next/font/google";

import Header from "../component/headers/Page";
import Footer from "../component/footer/Page";

const roboto = Montserrat({
   weight: "400",
   subsets: ["latin"],
});

export default function Layout({ children }) {
   return (
      <div className={`${roboto.className} bg-lightWhite`}>
         <div>{children}</div>
         <Footer />
      </div>
   );
}