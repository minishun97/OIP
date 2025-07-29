import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './components/base.css';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectJourney from './pages/ProjectJourney';
import Reflection from './pages/Reflection';
import AboutUs from './pages/AboutUs';

function App() {
  return (
        <Router>
            <div className="App">
                <div className="navbar-container">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project-journey" element={<ProjectJourney />} />
                    <Route path="/reflection/*" element={<Reflection />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <CTASection />
                <Footer />
            </div>
        </Router>
    );
}

export default App;