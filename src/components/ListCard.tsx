import { ReactNode } from 'react';
import clsx from 'clsx';

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
        green: 'bg-[#2acb47] text-green-900',
        yellow: 'bg-[#FFC300] text-yellow-800',
    };

    return (
        <button
          onClick={onClick}
          className={clsx(
            'flex flex-col justify-start relative rounded-[20px] aspect-[4/5] w-full overflow-hidden transition-all',
            colors[color],
            className
          )}
        >
          <div className="z-10">
            <div className="text-[.75em] font-black pt-4">{title}</div>
          </div>

          <div className="absolute bottom-[-96px] left-1/2 -translate-x-1/2 w-[150%] z-0 pointer-events-none">
            {image}
          </div>
        </button>
      );
      
}