import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 border-b border-blue-150 relative z-50">
      <div className="w-full px-8 py-3.5 flex justify-between items-center">


    {}
    <div className=" md:flex gap-8 text-base font-medium text-lime-500">Fitzone</div>
       {  
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
           <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-900 to-blue-900 shadow-md shadow-blue-900" />
        </div>
           }

        {}
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-600" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {["Home", "Programs", "Solution", "Trainers","Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT: buttons */}
        <div className="flex items-center gap-2.5">
        { /*  <button className="bg-white border border-gray-200 rounded-lg px-5 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition">
            Sign Up
          </button> */}
          <button className="bg-lime-500 rounded-lg px-5 py-2 text-base font-medium text-white shadow-md shadow-white-300 hover:bg-green-800 transition">
            Join Now
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-60 bg-amber-50 px-5 py-5 flex flex-col gap-4 shadow-lg rounded-br-xl md:hidden">
          {["Home", "Products", "Solution", "Pricing", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;