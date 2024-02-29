'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from 'src/components/Button';
import Input from 'src/components/Input';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const submit = async (e: React.FormEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!email || !password) return;
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.message === 'Login Success') {
          // Success
          if (document) {
            document.cookie = 'token=abcd1234';
          }
          toast.success('Login Successful!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'light',
          });
          router.push('/');
        } else {
          throw new Error(data.message || 'Invalid Email or Password');
        }
      } else {
        throw new Error('Invalid Email or Password');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'light',
      });
      console.error(err?.message);
    } finally {
      setLoading(false);
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
          <p>Login</p>
          <div className='w-full border-b-[1px] border-black' />

          {/* @ts-expect-error form type */}
          <form onSubmit={submit} className='mt-2 flex flex-col gap-2 text-sm'>
            <Input
              placeholder='email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <div className='flex items-center justify-between'>
              <label className='flex items-center gap-2'>
                <input type='checkbox' disabled />
                <span>Remember Me</span>
              </label>
              <Button type='submit' disabled={loading}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between bg-[#58585b] p-2 px-10 text-sm text-white sm:flex-row'>
        <div>© {new Date().getFullYear()} Reqo, Inc.</div>
        <Link href='/forgot-password'>Forgot Password</Link>
      </div>
    </div>
  );
};

export default Login;
