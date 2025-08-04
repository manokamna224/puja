'use client';

import { PlayfairDisplay } from '@/app/layout';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FaGlobeAmericas } from "react-icons/fa";
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';


export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center bg-[#FF5722] text-white max-sm:px-4 lg:px-20 py-4 shadow-md">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <FaGlobeAmericas size={24} className="text-white" />
        <span className={`text-lg font-bold ${PlayfairDisplay.className}`}>Puja Nivaran</span>
      </div>

      {/* Center Nav Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <a href="/puja" className="hover:text-yellow-300">Puja</a>
        <a href="/chadhava" className="hover:text-yellow-300">Chadhava</a>
        <a href="/prasad" className="hover:text-yellow-300">Prasad</a>
        <a href="/temple" className="hover:text-yellow-300">Temple</a>
      </div>

      {/* Right Button & Profile */}
      <div className="flex items-center gap-4">
        <button className="whitespace-nowrap md:block hidden text-sm sm:text-base bg-white text-[#8B0000] px-4 py-1 rounded-full font-semibold hover:bg-yellow-100">
          Get Spiritual help
        </button>

        {user ? (
          <div className="flex items-center gap-2">
            <Link href="/profile" className="text-sm hidden sm:block hover:text-yellow-300">
              {user.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1***$3')}
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1 text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full transition-colors"
            >
              <FaSignOutAlt size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        ) : (
          <Link href="/login" className="flex items-center gap-1 text-sm bg-white text-[#8B0000] px-3 py-1 rounded-full hover:bg-yellow-100 transition-colors">
            <FaUserCircle size={16} />
            <span className="hidden sm:inline">Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
