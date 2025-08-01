
'use client'

import { useState } from 'react'
import { MdHome } from "react-icons/md";
import { FaHandsPraying } from "react-icons/fa6";
import { PiHandCoinsFill } from "react-icons/pi";
import { GiByzantinTemple } from "react-icons/gi";
import { PiBowlFoodBold } from "react-icons/pi";
import Link from 'next/link';


const navItems = [
  { label: 'Home', icon: <MdHome />, path: '/' },
  { label: 'Puja', icon: <FaHandsPraying />, path: '/puja' },
  { label: 'Chadhava', icon: <PiHandCoinsFill />, path: '/chadhava' },
  { label: 'Prasad', icon: <GiByzantinTemple />, path: '/prasad'},
  { label: 'Temple', icon: <PiBowlFoodBold />, path: '/temple'}
]

export default function MobileBottomNav() {
  const [active, setActive] = useState('Home')

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md rounded-t-3xl md:hidden">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            onClick={() => setActive(item.label)}
            className="flex flex-col items-center text-sm text-gray-500 hover:text-black"
          >
            <div className={`text-xl mb-1 ${active === item.label ? 'text-black' : 'text-gray-400'}`}>
              {item.icon}
            </div>
            <span className={active === item.label ? 'text-black font-medium' : ''}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
