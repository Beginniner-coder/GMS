'use client'
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <p>© {new Date().getFullYear()} Garage Management System. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="https://www.facebook.com" target="_blank" className="hover:text-gray-400">
            Facebook
          </Link>
          <Link href="https://www.twitter.com" target="_blank" className="hover:text-gray-400">
            Twitter
          </Link>
          <Link href="https://www.instagram.com" target="_blank" className="hover:text-gray-400">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-gray-400">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
