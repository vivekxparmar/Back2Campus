import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import heroImage from "../assets/hero-image.jpg"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-[120px] gap-[50px] pb-[50px]">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight">
          Welcome to <span className=" text-blue-500">Back2Campus</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          "Reconnect. Collaborate. Grow. Your Alumni Network Awaits."
        </p>
        <p className="mt-6 mb-14 text-gray-700 text-lg">
          Join a thriving community of alumni and students. Expand your network,
          discover career opportunities, and stay connected like never before!
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Join Now
          </Link>
          {/* <a
            href="#signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a> */}
          <a
            href="#learn-more"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg hover:bg-blue-600 hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Hero Image with 3D Effect */}
      <motion.img
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        src="hero-image.jpg"
        alt="Hero"
        className="w-full max-w-md md:max-w-lg mt-10 md:mt-0 shadow-2xl rounded-lg"
      />
    </section>
  );
};

export default HeroSection;
