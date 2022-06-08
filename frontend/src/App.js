import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Questions from './pages/Questions.jsx';
import Results from './pages/Results';
import Login from './pages/Login';

import { TypographyStylesProvider } from '@mantine/core';

export const TotalsContext = React.createContext();

const initialScores = {
  frontend: {},
  css: {},
  runtime: {},
  database: {},
  devops: {},
};

function App() {
  const [totalScores, setTotalScores] = useState(initialScores);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const totals = {
    totalScores,
    setTotalScores,
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
  };

  return (
    <TypographyStylesProvider>
      <TotalsContext.Provider value={totals}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/results" element={<Results />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TotalsContext.Provider>
    </TypographyStylesProvider>
  );
}

export default App;
