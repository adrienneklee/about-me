import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Projects from './components/Projects';
import { initGA } from './utils/analytics';

function App() {
  useEffect(() => {
    initGA(); // Initialize GA4
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App
