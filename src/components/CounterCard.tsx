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
        <div className="aspect-[2/3] w-full h-full bg-white rounded-[12px] flex flex-col justify-between items-center p-[2px]">
          <div className="text-[4vw] text-blue-600 font-medium pt-2.5">{label}</div>
          <div className="relative text-[16vw] leading-none font-condensed text-blue-600">
            {value}
            <span className="absolute top-[15%] right-[-60%] text-[4vw] font-medium text-blue-500">
              /{max}
            </span>
          </div>
          <Squircle cornerRadius={10} borderWidth={1} className="w-full">
            <div className="w-full rounded-[10px] bg-blue-500 text-white text-[20px] leading-none font-bold h-8 flex items-center justify-center">
              +
            </div>
          </Squircle>
        </div>
      </Squircle>
    </button>
  );
}
