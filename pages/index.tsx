import Hero from "@/components/hero/hero";
import Work from "../components/work/work";
import Contact from "../components/contact/contact";
import About from "@/components/about/about";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Callum Alton: Software Engineer</title>
      </Head>
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}
