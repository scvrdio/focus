import { ReactNode } from 'react';
import clsx from 'clsx';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ icon, onClick, className = '' }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-9 h-9 flex items-center justify-center rounded-xl text-white hover:text-zinc-300 transition-colors',
        className
      )}
    >
      {icon}
    </button>
  );
}
