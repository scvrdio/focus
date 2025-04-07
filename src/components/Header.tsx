import IconButton from './IconButton';
import { Magnifier, NutHex } from '@gravity-ui/icons';

export default function Header() {
  return (
    <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="flex items-center rounded-xl px-6 py-2">
        {/* Лупа слева */}
        <Magnifier className="text-gray-400 mr-3" />

        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Поиск по моему контенту"
          className="flex-1 bg-transparent outline-none text-gray-400 placeholder-zinc-400 text-[16px] font-medium"
        />

        {/* Шестёрёнка справа */}
        <IconButton icon={<NutHex />} />
      </div>
    </div>
  );
}
