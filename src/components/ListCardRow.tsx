import { ReactNode } from 'react';
import clsx from 'clsx';
import { ChevronRight } from '@gravity-ui/icons';
import { Squircle } from 'corner-smoothing'

interface ListCardRowProps {
  title: string;
  count: string;
  image: ReactNode;
  color?: 'green' | 'yellow';
  onClick?: () => void;
  className?: string;
}

export default function ListCardRow({
  title,
  count,
  image,
  color = 'green',
  onClick,
  className = '',
}: ListCardRowProps) {
  const colors = {
    green: 'text-[#A2ADD0] bg-[#a2add0]',
    yellow: 'text-[#A2ADD0] bg-[#a2add0]',
  };

  return (
    <Squircle cornerRadius={16} borderWidth={1}>
      <div className={clsx('p-[1px]', colors[color])}>
        <Squircle cornerRadius={16} borderWidth={1}>
          <div className="absolute w-[144px] h-[144px] bg-[#a2add0] opacity-75 blur-[96px] rounded-full top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <button
            onClick={onClick}
            className={clsx(
              'w-full flex items-center justify-between transition-all h-16 px-2 py-2 bg-black overflow-hidden',
              colors[color],
              className
            )}
          >
            <div className="flex-1 flex items-center overflow-visible pl-4">
              {/* квадратная картинка слева */}
              <div className="scale-[3.5] w-12 h-12">
                {image}
              </div>

              <div className='flex-1 align-baseline text-center'>
                {title}
              </div>
            </div>

            <div className="flex items-center justify-end gap-0.5 w-12 h-12 font-normal pr-3">
              <span className="">{count}</span>
              <ChevronRight />
            </div>



          </button>
        </Squircle>
      </div>
    </Squircle>
  );

}