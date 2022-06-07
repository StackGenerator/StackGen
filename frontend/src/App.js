import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Questions from './pages/Questions.jsx';
import Results from './pages/Results';

import { TypographyStylesProvider } from '@mantine/core';

function App() {
  return (
    <TypographyStylesProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TypographyStylesProvider>
  );
}

export default App;
