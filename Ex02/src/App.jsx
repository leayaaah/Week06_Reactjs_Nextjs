import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeState } from './store/themeState';
import ThemeToggle from './components/ThemeToggle';
const AppContent = () => {
  const theme = useRecoilValue(themeState);

  const appStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyles}>
      <h1>Chế độ hiện tại: {theme.toUpperCase()}</h1>
      <ThemeToggle />
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

export default App;