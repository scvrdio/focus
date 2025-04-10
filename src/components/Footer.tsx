import { LuPlus } from 'react-icons/lu';
import Button from './Button';
import WebApp from '@twa-dev/sdk';

interface FooterProps {
    variant?: 'home' | 'content';
}

export default function Footer({ variant = 'home' }: FooterProps) {
    return (
        <div className="px-6 pt-3 pb-8 bg-black/30">
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