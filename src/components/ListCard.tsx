import { ReactNode } from 'react';
import clsx from 'clsx';
import { Squircle } from 'corner-smoothing'

interface ListCardProps {
  title: string;
  image: ReactNode;
  color?: 'green' | 'yellow';
  onClick?: () => void;
  className?: string;
}

export default function ListCard({
  title,
  image,
  color = 'green',
  onClick,
  className = '',
}: ListCardProps) {
  const colors = {
    green: 'bg-black/80 text-green-300 ring-1 ring-green-400',
    yellow: 'bg-black/80 text-indigo-300 ring-1 ring-indigo-400',
  };

  return (
    <Squircle cornerRadius={20} borderWidth={1}>
      <button
        onClick={onClick}
        className={clsx(
          'flex flex-col justify-start relative rounded-[20px] aspect-[4/5] w-full overflow-hidden transition-all hover:ring-2 hover:scale-[1.02]',
          colors[color],
          className
        )}
      >
        <div className="z-10">
          <div className="text-[4vw] font-bold pt-4">{title}</div>
        </div>

        <div className="absolute bottom-[-35%] left-1/2 -translate-x-1/2 w-[155%] z-0 pointer-events-none">
          {image}
        </div>
      </button>
    </Squircle>
  );

}