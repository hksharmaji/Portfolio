import React from "react";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
