'use client'
import Link from 'next/link';
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="container w-full mt-10">
      <header className="mb-8">
        <nav className=" gap-4 flex">
          <Link href="/">
            <p className="text-blue-500">Home</p>
          </Link>
          <Link href="/about/page">
            <p className="text-blue-500">About</p>
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
