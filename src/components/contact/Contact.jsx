import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="relative bg-zinc-900 text-white font-urban px-6 py-24 overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30 z-0 animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Heading, Text & CTA */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Let’s Work Together
            </h2>
            <p className="text-zinc-400 text-lg">
              I’m always open to discussing product design work or partnership
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out.
            </p>

            <a
              href="#contact"
              className="inline-block mt-4 bg-purple-500 hover:bg-purple-600 transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* RIGHT: Contact Form */}
          <form
            id="contact"
            className="space-y-6 bg-zinc-800/40 border border-zinc-700 rounded-2xl backdrop-blur-md p-8 shadow-lg"
          >
            {/* Name */}
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                required
              />
            </div>

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-xl font-semibold text-white shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
