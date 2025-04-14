import IconButton from './IconButton';
import { Magnifier, NutHex } from '@gravity-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  return (
    <div className="absolute top-0 left-0 right-0 z-50 pt-safe-top backdrop-blur-xl bg-black/80 rounded-b-[32px]">
      <div className="flex items-center pt-12 pb-4 px-6 ">
        {/* Лупа слева */}
        <Magnifier className="text-gray-400 mr-2 size-[18px]" />

        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Поиск по моему контенту"
          className="flex-1 bg-transparent outline-none text-gray-400 placeholder-zinc-400 text-[16px] font-medium"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Шестерёнка справа */}
        <IconButton icon={<NutHex />} />
      </div>
    </div>
  );
}
