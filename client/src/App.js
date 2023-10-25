import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Projects } from './components/Organisms/Projects';
import { Home } from './components/Organisms';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
