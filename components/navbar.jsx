// components/Navbar.js
import { PlayfairDisplay } from '@/app/layout';
import { FaUserCircle } from 'react-icons/fa';
import { FaGlobeAmericas } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#ed1010] text-white max-sm:px-4 lg:px-20 py-4 shadow-md">
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
        <button className="whitespace-nowrap text-sm sm:text-base bg-white text-[#b71717] px-4 py-1 rounded-full font-semibold hover:bg-yellow-100">
        Get Spiritual help
      </button>

        <FaUserCircle size={24} className="text-white cursor-pointer" />
      </div>
    </nav>
  );
}
