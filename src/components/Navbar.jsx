import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Logo */}
        <div className="text-white text-2xl font-bold tracking-tight">
          Harish.dev
        </div>

        {/* Center Nav Links */}
        <ul className="hidden md:flex space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-zinc-300 hover:text-white text-md font-medium inline-block transition-transform duration-300"
              >
                <span className="block transform hover:-translate-y-1 hover:rotate-[5deg] transition duration-300 ease-in-out">
                  {link}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Theme & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-zinc-300 hover:text-white"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <a
            href="#contact"
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition text-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="block text-zinc-300 hover:text-white text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={toggleTheme}
              className="text-zinc-300 hover:text-white"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <a
              href="#contact"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow transition text-sm"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
