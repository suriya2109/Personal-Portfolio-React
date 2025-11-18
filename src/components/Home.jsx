import React, { memo } from "react";
import About from "./About";
import Skills from "./Skills";
import Academics from "./Academics";
import Projects from "./Projects";
import CP from "./CP";
import Contact from "./Contact";

// Home composes all sections into a single, vertically scrollable page
// Each section is wrapped with a snap-start container so the page
// will snap to each section when the user scrolls.
const SectionWrapper = ({ id, children }) => (
  <section
    id={id}
    className="snap-start min-h-screen w-full py-16 flex items-center justify-center"
    aria-label={id}
  >
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 stagger">
      {children}
    </div>
  </section>
);

function Home() {
  return (
    <div className="w-full flex flex-col items-stretch">
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="academics">
        <Academics />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="cp">
        <CP />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </div>
  );
}

export default memo(Home);
