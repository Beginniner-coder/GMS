'use client'
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg font-bold">
            <span className="text-2xl">GearTech</span> 
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/auth/sign-up" className="text-white hover:underline">
            Sign Up
          </Link>
          <Link href="/auth/sign-in" className="text-white hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
