import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../../components/ui/navbar/navbar'), { ssr: false});

export default function LoguedLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Navbar/>
        {children}
      </>
    )
  }