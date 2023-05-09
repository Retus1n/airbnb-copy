'use client';

import { FC } from 'react';

interface UserMenuItemProps {
  onClick: () => void;
  label: string;
}

export const UserMenuItem: FC<UserMenuItemProps> = ({ label, onClick }) => (
  <div
    role='button'
    tabIndex={0}
    onKeyPress={onClick}
    className='px-4 py-3 hover:bg-neutral transition font-semibold'
    onClick={onClick}
  >
    {label}
  </div>
);
