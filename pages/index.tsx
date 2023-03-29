import NavBar from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import React from "react";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <div className="relative z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[#383841]">
        <NavBar />

        <section className="snap-start">
          <Hero />
        </section>

        <section className="snap-center">
          <About />
        </section>
        <div className="bg-noise noise bg-cover bg-no-repeat bg-center"></div>
      </div>
    </>
  );
}
