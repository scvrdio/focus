import CounterCard from './CounterCard';
import { ReactNode } from 'react';
import { Squircle } from 'corner-smoothing'

interface ShowCardProps {
  image: ReactNode;
  season: number;
  totalSeasons: number;
  episode: number;
  totalEpisodes: number;
  onSeasonClick?: () => void;
  onEpisodeClick?: () => void;
}

export default function ShowCard({
  image,
  season,
  totalSeasons,
  episode,
  totalEpisodes,
  onSeasonClick,
  onEpisodeClick,
}: ShowCardProps) {
  return (
    <Squircle cornerRadius={20} borderWidth={1}>
      <div className="flex w-full gap-3 p-2 bg-[#2f8cff] rounded-[20px]">
        {/* Постер: 1/3 */}
        <Squircle cornerRadius={12} borderWidth={1} className='flex-1'>
            {image}
        </Squircle>

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
