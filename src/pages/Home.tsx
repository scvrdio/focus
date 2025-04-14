import ListCard from '../components/ListCard';
import Watching from '../components/Watching';
import ListRow from '../components/ListRow';
import { CirclePlusFill } from '@gravity-ui/icons';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Player } from "@lottiefiles/react-lottie-player"
import { Squircle } from 'corner-smoothing'

export default function Home() {
  // const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col h-screen">
      <Header />
      {/* ShowCard сверху */}
      <main className="flex-1 overflow-y-auto no-scrollbar">

      

        <div className="flex flex-col gap-2 pt-40 pb-4">
          <Watching
            title="Смотрю сейчас"
            count='32'
            color="green"
            image={
              <img
                src="/cards/archive.png"
                alt="Archive"
                className="w-full h-auto"
              />
            }
          />
          
        </div>

        {/* Сетка из 2 карточек */}
        <div className="grid grid-cols-2 gap-4">
          <ListCard
            title="Просмотрено"
            count='120'
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
            count='56'
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
          <div className="flex items-center justify-between mb-2 px-5 py-2">
            <h2 className="text-xl font-bold">Мои списки</h2>
            <button>
              <CirclePlusFill className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3 pb-32">
            <ListRow
              image={
                <Squircle cornerRadius={12} borderWidth={1} className="w-[80px] h-[80px] bg-[#0f0f0f]">
                  <div className="flex items-center justify-center w-full h-full">
                    <Player
                      autoplay
                      loop
                      src="/lottie/Drama.json"
                      style={{ width: '60%' }}
                    />
                  </div>
                </Squircle>
              }
              title="Лучшие драмы"
              count={23}
              size="lg"
              align="center"
              className="bg-[#090909] text-white"
            />
            <ListRow
              image={
                <Squircle cornerRadius={12} borderWidth={1} className="w-[80px] h-[80px] bg-[#0f0f0f]">
                  <div className="flex items-center justify-center w-full h-full">
                    <Player
                      autoplay
                      loop
                      src="/lottie/Comedy.json"
                      style={{ width: '60%' }}
                    />
                  </div>
                </Squircle>
              }
              title="Лучшие комедии"
              count={54}
              size="lg"
              align="center"
              className="bg-[#090909] text-white"
            />
            <ListRow
              image={
                <Squircle cornerRadius={12} borderWidth={1} className="w-[80px] h-[80px] bg-[#0f0f0f]">
                  <div className="flex items-center justify-center w-full h-full">
                    <Player
                      autoplay
                      loop
                      src="/lottie/Thriller.json"
                      style={{ width: '60%' }}
                    />
                  </div>
                </Squircle>
              }
              title="Лучшие триллеры"
              count={23}
              size="lg"
              align="center"
              className="bg-[#090909] text-white"
            />

          </div>
        </div>
      </main>
      <Footer variant='home' />
    </div>
  );
}