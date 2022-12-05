import React from 'react';
import './App.css';
import ThemeContextToggle from './ThemeContextToggle';
import { ThemeProvider } from './context/ThemeContext';


export const ThemeContext = React.createContext();

function App() {

  return (
      <ThemeProvider>
        <ThemeContextToggle />
      </ThemeProvider>
  );
}

export default App;
