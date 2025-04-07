import './App.css'

import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
  useEffect(() => {
    WebApp.ready(); // Сообщаем Telegram, что всё загружено
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🎬 Telegram Mini App</h1>
      <p>Добро пожаловать! Всё готово к запуску 🚀</p>
      <button
        onClick={() => WebApp.close()}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Закрыть приложение
      </button>
    </div>
  );
}

export default App;
