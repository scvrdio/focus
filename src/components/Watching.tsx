import { ReactNode } from 'react';
import clsx from 'clsx';
import { Squircle } from 'corner-smoothing'
import { ChevronRight } from '@gravity-ui/icons';
import StackedPosters from "../components/StackedPosters";

interface ListCardProps {
  title: string;
  count: string;
  image: ReactNode;
  color?: 'green' | 'yellow';
  onClick?: () => void;
  className?: string;
}

export default function ListCard({
  title,
  count,
  color = 'green',
  onClick,
  className = '',
}: ListCardProps) {
  const colors = {
    green: 'text-[#A2ADD0] bg-[#090909]',
    yellow: 'text-[#A2ADD0] bg-[#090909]',
  };

  return (
    <Squircle cornerRadius={20} borderWidth={1}>

      <button
        onClick={onClick}
        className={clsx(
          'flex flex-row justify-stretch relative rounded-[18px] h-[172px] w-full overflow-hidden transition-all bg-[#090909]',
          colors[color],
          className
        )}
      >
        <div className="absolute bottom-[-50px] left-1/2 w-[144px] h-[144px] bg-[#a2add0] blur-[96px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-nonе" />
        <div className="w-[65%] h-full flex justify-start">
          <div className="pt-3 pl-4 w-full h-full flex items-end justify-end">
            <StackedPosters
              posters={[
                "/cards/ted-lasso.png",
                "/cards/hotel.png",
                "/cards/kikoriki.png",
              ]}
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="text-[4vw] font-black pt-5">{title}</div>
          <div className="inset-0 flex items-center justify-center text-[45vw] font-condensed rotate-[5deg] translate-y-[-20%] pointer-events-none z-0">
            {count}
          </div>
        </div>

      </button>

      <ChevronRight
        className="absolute bottom-3 right-3 w-5 h-5 text-current opacity-80 z-10"
      />

    </Squircle>
  );

}