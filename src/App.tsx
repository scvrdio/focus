import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    WebApp.requestFullscreen();
    WebApp.setHeaderColor('#000000'); // или любой цвет в hex
    WebApp.lockOrientation;
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[400px] bg-black text-white min-h-screen">
        <div className="flex flex-col min-h-screen pt-10">
          <Header />
            <main className="flex-1">
             <Home />
            </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
