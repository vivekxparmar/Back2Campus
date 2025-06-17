import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-8 mt-[60px] rounded-3xl shadow-2xl max-w-4xl w-full"
      >
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 drop-shadow-md">
          Write to Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Have any questions? We'd love to hear from you!
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Name */}
          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="relative flex flex-col"
          >
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="mt-2 p-3 rounded-sm border-[1px] border-gray-300 focus:ring-[1.5px] focus:ring-indigo-200 transition-all outline-none"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="relative flex flex-col"
          >
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 p-3 rounded-sm border-[1px] border-gray-300 focus:ring-[1.5px] focus:ring-indigo-200 transition-all outline-none"
            />
          </motion.div>

          {/* Subject */}
          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="relative flex flex-col col-span-1 md:col-span-2"
          >
            <label className="text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter your subject"
              className="mt-2 p-3 rounded-sm border-[1px] border-gray-300 focus:ring-[1.5px] focus:ring-indigo-200 transition-all outline-none"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            whileFocus={{ scale: 1.05 }}
            className="relative flex flex-col col-span-1 md:col-span-2"
          >
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="mt-2 p-3 rounded-sm border-[1px] border-gray-300 focus:ring-[1.5px] focus:ring-indigo-200 transition-all outline-none resize-none"
            ></textarea>
          </motion.div>

          <div className="flex items-center col-span-1 md:col-span-2">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5 accent-black cursor-pointer"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-3 text-black cursor-pointer">
              I agree to the{" "}
              <span className="text-black font-medium cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={isChecked ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!isChecked}
            className={`col-span-1 md:col-span-2 font-semibold py-3 rounded-xl shadow-md transition-all
              ${
                isChecked
                  ? "bg-black text-white hover:bg-black"
                  : "bg-gray-800 text-gray-200 cursor-not-allowed"
              }`}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
