import NavBar from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import React from "react";
import About from "@/components/about";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-scroll bg-[#38384199]">
        <NavBar />

        <div className="painting bg-cover bg-no-repeat bg-center z-0">
          <section className="bg-[#38384199] z-10">
            <Hero />
          </section>
        </div>
        <section>
          <About />
        </section>

        {/* <section>
          <Experience />
        </section>  */}
        {/* <div className="bg-noise noise bg-cover bg-no-repeat bg-center"></div> */}
      </div>
    </>
  );
}
