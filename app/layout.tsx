import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import '../src/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'IronHold',
  description: 'IronHold',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} bg-[#f3f3f3] font-sans`}>
        <ToastContainer />
        <NextTopLoader shadow={false} showSpinner={false} />
        <div className='h-full'>{children}</div>
      </body>
    </html>
  );
}
