import React, { useEffect, useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // change between themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  // load theme preference saved in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // apply dark mode or light mode class to the body directly
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className="App">
      <CurrencyConverter />
      <button className='theme-toggle' onClick={toggleTheme}>
        Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default App;
