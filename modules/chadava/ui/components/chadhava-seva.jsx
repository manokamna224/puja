'use client'

import { MdOutlineShoppingBag } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { chadhavaData } from '@/tempdata/chadhava/chadhava-card-list'


export default function ChadhavaDetailsPage({slug}) {
  const prasad = chadhavaData.find((item) => item.slug === slug)

  if (!prasad) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Chadhava not found
      </div>
    )
  }

  return (
    <div className="min-h-fit bg-[#fff7ee] py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div>
          <img
            src={prasad.image}
            alt={prasad.title}
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {prasad.title}
          </h1>
          <p className="text-orange-600 text-lg font-semibold mb-2 flex items-center gap-2">
            <FaMapMarkerAlt />
            {prasad.location}
          </p>
          <p className="text-gray-700 leading-relaxed">{prasad.Description}</p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded shadow font-medium flex items-center gap-2 transition">
            <MdOutlineShoppingBag />
            Book This Prasad
          </button>
        </div>
      </div>
    </div>
  )
}
