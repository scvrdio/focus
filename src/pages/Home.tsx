import ListCard from '../components/ListCard';
import ListRow from '../components/ListRow';
import ShowCard from '../components/ShowCard';
import { CirclePlus } from '@gravity-ui/icons';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Player } from "@lottiefiles/react-lottie-player"
import { Squircle } from 'corner-smoothing'

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col h-screen">
      <Header />
      {/* ShowCard сверху */}
      <main className="flex-1 overflow-y-auto no-scrollbar mb-0.5">
        <div className="flex flex-col gap-0.5">
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
            onPosterClick={() => navigate('/content')}
          />

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
        </div>

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
              <CirclePlus className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3 pb-32">
            <ListRow
              image={
                <Squircle cornerRadius={12} borderWidth={1} className="w-[80px] h-[80px] bg-[#1E1E1E]">
                   <div className="flex items-center justify-center w-full h-full">
                  <Player
                    autoplay
                    loop
                    src="/lottie/Drama.json"
                    style={{ width: '75%'}}
                  />
                  </div>
                </Squircle>
              }
              title="Лучшие драмы"
              count={23}
              size="lg"
              align="center"
              className="bg-[#252525] text-white"
            />
            <ListRow
              image={
                <Squircle cornerRadius={12} borderWidth={1} className="w-[80px] h-[80px] bg-[#1E1E1E]">
                   <div className="flex items-center justify-center w-full h-full">
                  <Player
                    autoplay
                    loop
                    src="/lottie/Comedy.json"
                    style={{ width: '75%'}}
                  />
                  </div>
                </Squircle>
              }
              title="Лучшие комедии"
              count={54}
              size="lg"
              align="center"
              className="bg-[#252525] text-white"
            />
            <ListRow
              image={
                <Squircle cornerRadius={12} borderWidth={1} className="w-[80px] h-[80px] bg-[#1E1E1E]">
                   <div className="flex items-center justify-center w-full h-full">
                  <Player
                    autoplay
                    loop
                    src="/lottie/Thriller.json"
                    style={{ width: '75%'}}
                  />
                  </div>
                </Squircle>
              }
              title="Лучшие триллеры"
              count={23}
              size="lg"
              align="center"
              className="bg-[#252525] text-white"
            />

          </div>
        </div>
      </main>
      <Footer variant='home' />
    </div>
  );
}