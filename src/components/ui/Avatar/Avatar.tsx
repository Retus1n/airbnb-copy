import Image from 'next/image';
import { FC } from 'react';

export const Avatar: FC = () => (
  <Image
    className='rounded-full'
    height='30'
    width='30'
    alt='Avatar'
    src='/images/avatar.jpg'
  />
);
