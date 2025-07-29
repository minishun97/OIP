import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import LeftNavbar from '../components/LeftNavbar';
import TeamReflection from '../pages/reflection/TeamReflection';
import TeamContract from '../pages/reflection/TeamContract';
import Questionnaires from '../pages/reflection/Questionnaires';
import Prototyping from '../pages/reflection/Prototyping';
import WeeklyPitchVideos from '../pages/reflection/WeeklyPitchVideos';

const Reflection = () => {
  const location = useLocation();

  return (
    <div className="reflection-container">
      <LeftNavbar />
      
      <div className="content">
        <Routes>
          <Route path="team-reflection" element={<TeamReflection />} />
          <Route path="team-contract" element={<TeamContract />} />
          <Route path="questionnaires" element={<Questionnaires />} />
          <Route path="prototyping" element={<Prototyping />} />
          <Route path="weekly-pitch-videos" element={<WeeklyPitchVideos />} />
        </Routes>
      </div>
    </div>
  );
};

export default Reflection;
