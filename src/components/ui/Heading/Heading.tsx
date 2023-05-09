import { FC } from 'react';

interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}

export const Heading: FC<HeadingProps> = ({ title, center, subTitle }) => (
  <div className={center ? 'text-center' : 'text-start'}>
    <div className='text-2xl font-bold'>{title}</div>
    <div className='font-ligth text-black/60'>{subTitle}</div>
  </div>
);
