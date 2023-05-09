'use client';

import clsx from 'clsx';
import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps extends ReactTagProps<'input'> {
  id: number;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export const Input: FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  type,
  disabled,
  formatPrice,
  required,
  ...props
}) => (
  <div className='w-full relative'>
    {formatPrice && (
      <BiDollar
        size={24}
        className='text-primaryActive absolute top-5 left-2'
      />
    )}
    <input
      id={id}
      disabled={disabled}
      {...props}
      {...register(id, { required })}
      type={type}
      className={clsx(
        'peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-bgBorder focus:border-bgBorde',
        {
          'pl-9': formatPrice,
          'border-primaryActive focus:border-primaryActive': errors[id],
        }
      )}
    />
    <label
      className={clsx(
        'absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
        {
          'left-9': formatPrice,
        }
      )}
    >
      {label}
    </label>
  </div>
);
