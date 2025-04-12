import { Squircle } from 'corner-smoothing';

interface CounterCardProps {
  value: number;
  max: number;
  label: string;
  onClick?: () => void;
}

export default function CounterCard({ value, max, label, onClick }: CounterCardProps) {
  return (
    <button onClick={onClick} className="w-full h-full p-0 m-0">
      <Squircle cornerRadius={12} borderWidth={1} className="w-full h-full">
        <div className="aspect-[2/3] w-full h-full rounded-[12px] flex flex-col justify-between items-center p-[2px] bg-black">
          <div className="text-[4vw] text-[#FF9D00] font-normal pt-2.5">{label}</div>
          <div className="relative text-[24vw] leading-none font-condensed text-[#FF9D00]">
            {value}
            <span className="absolute top-[15%] right-[-40%] text-[4vw] font-medium text-[#FF9D00]">
              /{max}
            </span>
          </div>
          <Squircle cornerRadius={10} borderWidth={1} className="w-full">
            <div className="w-full rounded-[10px] bg-[#FF9D00] text-black text-[24px] leading-none font-medium h-8 flex items-center justify-center">
              +
            </div>
          </Squircle>
        </div>
      </Squircle>
    </button>
  );
}
