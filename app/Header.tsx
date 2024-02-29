'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from 'src/components/Button';
import Container from 'src/components/Container';

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <nav className='flex items-center justify-between gap-5 py-5'>
        <Link href='/'>IronHold</Link>
        <Button
          onClick={() => {
            if (document) {
              document.cookie = 'token=null';
              router.push('/login');
            }
          }}
        >
          Logout
        </Button>
      </nav>
    </Container>
  );
};

export default Header;
