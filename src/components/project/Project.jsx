import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";

const projects = [
  {
    title: "Gemini Clone",
    desc: "Real workd AI Chatboard.",
    image: "/gemini.png",
    liveLink: "https://gemini-clone-lilac-beta.vercel.app/",
    githubLink: "https://github.com/hksharmaji",
    tech: ["ReactJS", "react-icons", "gemini API", "Tailwind"],
  },

  {
    title: "Pizza Shoap",
    desc: "Real workd AI Chatboard.",
    image: "/pizza-shop.png",
    liveLink: "https://hksharmaji.github.io/pizzashop/",
    githubLink: "https://github.com/hksharmaji",
    tech: ["ReactJS", "react-icon", "redux store", "Tailwind"],
  },
  {
    title: "Quiz App",
    desc: "Real workd Quiz App .",
    image: "/quiz-app.png",
    liveLink: "https://hksharmaji.github.io/Quiz-App/",
    githubLink: "https://github.com/hksharmaji",
    tech: ["ReactJs", "reducer", "Tailwind"],
  },
];

const Project = () => {
  // const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prev = document.querySelector(".custom-prev");
    prev?.classList.remove("swiper-button-disabled");
  }, []);

  return (
    <Element name="project">
      <section
        className={`relative bg-zinc-950 text-white
         font-urban px-6 py-24 overflow-hidden`}
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
                    className={`group block my-10
                    
                        "bg-zinc-900/40 text-white border-zinc-700"
                       
                     border rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.02] backdrop-blur-md max-w-sm mx-auto`}
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
            <div className="custom-prev absolute top-2 sm:left-4 md:-left-6 lg:-left-14 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-purple-600 hover:bg-purple-500 text-white rounded-full flex items-center justify-center shadow-md cursor-pointer transition-all">
              <FaArrowLeft className="text-lg" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Project;
