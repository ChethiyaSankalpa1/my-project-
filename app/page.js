"use client";
import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import Achievement from "./components/Achievement";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each section
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Update active section on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      if (current && window.location.hash !== `#${current}`) {
        window.history.replaceState(null, null, `#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="scroll-smooth">
      <section id="home" ref={(el) => (sectionsRef.current[0] = el)}>
        <Hero />
      </section>

      <section id="about" ref={(el) => (sectionsRef.current[1] = el)}>
        <About />
      </section>

      <section id="pacages" ref={(el) => (sectionsRef.current[2] = el)}>
        <Explore />
      </section>

      <section id="cars" ref={(el) => (sectionsRef.current[3] = el)}>
        <Achievement />
      </section>
    </main>
  );
};

export default Page;
