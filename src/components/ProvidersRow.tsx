import { PlayFill } from '@gravity-ui/icons';

export default function ProvidersRow() {
  return (
    <div className="flex justify-around items-center gap-8 px-4 py-3">
      {/* Трейлер */}
      <div className="flex items-center gap-2 text-white">
        <PlayFill className="w-4 h-4" />
        <span className="text-[14px] font-normal font">Трейлер</span>
      </div>

      {/* Платформы */}
      <img src="/icons/kinopoisk.png" alt="Кинопоиск" className="h-8" />
      <img src="/icons/appletv.png" alt="Apple TV+" className="h-8" />
      <img src="/icons/netflix.png" alt="Netflix" className="h-8" />
    </div>
  );
}
