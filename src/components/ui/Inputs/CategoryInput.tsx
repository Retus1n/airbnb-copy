'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { IconType } from 'react-icons';

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

export const CategoryInput: FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  onClick,
  selected,
}) => (
  <div
    tabIndex={0}
    role='button'
    onClick={() => onClick(label)}
    className={clsx(
      'rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-primaryActive transition cursor-pointer',
      {
        'border-primaryActive': selected,
      }
    )}
  >
    <Icon size={30} />
    <div className='font-semibold'>{label}</div>
  </div>
);
