import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaAward,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center h-screen 
              bg-gradient-to-b from-[#e0e7ff] to-white text-center p-6 py-[50px] shadow-md"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 drop-shadow-lg text-center">
          About Back2Campus
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4 max-w-[90%] md:max-w-[900px] lg:max-w-[1250px] text-center leading-relaxed">
          Back2Campus is a revolutionary digital platform designed to enhance
          the student experience by bridging the gap between academics, career
          growth, and social engagement.
        </p>
      </motion.section>

      {/* Our Story */}
      <section className="py-20 px-6 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold text-blue-600"
        >
          Our Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-700 mt-4 max-w-3xl mx-auto"
        >
          Back2Campus started as an initiative to make student life more
          accessible and engaging. Today, we help thousands of students navigate
          academics, social opportunities, and career growth.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#f0f4ff] text-center">
        <h2 className="text-4xl font-semibold text-blue-600">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            {
              icon: FaUsers,
              title: "Student Community",
              description:
                "A vibrant space for students to connect and collaborate.",
            },
            {
              icon: FaGlobe,
              title: "Digital Learning",
              description:
                "Access educational resources and interactive courses.",
            },
            {
              icon: FaChartLine,
              title: "Career Growth",
              description:
                "Internships, projects, and mentorship for your future.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center border border-blue-200"
            >
              <service.icon className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-semibold text-purple-600">
          Why Choose Back2Campus?
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            "Seamless Communication with Peers",
            "Access to Digital Learning Resources",
            "Career & Internship Opportunities",
            "Event & Networking Management",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#f0f4ff] p-6 rounded-lg shadow-md border-l-4 border-blue-400"
            >
              {benefit}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#f8f9fa] text-center">
        <h2 className="text-4xl font-semibold text-purple-600">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {[
            {
              icon: FaLightbulb,
              title: "Innovation",
              description:
                "Stay ahead with AI-driven tools and recommendations.",
            },
            {
              icon: FaRocket,
              title: "Speed & Reliability",
              description: "Fast, secure, and accessible 24/7.",
            },
            {
              icon: FaAward,
              title: "Trusted by Students",
              description: "Used by students worldwide with top ratings.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center border border-purple-300"
            >
              <feature.icon className="text-purple-500 text-5xl mb-4" />
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#e0f2fe] text-black text-center">
        <h2 className="text-4xl font-semibold">Join Back2Campus Today!</h2>
        <p className="text-lg mt-2 max-w-xl mx-auto">
          Unlock the best of student life. Sign up now and start your journey!
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#signup"
            className="px-6 py-3 bg-white text-black hover:text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Get Started
          </a>
          <a
            href="#signin"
            className="px-6 py-3 border border-black text-black rounded-lg shadow-md hover:bg-black hover:text-white transition"
          >
            Sign In
          </a>
        </div>
      </section>
    </div>
  );
}
