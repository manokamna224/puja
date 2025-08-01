
'use client'

import { useEffect, useState } from 'react'
import { MdHome } from "react-icons/md";
import { FaHandsPraying } from "react-icons/fa6";
import { PiHandCoinsFill } from "react-icons/pi";
import { PiBowlFoodBold } from "react-icons/pi";
import { GiByzantinTemple } from "react-icons/gi";
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';


const navItems = [
  { label: 'home', icon: <MdHome />, path: '/' },
  { label: 'puja', icon: <FaHandsPraying />, path: '/puja' },
  { label: 'chadhava', icon: <PiHandCoinsFill />, path: '/chadhava' },
  { label: 'prasad', icon: <PiBowlFoodBold />, path: '/prasad'},
  { label: 'temple', icon: <GiByzantinTemple />, path: '/temple'}
]

export default function MobileBottomNav() {
  const [active, setActive] = useState('home')
  const paramsState = usePathname();  

  useEffect(()=>{
    if(paramsState !== '/'){
      setActive(paramsState.slice(1))
    }else {
      setActive('home')
    }
  },[paramsState])

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
