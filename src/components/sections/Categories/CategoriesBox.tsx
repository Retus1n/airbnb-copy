'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import clsx from 'clsx';

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export const CategoriesBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'flex flex-col items-center justify-center gap-2 p-3 hover:text-primary transition cursor-pointer',
        {
          'border-b-bgPrimaryActive border-b-2 text-primary': selected,
        }
      )}
    >
      <Icon size={26} />
      <div className='font-medium text-sm'>{label}</div>
    </div>
  );
};
