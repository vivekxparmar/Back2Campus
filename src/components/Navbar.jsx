import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/"
            className="text-2xl font-semibold text-blue-800 tracking-wide "
          >
            Back2Campus
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-base font-medium">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              Events
            </Link>
            <Link
              to="/contactform"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              Contact
            </Link>
            <Link
              to="/alumnidashboard"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              Alumni
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            {/* <Link
              to="/signup"
              className="px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-800 transition"
            >
              Join Now
            </Link> */}

            <Link
              to="/login"
              className="px-4 py-2 border border-blue-700 text-blue-700 text-sm font-medium rounded-md shadow-md hover:bg-blue-700 hover:text-white transition"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-3 px-5 absolute w-full top-14 left-0 flex flex-col items-center space-y-4 text-base font-medium">
          <Link to="/about"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            About
          </Link>
          <Link to="/alumni"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Alumni
          </Link>
          <Link to="/events"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Events
          </Link>
          <Link to="/contact"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Contact
          </Link>
          <div className="mt-2 w-full flex flex-col items-center space-y-3">
            <Link
              to="/Signup"
              className="w-4/5 text-center px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-800 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              Join Now
            </Link>
            <Link
              to="/Login"
              className="w-4/5 text-center px-4 py-2 border border-blue-700 text-blue-700 text-sm font-medium rounded-md shadow-md hover:bg-blue-700 hover:text-white transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
