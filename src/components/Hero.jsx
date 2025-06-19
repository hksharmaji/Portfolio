import React from "react";

const Hero = () => {
  return (
    <section className="relative font-urban bg-zinc-900 text-white min-h-screen px-6 py-20 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Animated 3D Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-purple-500 via-indigo-600 to-indigo-800 rounded-full blur-[200px] opacity-30 animate-pulse absolute top-[-200px] left-[-200px]"></div>
        <div className="w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400 via-purple-600 to-fuchsia-500 rounded-full blur-[120px] opacity-20 animate-spin-slow absolute bottom-[-100px] right-[-150px]"></div>
      </div>

      {/* Hero Content */}
      <div className="z-10 max-w-4xl text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          Building Bold, Scalable <br />
          <span className="text-purple-500">Full‑Stack Web Experiences</span>
        </h1>

        <p className="text-zinc-400 max-w-xl mx-auto text-lg sm:text-xl">
          I’m Harish Sharma — a Full‑Stack Developer focused on performance,
          scalability, and stunning UI. I build modern apps with React, Node.js,
          and beyond.
        </p>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf" // Replace with your resume path
            download
            className="inline-block px-8 py-4 text-lg font-semibold rounded-full border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
