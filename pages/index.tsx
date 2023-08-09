import Hero from "@/components/hero/hero";
import Work from "./work";
import Contact from "./contact";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Hero toggle={false} />
      <About />
      <Work />
      <Contact />
    </>
  );
}
