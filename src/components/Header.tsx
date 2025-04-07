import { LuSearch, LuSettings } from 'react-icons/lu';

export default function Header() {
  return (
    <div className="">
      <div className="flex items-center rounded-xl px-6 py-2">
        {/* Лупа слева */}
        <LuSearch size={18} className="text-gray-400 mr-3" />

        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Поиск по моему контенту"
          className="flex-1 bg-transparent outline-none text-gray-400 placeholder-zinc-400 text-[16px] font-medium"
        />

        {/* Шестерёнка справа */}
        <button className=" text-gray-400 hover:text-white bg-black">
          <LuSettings size={18} />
        </button>
      </div>
    </div>
  );
}
