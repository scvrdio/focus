import CounterCard from './CounterCard';
import { ReactNode } from 'react';
import { Squircle } from 'corner-smoothing'
import WebApp from '@twa-dev/sdk';
// import { Link } from 'react-router-dom';
import ListCardRow from '../components/ListCardRow';

interface ShowCardProps {
  image: ReactNode;
  season: number;
  totalSeasons: number;
  episode: number;
  totalEpisodes: number;
  onSeasonClick?: () => void;
  onEpisodeClick?: () => void;
  onPosterClick?: () => void;
}

export default function ShowCard({
  image,
  season,
  totalSeasons,
  episode,
  totalEpisodes,
  onSeasonClick,
  onEpisodeClick,
  onPosterClick,
}: ShowCardProps) {
  return (
    <Squircle cornerRadius={16} borderWidth={1} >
      <div className="flex flex-col w-full gap-[1px] p-[1px] bg-[#FF9D00]">
        <div className="flex flex-row w-full gap-1 p-0.5">
          {/* Постер: 1/3 */}
          <div className="flex-1">
            <button onClick={() => {
              WebApp.HapticFeedback.impactOccurred('medium');
              onPosterClick?.();
            }}
              className="w-full h-full">
              <Squircle cornerRadius={12} borderWidth={1} className="w-full h-full">
                <div className="h-full overflow-hidden rounded-xl flex items-center justify-center">
                  {image}
                </div>
              </Squircle>
            </button>
          </div>

          {/* Сезон: 1/3 */}
          <div className="flex-1">
            <CounterCard
              value={season}
              max={totalSeasons} // заменил total -> max
              label="Сезон"
              onClick={onSeasonClick}
            />
          </div>

          {/* Серия: 1/3 */}
          <div className="flex-1">
            <CounterCard
              value={episode}
              max={totalEpisodes} // заменил total -> max
              label="Серия"
              onClick={onEpisodeClick}
            />
          </div>

        </div>
        <ListCardRow
          title="Смотрю сейчас"
          count="3"
          color="yellow"
          image={
            <img
              src="/cards/now.png"
              alt="Watching now"
              className="w-full h-auto"
            />
          }
        />
      </div>


    </Squircle>
  );
}
