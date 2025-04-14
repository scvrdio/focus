type SearchElementProps = {
  kp_id: number;
  title: string;
  poster_url: string;
  rating: number;
  genre: string;
  year: number;
  duration: number; // в минутах
  description: string;
};

export default function SearchElement({
  kp_id,
  title,
  poster_url,
  rating,
  genre,
  year,
  duration,
  description,
}: SearchElementProps) {
  return (
    <div
      className="flex gap-4 p-4 rounded-2xl bg-neutral-900 text-white shadow-lg hover:bg-neutral-800 transition"
      key={kp_id}
    >
      {/* Постер */}
      <div className="w-24 h-36 shrink-0 overflow-hidden rounded-lg bg-neutral-700">
        <img
          src={poster_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Текстовая информация */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-base font-semibold leading-snug">{title}</h2>
          <div className="text-sm text-zinc-400 mt-1">
            {genre} · {year} · {duration} мин
          </div>
          <div className="text-sm text-yellow-400 font-medium mt-1">★ {rating.toFixed(1)}</div>
        </div>

        <p className="text-sm text-zinc-300 mt-2 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
