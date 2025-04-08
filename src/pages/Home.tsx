import ListCard from '../components/ListCard';
import ListRow from '../components/ListRow';

export default function Home() {
  return (
    <div className="w-full px-4 py-4">
      {/* Горизонтальная синяя карточка */}
      <div className="mb-4">
        <ListRow
          image={<img src="/cards/now.png" alt="Watching" className="w-full h-auto" />}
          title="Смотрю сейчас"
          count={2}
          size="sm"
          align="center"
          className="bg-[#2f8cff] text-white mb-4"
        />

      </div>

      {/* Сетка из 2 карточек */}
      <div className="grid grid-cols-2 gap-4">
        <ListCard
          title="Просмотрено"
          color="green"
          image={<img src="/cards/archive.png" alt="Archive" className="w-full h-auto" />}
        />
        <ListCard
          title="Буду смотреть"
          color="yellow"
          image={<img src="/cards/to-watch.png" alt="To Watch" className="w-full h-auto" />}
        />
      </div>
    </div>
  );
}
