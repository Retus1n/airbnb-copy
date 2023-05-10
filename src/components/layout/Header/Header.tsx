import { FC } from 'react';
import { User } from '@prisma/client';
import { Container, Logo, Search } from '@/layout';
import UserMenu from '../UserMenu/UserMenu';
import Categories from '@/components/sections/Categories/Categories';

interface HeaderProps {
  currentUser?: User | null;
}

export const Header: FC<HeaderProps> = ({ currentUser }) => (
  <div className='fixed w-full bg-white  z-20 shadow-sm '>
    <div className='py-4 border-b-[1px] border-b-bgPrimary'>
      <Container>
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
    <Categories />
  </div>
);
