import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Lift Quotation App",
    desc: "Dynamic lift quote generator with real-time pricing.",
    image: "/images/lift-app.png",
    liveLink: "https://lift-app.example.com",
    githubLink: "https://github.com/user/lift-app",
    tech: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "Music Streaming UI",
    desc: "Spotify-like player UI built in React + Tailwind.",
    image: "/images/music-ui.png",
    liveLink: "https://music-app.example.com",
    githubLink: "https://github.com/user/music-ui",
    tech: ["React", "Tailwind"],
  },
  {
    title: "E-Commerce Dashboard",
    desc: "Dashboard with charts, product mgmt, and insights.",
    image: "/images/dashboard.png",
    liveLink: "https://dashboard.example.com",
    githubLink: "https://github.com/user/ecom-dashboard",
    tech: ["Next.js", "Chart.js", "Tailwind"],
  },
];

const Project = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prev = document.querySelector(".custom-prev");
    prev?.classList.remove("swiper-button-disabled");
  }, []);

  return (
    <section
      className={`relative ${
        darkMode ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      } font-urban px-6 py-24 overflow-hidden`}
    >
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-25 z-0 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-4">
            Explore real-world apps I've crafted — click to experience them
            live.
          </p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-6 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-500 text-white rounded-full transition"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
            }}
            spaceBetween={24}
            loop={true}
            grabCursor={true}
            className="pb-16"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`group block ${
                    darkMode
                      ? "bg-zinc-900/40 text-white border-zinc-700"
                      : "bg-zinc-100 text-zinc-900 border-zinc-300"
                  } border rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.02] backdrop-blur-md max-w-sm mx-auto`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-purple-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-purple-600/10 text-purple-400 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 text-sm font-medium hover:underline"
                      >
                        View Live →
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left-side Arrow */}
          <div className="custom-prev absolute -left-14 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-purple-600 hover:bg-purple-500 text-white rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all">
            <FaArrowLeft className="text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
