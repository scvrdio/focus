import { ReactNode } from 'react';
import clsx from 'clsx';
import { Squircle } from 'corner-smoothing'
import { ChevronRight } from '@gravity-ui/icons';

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
  image,
  count,
  color = 'green',
  onClick,
  className = '',
}: ListCardProps) {
  const colors = {
    green: 'text-[#E9BD5F] bg-[#E9BD5F]',
    yellow: 'text-[#AAD0A2] bg-[#aad0a2]',
  };

  return (
    <Squircle cornerRadius={20} borderWidth={1}>
      <div className={clsx('p-[1px]', colors[color])}>
      <ChevronRight
  className="absolute bottom-3 right-3 w-5 h-5 text-current opacity-80 z-10"
/>

        <Squircle cornerRadius={19} borderWidth={1}>
          <button
            onClick={onClick}
            className={clsx(
              'flex flex-col justify-start relative rounded-[18px] aspect-[4/5] w-full overflow-hidden transition-all bg-black',
              colors[color],
              className
            )}
          >
            <div className="">
              <div className="text-[4vw] font-black pt-4">{title}</div>
              <div className="text-[20vw] font-condensed -mt-4">
                {count}
              </div>
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