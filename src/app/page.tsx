
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MenuSpecials from "../components/MenuSpecials";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuSpecials />
      <Reviews />
    </>
  );
}
