import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    // WebApp.expand();
    // WebApp.requestFullscreen();
    // WebApp.disableVerticalSwipes();
    // WebApp.setHeaderColor('#000000'); // или любой цвет в hex
    // WebApp.lockOrientation;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );

}
