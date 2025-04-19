import { ReactNode } from 'react';
import clsx from 'clsx';
import WebApp from '@twa-dev/sdk';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ icon, onClick, className = '' }: IconButtonProps) {
  return (
    <button
      onClick={() => {
        WebApp.addToHomeScreen();
        WebApp.HapticFeedback.impactOccurred('light');
        onClick?.();
      }}
      className={clsx(
        'w-9 h-9 flex items-center justify-center rounded-xl text-[#ff0000] hover:text-white transition-colors',
        className
      )}
    >
      {icon}
    </button>
  );
}
