//import { useState, useEffect } from 'react';
//import axios from 'axios';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import './scripts/AboutBlank.ts';
//import './components/Credits_label.tsx';
//import './components/Version_Label.tsx';
//import { Version_Label } from './components/Version_Label.tsx';
import { Home } from './pages/home.tsx';
import { Settings } from './pages/settings.tsx';
import { Games } from './pages/games.tsx';
import { Chatbot } from './pages/chatbot.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/games" element={<Games />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App
