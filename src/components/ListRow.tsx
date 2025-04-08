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
                    size === 'lg' ? 'h-24 px-2 py-2 ' : 'h-16 px-2 py-2',
                    className
                )}
            >
                <div className="flex-1 flex items-center gap-3">
                    {/* квадратная картинка слева */}
                    <Squircle cornerRadius={12} borderWidth={1} className={clsx(size === 'lg' ? 'w-[80px] h-[80px]' : 'w-12 h-12')}>
                        <div className=" overflow-hidden rounded-xl flex items-center justify-center">
                            {image}
                        </div>
                    </Squircle>

                    <div className={clsx('flex-1 text-white', size === 'lg' ? 'text-left' : align === 'center' && 'text-center')}>
                        {title}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-1 text-white w-12 h-12">
                    <span className="">{count}</span>
                    <ChevronRight />
                </div>
            </button>
        </Squircle>
    );
}
