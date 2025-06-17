import "@fontsource/urbanist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedAlumni from "./components/FeaturedAlumni";
import NewsAnnouncements from "./components/NewsAnnouncements";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AlumniDashboard from "./components/AlumniDashboard";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedAlumni />
              <NewsAnnouncements />
              <Testimonials />
            </>
          }
        />

        {/* Signup and Login Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/alumnidashboard" element={<AlumniDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
