import ListCard from '../components/ListCard';

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 px-3 py-4">
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
  );
}
