import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { Dashboard } from './components/Dashboard';
import { MatchPage } from './components/MatchPage';
import { SlipPage } from './components/SlipPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/match/:id" element={<MatchPage />} />
        <Route path="/slip" element={<SlipPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
