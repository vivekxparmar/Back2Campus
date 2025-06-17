import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialsData from "../data/testimonialsData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl p-6 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white p-8 rounded-3xl shadow-2xl text-center relative"
          >
            <p className="text-lg text-gray-700 italic">
              "{testimonialsData[currentIndex].quote}"
            </p>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">
              {testimonialsData[currentIndex].name}
            </h3>
            <p className="text-gray-500">
              {testimonialsData[currentIndex].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
