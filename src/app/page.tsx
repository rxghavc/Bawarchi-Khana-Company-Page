
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MenuSpecials from "../components/MenuSpecials";
import Reviews from "../components/Reviews";
import Delivery from "../components/Delivery";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuSpecials />
      <Reviews />
      <Delivery />
      <FAQs />
      <Contact />
    </>
  );
}
