import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Footer from 'app/Footer';
import Header from 'app/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextCookies = cookies();
  const token = nextCookies.get('token');

  if (token?.value !== 'abcd1234') {
    redirect('/login');
  }

  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <div className='container mx-auto'>
        <Header />
        <div className='h-full'>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
