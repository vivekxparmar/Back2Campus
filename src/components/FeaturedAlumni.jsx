import { motion } from "framer-motion";
import alumniData from "../data/alumniData"; // Sample alumni data file

const FeaturedAlumni = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-[400] text-center text-gray-700 mb-12">
        Meet Our Inspiring Alumni
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {alumniData.map((alumni, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-xl rounded-2xl p-6 text-center transform perspective-1000 hover:shadow-2xl"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {alumni.name}
            </h3>
            <p className="text-gray-600 text-sm">{alumni.occupation}</p>
            <p className="mt-2 text-gray-700 italic">"{alumni.quote}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAlumni;
