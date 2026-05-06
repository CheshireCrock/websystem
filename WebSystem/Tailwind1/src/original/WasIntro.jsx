import { useState } from "react";
import { HiStar } from "react-icons/hi";
import HeroImage from "../assets/introImage.avif";

function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gray-950 text-white min-h-[calc(100vh-65px)] flex items-center px-6 md:px-12 py-12">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="w-full md:w-5/12 space-y-6">

          {/* Tag */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-lime-500 font-medium">
              Train smarter
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-extrabold leading-tight text-gray-100 text-4xl md:text-5xl">
            Transform your body with daily fitness programs
          </h1>

          {/* Subtext */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Join powerful workout sessions, expert trainers, and flexible plans
            designed for beginners and advanced members.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-lime-500 text-gray-800 px-5 py-2 rounded-lg font-medium hover:bg-lime-600 transition">
              Start Today
            </button>

            <button className="bg-gray-950 px-5 py-2 rounded-lg font-medium text-white hover:bg-gray-700 transition">
              View Plans
            </button>
          </div>

          {/* Email CTA (optional - fixed spacing) */}
          {/* 
          <div className="flex max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-lg text-gray-800 outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-lg text-white">
              →
            </button>
          </div>
          */}
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-7/12 flex justify-center md:justify-end">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;