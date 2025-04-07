import { ReactNode } from 'react';
import clsx from 'clsx';
import { Squircle } from 'corner-smoothing'

interface ButtonProps {
  icon: ReactNode;
  title: string;
  color?: 'outline' | 'yellow' | 'blue' | 'green';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  icon,
  title,
  color: variant = 'outline',
  onClick,
  className = '',
}: ButtonProps) {
  const base =
    'w-full h-16 rounded-[20px] flex items-center gap-2';

  const variants = {
    outline: 'bg-white border border-white text-black hover:text-opacity-75',
    yellow: 'bg-[#FFC300] text-black',
    blue: 'bg-[#2f8cff] text-white',
    green: 'bg-[#2acb47] text-black',
  };

  return (
    <Squircle cornerRadius={20} borderWidth={1}>
      <button onClick={onClick} className={clsx(base, variants[variant], className)}>
        {icon}
        <span className="text-md font-bold leading-tight">{title}</span>
      </button>
    </Squircle>
  );
}
