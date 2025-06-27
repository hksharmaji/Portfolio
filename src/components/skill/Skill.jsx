import React, { useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVite } from "react-icons/si";
import { Element } from "react-scroll";

const skills = {
  frontend: [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Vite.js", icon: <SiVite /> },
  ],
  backend: [{ name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }],
  tools: [
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
};

const Skill = () => {
  useEffect(() => {
    const fadeItems = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeItems.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Element name="skill">
      <section className="relative bg-zinc-900 text-white font-urban px-6 py-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30 z-0 animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              My Skillset
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Here’s what I bring to the table – beautifully crafted UIs,
              efficient backend logic, and the tools that power modern
              development.
            </p>
          </div>

          {/* Unique Skill Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {/* Frontend - Glowing Card Tiles */}
            <div className="fade-in-up bg-gradient-to-tr from-purple-500/10 via-zinc-800/40 to-zinc-900 p-6 rounded-2xl shadow-inner border border-purple-500/10 ">
              <h3 className="text-xl font-semibold text-purple-400 mb-6">
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-zinc-800/50 hover:bg-zinc-700/50 p-3 rounded-lg transition-all backdrop-blur-sm cursor-default"
                  >
                    <span className="text-purple-400 text-2xl">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend - Tech Stack Block */}
            <div className="fade-in-up bg-zinc-800/30 border border-purple-500/10 backdrop-blur-md p-6 rounded-2xl shadow hover:shadow-purple-500/20 transition">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3 mt-4 cursor-default">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-purple-600/30 transition"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools - Floating Icon Grid */}
            <div className="fade-in-up bg-zinc-900 border border-zinc-700 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Tools & Design
              </h3>
              <div className="flex flex-col gap-4">
                {skills.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/40 hover:bg-zinc-700/30 transition"
                  >
                    <span className="text-purple-400 text-2xl">
                      {tool.icon}
                    </span>
                    <span className="text-base text-zinc-300">{tool.name}</span>
                  </div>
                ))}
              </div>

              {/* Soft floating glow */}
              <div className="absolute -bottom-10 right-[-20px] w-[200px] h-[200px] bg-purple-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skill;
