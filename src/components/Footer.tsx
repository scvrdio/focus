import { LuPlus } from 'react-icons/lu';

export default function Footer() {
  return (
    <div className="p-4">
      <button className="w-full flex items-center justify-center gap-2 border border-white text-white rounded-2xl py-3 text-sm font-medium">
        <LuPlus className="w-5 h-5" />
        Добавить фильм/сериал
      </button>
    </div>
  );
}
