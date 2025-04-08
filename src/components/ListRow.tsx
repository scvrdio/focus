import { ReactNode } from 'react';
import { ChevronRight } from '@gravity-ui/icons';
import clsx from 'clsx';
import { Squircle } from 'corner-smoothing'

interface ListRowProps {
    image: ReactNode;
    title: string;
    count: number;
    size?: 'lg' | 'sm';
    align?: 'center' | 'left';
    className?: string;
}

export default function ListRow({
    image,
    title,
    count,
    size = 'lg',
    align = 'left',
    className = '',
}: ListRowProps) {
    return (
        <Squircle cornerRadius={20} borderWidth={1}>
            <button
                className={clsx(
                    'w-full rounded-[20px] flex items-center justify-between transition-all',
                    size === 'lg' ? 'h-24 px-4 py-4' : 'h-16 px-2 pl-2 pr-0',
                    className
                )}
            >
                <div className="flex-1 flex items-center gap-3">
                    {/* квадратная картинка слева */}
                    <Squircle cornerRadius={12} borderWidth={1}>
                        <div className="w-12 h-12 overflow-hidden rounded-xl flex items-center justify-center">
                            {image}
                        </div>
                    </Squircle>

                    <div className={clsx('flex-1 text-white', align === 'center' && 'text-center')}>
                        {title}
                    </div>
                </div>

                <div className="flex items-center gap-.5 text-white w-12 h-12">
                    <span className="">{count}</span>
                    <ChevronRight />
                </div>
            </button>
        </Squircle>
    );
}
