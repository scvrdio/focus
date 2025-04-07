import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-4 pt-2">
        <h1 className="text-2xl font-bold">Главная страница</h1>
        <p className="text-gray-400">Здесь будут списки, карточки и всё остальное</p>
      </div>
    </div>
  );
}
