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
      <Squircle cornerRadius={12} borderWidth={1} className="w-full h-full">
        <div className="aspect-[2/3] w-full h-full bg-white rounded-[12px] flex flex-col justify-between items-center p-0.5">
          <div className="flex flex-col items-center">
            <div className="text-[14px] text-blue-600 font-medium mt-1">{label}</div>
            <div className="text-[48px] leading-none font-bold text-blue-600">
              {value}
              <span className="text-[16px] align-top">/{max}</span>
            </div>
          </div>
          <Squircle cornerRadius={10} borderWidth={1} className="w-full">
          <div className="w-full rounded-[10px] bg-blue-500 text-white text-[24px] leading-none font-bold h-9 flex items-center justify-center">
            +
          </div>
          </Squircle>
        </div>
      </Squircle>
    </button>
  );
}
