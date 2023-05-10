'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { Avatar } from '@/components/ui';
import { UserMenuItem } from './UserMenuItem/UserMenuItem';
import useRegisterModal from '@/components/ui/Modals/hooks/useRegisterModal';
import useLoginModal from '@/components/ui/Modals/hooks/useLoginModal';
import useRentModal from '@/components/ui/Modals/hooks/useRentModal';

interface UserMenuProps {
  currentUser?: User | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const rentModal = useRentModal();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onKeyPress={onRent}
          role='button'
          tabIndex={0}
          onClick={onRent}
          className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral
            transition
            cursor-pointer
          '
        >
          Airbnb your home
        </div>
        <div
          tabIndex={0}
          role='button'
          onKeyPress={toggleOpen}
          onClick={toggleOpen}
          className='
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-bgBorder
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          '
        >
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              <>
                <UserMenuItem label='My trips' onClick={() => {}} />
                <UserMenuItem label='My favorites' onClick={() => {}} />
                <UserMenuItem label='My reservations' onClick={() => {}} />
                <UserMenuItem label='My properties' onClick={() => {}} />
                <UserMenuItem
                  label='Airbnb my home'
                  onClick={rentModal.onOpen}
                />
                <hr />
                <UserMenuItem label='Logout' onClick={() => signOut()} />
              </>
            ) : (
              <>
                <UserMenuItem label='Login' onClick={loginModal.onOpen} />
                <UserMenuItem label='Sign up' onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
