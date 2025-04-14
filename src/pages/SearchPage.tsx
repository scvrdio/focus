import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import SearchElement from "../components/SearchElement";

type SearchResult = {
  kp_id: number;
  title: string;
  poster_url: string;
  rating: number;
  genre: string;
  year: number;
  duration: number;
  description: string;
};

export default function SearchPage() {
  const { search } = useLocation();
  const { q } = qs.parse(search);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!q || typeof q !== "string") return;

    setLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then((res) => res.json())
      .then((data: SearchResult[]) => {
        setResults(data);
        setLoading(false);
      })
      .catch(() => {
        setResults([]);
        setLoading(false);
      });
  }, [q]);

  return (
    <main className="px-6 py-4">
      {/* Заголовок */}
      {q && (
        <h1 className="text-xl text-white font-semibold mb-4">
          Результаты по запросу: «{q}»
        </h1>
      )}

      {/* Загрузка */}
      {loading && <div className="text-white">Загрузка...</div>}

      {/* Нет результатов */}
      {!loading && results.length === 0 && (
        <div className="text-white">Ничего не найдено 😕</div>
      )}

      {/* Карточки */}
      <div className="flex flex-col gap-4">
        {results.map((item) => (
          <SearchElement
            key={item.kp_id}
            kp_id={item.kp_id}
            title={item.title}
            poster_url={item.poster_url}
            rating={item.rating}
            genre={item.genre}
            year={item.year}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
