'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends ReactTagProps<'button'> {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  onClick,
  ...props
}) => (
  <button
    type='button'
    className={clsx(
      'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 border-2 transition w-full bg-primaryActive  text-white py-3 text-md font-semibold',
      {
        'bg-[#ffffff] border-[#000000] text-black': outline,
        'py-1 text-sm font-light border-[1px]': small,
      }
    )}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {Icon && <Icon size={24} className='absolute left-4 top-3' />}
    {label}
  </button>
);
