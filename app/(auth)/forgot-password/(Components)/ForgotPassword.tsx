'use client';

import Link from 'next/link';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

const ForgotPassword: React.FC = () => {
  const submit = (e: React.FormEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();
      // add login logic here
    } catch {
      console.error('Inside Catch');
    }
  };

  return (
    <div className='border-[1px] border-[#ccc] bg-white'>
      <div className='p-9'>
        {/* Image */}
        <div
          className='scale-50 sm:scale-100'
          style={{
            float: 'left',
            width: '300px',
            height: '99px',
            background:
              'url(https://demo.ironhold.net/img/sprites/ImageSprite.png) 0px -701px',
          }}
        />
        {/* Form */}
        <div className='mt-40 text-xl text-[#2e68b1]'>
          <p>Retrieve Password</p>
          <div className='w-full border-b-[1px] border-black' />

          {/* @ts-expect-error form type */}
          <form onSubmit={submit} className='mt-2 flex flex-col gap-2 text-sm'>
            <Input placeholder='email' type='email' />
            <div className='flex items-center justify-end'>
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between bg-[#58585b] p-2 px-10 text-sm text-white sm:flex-row'>
        <Link href='/login'>{'< Back to Login'}</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
