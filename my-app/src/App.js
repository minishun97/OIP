import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './components/base.css';
import Navbar from './components/Navbar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectJourney from './pages/ProjectJourney';
import Reflection from './pages/Reflection';
import TeamReflection from './pages/reflection/TeamReflection';
import TeamContract from './pages/reflection/TeamContract';
import Questionnaires from './pages/reflection/Questionnaires';
import Prototyping from './pages/reflection/Prototyping';
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
                    <Route path="/reflection/team-reflection" element={<TeamReflection />} />
                    <Route path="/reflection/team-contract" element={<TeamContract />} />
                    <Route path="/reflection/questionnaires" element={<Questionnaires />} />
                    <Route path="/reflection/prototyping" element={<Prototyping />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;