export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <div className='mt-[5%] h-full'>{children}</div>
    </div>
  );
}
