import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Programs", "Solution", "Trainers", "Pricing", "Contact"];

  return (
    <nav className="bg-gray-950 border-b border-gray-800 relative z-50">
      
      {/* Top bar */}
      <div className="w-full px-6 md:px-8 py-4 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="text-lime-500 text-lg font-semibold">
          Fitzone
        </div>

        {/* CENTER: Links (desktop) */}
        <div
          className="hidden md:flex gap-8 text-sm font-medium text-gray-400"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-lime-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">
 {/* Join button*/}
  <button className="hidden md:block bg-lime-500 rounded-lg px-5 py-2 text-sm font-medium text-white hover:bg-lime-600 transition">
    Join Now
  </button>

  {/* Login butto */}
  <button className="hidden md:block border border-gray-600 rounded-lg px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:border-gray-400 transition">
    Log In
  </button>

 
  {/* Hamburger */}
  <button
    className="md:hidden text-gray-300"
    onClick={() => setOpen(!open)}
  >
    {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
  </button>
</div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-900 px-6 py-5 flex flex-col gap-4 shadow-lg md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-lime-400 transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Topbar;