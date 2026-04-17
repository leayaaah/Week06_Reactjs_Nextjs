import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../store/themeState';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
    {theme === 'light' ? 'Dark' : 'Light'} mode
    </button>
  );
};

export default ThemeToggle;