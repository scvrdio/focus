import { LuPlus } from 'react-icons/lu';
import Button from './Button';
import WebApp from '@twa-dev/sdk';

interface FooterProps {
    variant?: 'home' | 'content';
}

export default function Footer({ variant = 'home' }: FooterProps) {
    return (
        <div className="px-4 pt-3 pb-[32px] fixed bottom-0 left-0 w-full z-50">
            {variant === 'home' ? (
                <Button
                    icon={<LuPlus size={18} />}
                    title="Добавить фильм/сериал"
                    color="outline"
                    onClick={() => {
                        WebApp.HapticFeedback.impactOccurred('medium');
                    }}
                />
            ) : (
                <Button
                    icon={<LuPlus size={18} />}
                    title="Добавить в список"
                    color="outline"
                    onClick={() => {
                        WebApp.HapticFeedback.impactOccurred('medium');
                    }}
                />
            )}
        </div>
    );
}