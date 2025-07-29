import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import { useEffect } from "react";

export default function Porfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            const children = el.querySelectorAll("*");
            children.forEach((child) => {
              const originalAnimation = child.style.animation;
              child.style.animation = "none";
              child.offsetHeight;
              child.style.animation = originalAnimation;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Project />
    </div>
  );
}
