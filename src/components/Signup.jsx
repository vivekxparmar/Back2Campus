import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserGraduate,
  FaUniversity,
  FaCalendar,
  FaBook,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    college: "",
    graduationYear: "",
    course: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const selectChange = (event) => {
    setRole(event.target.value); // Update selected role
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-100 to-green-50 p-4 font-urbanist">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white text-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-300 backdrop-blur-md mt-[70px]"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl text-center mb-6 text-indigo-800">
            Create an Account
          </h2>
        </motion.div>
        <form className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-indigo-500" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-indigo-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-indigo-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <FaUserGraduate className="absolute left-3 top-4 text-indigo-500" />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none ${
                formData.role ? "text-black" : "text-gray-500"
              }`}
              required
            >
              <option value="" disabled hidden>
                Select Role
              </option>
              <option value="Student">Student</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>
          <div className="relative">
            <FaUniversity className="absolute left-3 top-4 text-indigo-500" />
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <FaCalendar className="absolute left-3 top-4 text-indigo-500" />
            <input
              type="number"
              name="graduationYear"
              placeholder="Graduation Year"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="relative">
            <FaBook className="absolute left-3 top-4 text-indigo-500" />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Already have an account? Login */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-black">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
