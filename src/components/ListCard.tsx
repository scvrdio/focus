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
    green: 'text-[#A2ADD0] bg-[#a2add0]',
    yellow: 'text-[#AAD0A2] bg-[#aad0a2]',
  };

  return (
    <Squircle cornerRadius={20} borderWidth={1}>
      <div className={clsx('p-[1px]', colors[color])}>
        <Squircle cornerRadius={19} borderWidth={1}>
          <button
            onClick={onClick}
            className={clsx(
              'flex flex-col justify-start relative rounded-[18px] aspect-[4/5] w-full overflow-hidden transition-all bg-black',
              colors[color],
              className
            )}
          >
            <div className="z-10">
              <div className="text-[4vw] font-black pt-4">{title}</div>
            </div>

            <div className="absolute bottom-[-180%] left-1/2 -translate-x-1/2 w-[390%] z-0 pointer-events-none">
              {image}
            </div>

          </button>
        </Squircle>
      </div>
    </Squircle>
  );

}