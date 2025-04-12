import { Squircle } from 'corner-smoothing';

interface CounterCardProps {
  value: number;
  max: number;
  label: string;
  onClick?: () => void;
}

export default function CounterCard({ value, max, label, onClick }: CounterCardProps) {
  return (
    <button onClick={onClick} className="w-full h-full">
      <Squircle cornerRadius={12} borderWidth={1} className="w-full">
        <div className='p-[1px] bg-[#7A85A8]'>
          <Squircle cornerRadius={11} borderWidth={1}>
            <div className="aspect-[2/3] w-full h-full flex flex-col justify-between items-center p-[6px] bg-[#98A3C6]">
              <div className="text-[4vw] text-[#191C22] font-normal pt-1">{label}</div>
              <div className="relative text-[24vw] leading-none font-condensed text-[#191C22]">
                {value}
                <span className="absolute top-[15%] right-[-40%] text-[4vw] font-medium text-[#191C22]">
                  /{max}
                </span>
              </div>
              <Squircle cornerRadius={7} borderWidth={1} className="w-full">
                <div className="w-full bg-[#7A85A8] text-[#98A3C6] text-[24px] leading-none font-medium h-8 flex items-center justify-center">
                  +
                </div>
              </Squircle>
            </div>
          </Squircle>
        </div>
      </Squircle>
    </button>
  );
}
