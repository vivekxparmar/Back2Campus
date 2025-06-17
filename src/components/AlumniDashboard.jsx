import { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUserFriends,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaProjectDiagram,
  FaTools,
  FaHeart,
  FaComment,
  FaUserPlus,
  FaEye,
  FaBell,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AlumniDashboard = () => {
  const [profile, setProfile] = useState({
    name: "Fransisco Lachowski",
    headline: "Software Engineer | Tech Enthusiast",
    email: "chico@email.com",
    phone: "+1 234 567 890",
    education: "B.Tech in IT, GCET (2026)",
    experience: "Software Engineer at Google",
    skills: ["React", "Node.js", "Machine Learning", "Cloud Computing"],
    projects: ["AI Chatbot", "E-commerce Website", "Blockchain App"],
    connections: 1200,
    pendingRequests: 5,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left Side - Profile Info */}
        <div className="flex flex-col items-center text-center border-r md:border-none p-4">
          <img
            src="https://preview.redd.it/how-would-i-achieve-hair-like-this-v0-ocenzbxb37qd1.jpg?width=640&crop=smart&auto=webp&s=5477763144c2542228f86a0deffd66ab5c5b527a"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-500"
          />
          <h2 className="text-2xl font-bold mt-3">{profile.name}</h2>
          <p className="text-gray-500">{profile.headline}</p>
          <div className="mt-4 text-gray-600">
            <p className="flex items-center gap-2">
              <FaEnvelope /> {profile.email}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> {profile.phone}
            </p>
          </div>
          <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:bg-indigo-600">
            <FaEdit /> Edit Profile
          </button>
        </div>

        {/* Right Side - Details */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Education */}
          <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
            <FaGraduationCap className="text-indigo-500 text-2xl" />
            <p className="text-lg font-semibold">{profile.education}</p>
            <button className="ml-auto bg-gray-200 px-2 py-1 rounded-md">
              Edit
            </button>
          </div>

          {/* Experience */}
          <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
            <FaBriefcase className="text-indigo-500 text-2xl" />
            <p className="text-lg font-semibold">{profile.experience}</p>
            <button className="ml-auto bg-gray-200 px-2 py-1 rounded-md">
              Edit
            </button>
          </div>

          {/* Skills */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaTools /> Skills & Endorsements
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="mt-2 bg-gray-200 px-2 py-1 rounded-md">
              Edit
            </button>
          </div>

          {/* Projects */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaProjectDiagram /> Projects & Achievements
            </h3>
            <ul className="list-disc list-inside mt-2">
              {profile.projects.map((project, index) => (
                <li key={index} className="text-gray-600">
                  {project}
                </li>
              ))}
            </ul>
            <button className="mt-2 bg-gray-200 px-2 py-1 rounded-md">
              Edit
            </button>
          </div>

          {/* Connections */}
          <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4 col-span-1 md:col-span-2 relative">
            <FaUserFriends className="text-indigo-500 text-2xl" />
            <p className="text-lg font-semibold">
              {profile.connections} Connections
            </p>
            {profile.pendingRequests > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-2">
                <FaBell /> {profile.pendingRequests} Pending Requests
              </div>
            )}
          </div>

          {/* Interaction Buttons */}
          <div className="bg-white p-5 rounded-xl shadow-md flex justify-around col-span-1 md:col-span-2">
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
              <FaHeart /> Like
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <FaComment /> Message
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
              <FaUserPlus /> Follow
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-purple-500">
              <FaEye /> View Posts
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AlumniDashboard;
