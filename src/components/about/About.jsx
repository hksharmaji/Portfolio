import React, { useEffect } from "react";
import { FaCode, FaBolt, FaPalette } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { Element } from "react-scroll";

const cardData = [
  {
    icon: <FaCode className="text-purple-400 text-3xl mb-4" />,
    title: "Clean Code",
    desc: "I write modern, maintainable code with scalable architecture and best practices.",
  },
  {
    icon: <FaPalette className="text-purple-400 text-3xl mb-4" />,
    title: "UI/UX Design",
    desc: "I focus on intuitive, user-centric interfaces with a strong aesthetic sense.",
  },
  {
    icon: <FaBolt className="text-purple-400 text-3xl mb-4" />,
    title: "Performance",
    desc: "Optimizing for fast load times and smooth performance across all devices.",
  },
  {
    icon: <LuMousePointerClick className="text-purple-400 text-3xl mb-4" />,
    title: "Interactive Experience",
    desc: "I integrate subtle animations and feedback to enhance user interaction.",
  },
];

const About = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in-up");
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
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <Element name="about">
      <section className="relative bg-zinc-900 text-white font-urban px-6 py-24 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30 z-0 animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Text */}
          <div className="text-left space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold">About Me</h2>
            <p className="text-lg text-zinc-300">
              Hi, I'm{" "}
              <span className="text-purple-400 font-semibold">
                Harish Sharma
              </span>
              , a{" "}
              <span className="text-purple-400 font-semibold">
                Full-Stack Developer
              </span>{" "}
              who blends design thinking with technical expertise. I specialize
              in building fast, clean, and delightful web applications.
            </p>
            <p className="text-base text-zinc-400">
              I take pride in writing scalable code, crafting intuitive user
              experiences, and optimizing performance across all platforms.
              Whether it’s a landing page or a complex dashboard, I bring
              creativity and clarity to every pixel and function.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Side - Scrollable Card Box */}
          <div className="relative w-full">
            <div className="max-h-[480px] border border-purple-400  rounded-3xl py-2 overflow-y-scroll hide-scrollbar pr-2">
              <div className="flex flex-col gap-6  p-4 mb-4 ">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="fade-in-up bg-zinc-800/30 border border-purple-500/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-all duration-500"
                  >
                    {card.icon}
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-zinc-300 text-sm">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-4 flex justify-center">
              <svg
                className="animate-bounce w-6 h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
