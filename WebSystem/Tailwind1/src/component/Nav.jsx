import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 border-b border-blue-150 relative z-50">
      
      {/* Top bar */}
      <div className="w-full px-8 py-3.5 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="text-lime-500 text-base font-medium">
          Fitzone
        </div>

        {/* CENTER: Menu (desktop only) */}
        <div
          className="hidden md:flex gap-8 text-base font-medium text-gray-400"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {["Home", "Programs", "Solution", "Trainers", "Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">

          {/* Join button (desktop only) */}
          <button className="hidden md:block bg-lime-500 rounded-lg px-5 py-2 text-base font-medium text-white shadow-md hover:bg-green-800 transition">
            Join Now
          </button>

          {/* Hamburger (mobile only) */}
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
        <div className="absolute top-full left-0 w-full bg-amber-50 px-6 py-5 flex flex-col gap-4 shadow-lg md:hidden">
          {["Home", "Programs", "Solution", "Trainers", "Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;