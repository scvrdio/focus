import ProvidersRow from '../components/ProvidersRow';
import DescriptionBlock from '../components/DescriptionBlock';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebApp from '@twa-dev/sdk'; // ← это Telegram SDK
import Footer from '../components/Footer';
import { Squircle } from 'corner-smoothing'


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
        <div className="flex flex-col h-screen w-full text-white">
            {/* Постер + мета-инфа */}
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <Squircle cornerRadius={32} bottomLeftCornerRadius={32} bottomRightCornerRadius={32} topLeftCornerRadius={0} topRightCornerRadius={0} borderWidth={1}>
                    <div className="relative aspect-[2/3] w-full overflow-hidden">
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
                        <div className="relative z-10 h-full flex flex-col items-center justify-evenly pt-safe-top">
                            <div className="text-2xl font-bold pt-4">Тед Лассо</div>
                            
                            <div className="px-[25%]">
                            <Squircle cornerRadius={12} borderWidth={1}>
                                <img
                                    src="/cards/ted-lasso.png"
                                    alt="Постер"
                                    className="w-full h-auto mb-4"
                                />
                                  </Squircle>
                            </div>
                          
                            <div className="text-center space-y-1">
                                <div className="text-sm font-bold">8.9 · 2020–...</div>
                                <div className="text-sm opacity-70">Драмеди</div>
                                <div className="text-sm opacity-70">3 сезона, 34 серии</div>
                            </div>
                            <ProvidersRow />
                        </div>

                    </div>
                </Squircle>
                <DescriptionBlock
                    text={`Тренер по американскому футболу Тед Лассо получает должность главного тренера в английской футбольной команде. Ничего не понимая в этом виде спорта, Тед приступает к своим новым обязанностям со всем присущим ему энтузиазмом.`}
                />
            </main>
            <Footer variant='content' />
        </div>
    );
}
