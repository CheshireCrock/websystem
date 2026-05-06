import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white px-6 py-12">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* LEFT: Logo */}
        <div>
          <h5 className="text-lime-500 text-lg font-semibold">Fitzone</h5>
        </div>

        {/* CENTER: Links */}
        <div
          className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm text-gray-300"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {["About", "Classes", "Membership", "Support"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT: Social Icons 
        <div className="flex gap-4 text-gray-300">
          <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
          <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
          <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
        </div>*/}

      </div>

    </footer>
  );
};

export default Footer;