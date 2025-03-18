import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Accomplishments from "./components/Accomplishments";
import TrainingAndInternships from "./components/TrainingAndInternships";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route
          path="/training-and-internships"
          element={<TrainingAndInternships />}
        />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
