import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Projects } from './components/Organisms/Projects';
import { History, Home } from './components/Organisms';
import { Contact } from './components/Organisms';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/History" exact element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
