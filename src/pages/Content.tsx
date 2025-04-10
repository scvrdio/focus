import ProvidersRow from '../components/ProvidersRow';

export default function Content() {
    return (
        <div className="w-full h-full text-white">
            {/* Постер + мета-инфа */}
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-b-[32px]">
                {/* Блюр фона */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/public/cards/ted-lasso.png"
                        alt="Фон"
                        className="w-full h-full object-cover blur-xl scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Контент сверху */}
                <div className="relative z-10 h-full flex flex-col items-center justify-evenly p-2 pt-safe-top">
                    <div className="text-2xl font-bold">Тед Лассо</div>
                    <div className="px-[25%]">
                        <img
                            src="/public/cards/ted-lasso.png"
                            alt="Постер"
                            className="w-full h-auto rounded-2xl mb-4"
                        />
                    </div>
                    <div className="text-center space-y-1">
                        <div className="text-sm font-bold">8.9 · 2020–...</div>
                        <div className="text-sm opacity-70">Драмеди</div>
                        <div className="text-sm opacity-70">3 сезона, 34 серии</div>
                    </div>
                    <ProvidersRow />
                </div>
            </div>
        </div>
    );
}
