import ListCard from '../components/ListCard';
import ListRow from '../components/ListRow';
import ShowCard from '../components/ShowCard';
import { SquarePlus } from '@gravity-ui/icons';

export default function Home() {
  return (
    <div className="w-full px-4 py-4 flex flex-col gap-[2px]">
      {/* ShowCard сверху */}
      <ShowCard
        image={
          <img
            src="/cards/poster.png"
            alt="Poster"
            className="w-full h-full object-cover"
          />
        }
        season={1}
        totalSeasons={3}
        episode={2}
        totalEpisodes={10}
      />

      {/* Горизонтальная синяя карточка */}
      <ListRow
        image={
          <img
            src="/cards/now.png"
            alt="Watching"
            className="w-full h-auto"
          />
        }
        title="Смотрю сейчас"
        count={2}
        size="sm"
        align="center"
        className="bg-[#2f8cff] text-white mb-4"
      />

      {/* Сетка из 2 карточек */}
      <div className="grid grid-cols-2 gap-4">
        <ListCard
          title="Просмотрено"
          color="green"
          image={
            <img
              src="/cards/archive.png"
              alt="Archive"
              className="w-full h-auto"
            />
          }
        />
        <ListCard
          title="Буду смотреть"
          color="yellow"
          image={
            <img
              src="/cards/to-watch.png"
              alt="To Watch"
              className="w-full h-auto"
            />
          }
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3 px-3 pt-2">
          <h2 className="text-xl font-bold">Мои списки</h2>
          <button>
            <SquarePlus className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <ListRow
            image={
              <img
                src="/cards/stuff.png"
                alt="Watching"
                className="w-full h-full object-contain"
              />
            }
            title="Лучшие драмы"
            count={23}
            size="lg"
            align="center"
            className="bg-[#252525] text-white"
          />
          <ListRow
            image={
              <img
                src="/cards/stuff.png"
                alt="Watching"
                className="w-full h-full object-contain"
              />
            }
            title="Лучшие комедии"
            count={54}
            size="lg"
            align="center"
            className="bg-[#252525] text-white"
          />
          <ListRow
            image={
              <img
                src="/cards/stuff.png"
                alt="Watching"
                className="w-full h-full object-contain"
              />
            }
            title="Лучшие триллеры"
            count={23}
            size="lg"
            align="center"
            className="bg-[#252525] text-white"
          />
        </div>
      </div>
    </div>
  );
}