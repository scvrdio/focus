import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    WebApp.requestFullscreen();
    WebApp.disableVerticalSwipes();
    WebApp.setHeaderColor('#000000'); // или любой цвет в hex
    WebApp.lockOrientation;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );

  // return (
  //   <div className="h-screen bg-black flex justify-center">
  //     <div className="w-full bg-black text-white flex flex-col h-screen">
  //       {/* <Header /> */}

  //       <main className="flex-1 overflow-y-auto no-scrollbar">
  //         <Content />
  //       </main>

  //       <Footer />
  //     </div>
  //   </div>
  // );

}
