import React from "react";
import { FaLinkedin, FaGithub, FaDribbble, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo & Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Harish<span className="text-purple-400">.dev</span>
          </h2>
          <p className="text-sm text-gray-400 opacity-55 capitalize font-bold">
            Full stack Developer
          </p>
          <p className="text-sm text-gray-500 mt-4">
            📩 harishkumarsharma6350@gmail.com
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link
                smooth={true}
                to="about"
                className="hover:text-purple-500 transition"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                to="skill"
                className="hover:text-purple-500 transition"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                to="project"
                className="hover:text-purple-500 transition"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                to="contact"
                className="hover:text-purple-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 HarishDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
