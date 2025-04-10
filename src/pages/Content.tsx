import ProvidersRow from '../components/ProvidersRow';
import DescriptionBlock from '../components/DescriptionBlock';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebApp from '@twa-dev/sdk'; // ← это Telegram SDK


export default function Content() {
    const navigate = useNavigate();
    useEffect(() => {
        // Показать кнопку Telegram с текстом "Назад"
        WebApp.BackButton.show();
        WebApp.BackButton.onClick(() => {
          navigate('/');
        });
      
        // Очистка обработчика при размонтировании
        return () => {
          WebApp.BackButton.offClick(() => navigate('/'));
          WebApp.BackButton.hide();
        };
      }, [navigate]);
    return (
        <div className="w-full h-full text-white">
            {/* Постер + мета-инфа */}
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-b-[32px]">
                {/* Блюр фона */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/cards/ted-lasso.png"
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
                            src="/cards/ted-lasso.png"
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
            <DescriptionBlock
                text={`Тренер по американскому футболу Тед Лассо получает должность главного тренера в английской футбольной команде. Ничего не понимая в этом виде спорта, Тед приступает к своим новым обязанностям со всем присущим ему энтузиазмом.`}
            />
        </div>
    );
}
