import NavBar from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative z-0 h-screen snap-y snap-mandatory overflow-scroll">
        <NavBar />

        <section className="snap-start">
          <Hero />
        </section>
        <div className="bg-noise noise bg-cover bg-no-repeat bg-center"></div>
      </div>
    </>
  );
}
