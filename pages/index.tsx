import Hero from "@/components/hero/hero";
import Work from "../components/work/work";
import Contact from "../components/contact/contact";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main>
      <Hero toggle={false} />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
