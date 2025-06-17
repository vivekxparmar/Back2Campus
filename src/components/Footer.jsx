import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // ✅ Corrected import

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400">Back2Campus</h2>
          <p className="text-sm text-gray-400 mt-2">
            Connecting Alumni & Students for a Better Future.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="text-2xl hover:text-blue-500 transition-all cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-400 transition-all cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-500 transition-all cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-all cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            {["about", "services", "careers", "contact", "support"].map(
              (link, index) => (
                <li key={index} className="hover:text-white cursor-pointer">
                  <Link to={`/${link}`}>{link.toUpperCase()}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Resources</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            {["blog", "faqs", "community", "privacy-policy", "terms"].map(
              (link, index) => (
                <li key={index} className="hover:text-white cursor-pointer">
                  <Link to={`/${link}`}>{link.toUpperCase()}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Contact Us</h3>
          <p className="mt-3 text-gray-400">
            123 Alumni Street, New York, NY 10001
          </p>
          <p className="text-gray-400">Email: support@back2campus.com</p>
          <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Back2Campus. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
