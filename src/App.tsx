import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import Home from './pages/Home';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[400px] bg-black text-white min-h-screen">
        <Home />
      </div>
    </div>
  );
}
