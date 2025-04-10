import CounterCard from './CounterCard';
import { ReactNode } from 'react';
import { Squircle } from 'corner-smoothing'
import { Link } from 'react-router-dom';

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
    <Squircle cornerRadius={20} borderWidth={1}>
      <div className="flex w-full gap-3 p-2 bg-[#2f8cff] rounded-[20px]">
        {/* Постер: 1/3 */}
        <div className="flex-1">
          <button onClick={onPosterClick} className="w-full h-full">
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
    </Squircle>
  );
}
