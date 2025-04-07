import { LuPlus } from 'react-icons/lu';
import Button from './Button';
import WebApp from '@twa-dev/sdk';

export default function Footer() {
    return (
        <div className="px-6 pt-3 pb-8">
            <Button
                icon={<LuPlus size={18} />}
                title="Добавить фильм/сериал"
                color="outline"
                onClick={() => {
                    WebApp.HapticFeedback.impactOccurred('medium');
                }}
            />
        </div>
    );
}
