import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import SearchPage from "./pages/SearchPage";

export default function App() {
  useEffect(() => {
    const platform = WebApp.platform;

    if (platform === 'android' || platform === 'ios') {
      WebApp.expand();
      WebApp.requestFullscreen();
    }
    WebApp.ready();
    WebApp.disableVerticalSwipes();
    WebApp.lockOrientation;

    const userId = WebApp.initDataUnsafe?.user?.id;
    console.log('Telegram User ID:', userId);

    if (userId) {
      fetch("https://your-backend.com/api/auth/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telegram_id: userId,
          initData: WebApp.initData, // лучше отправить и это — для валидации
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log("Ответ от бэка:", data);
        })
        .catch(err => {
          console.error("Ошибка при отправке:", err);
        });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );

}
