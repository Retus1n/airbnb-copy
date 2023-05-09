'use client';

import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../utils/assets/images/svgexport-1.svg';

export const Logo: FC = () => (
  <Link href='/'>
    <Image
      src={logoImg}
      alt='logo'
      className='hidden md:block cursor-pointer'
      height='100'
      width='100'
    />
  </Link>
);
