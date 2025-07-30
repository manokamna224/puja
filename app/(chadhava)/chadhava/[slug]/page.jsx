'use client'

import { useParams } from 'next/navigation'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'

const chadhavaData = [
  {
    id: 1,
    title: 'Kaal Bhairav Temple Puja',
    location: 'Kaal Bhairav Temple, Varanasi',
    image: '/images/chadhava/chadhava1.jpeg',
    slug: 'kaal-bhairav-temple-puja',
    Description: 'A sacred puja at the Kaal Bhairav Temple, known for its spiritual significance and rituals.',
  },
  {
    id: 2,
    title: 'Sankat Mochan Temple Puja',
    location: 'Sankat Mochan Temple, Varanasi',
    image: '/images/chadhava/chadhava2.jpg',
    slug: 'sankat-mochan-temple-puja',
    Description: 'A revered puja at the Sankat Mochan Temple, dedicated to Lord Hanuman, offering peace and protection.',
  },
  {
    id: 3,
    title: 'Kashi Vishwanath Temple Puja',
    location: 'Kashi Vishwanath Temple, Varanasi',
    image: '/images/chadhava/chadhava3.jpg',
    slug: 'kashi-vishwanath-temple-puja',
    Description: 'A special puja at the Kashi Vishwanath Temple, one of the most sacred temples dedicated to Lord Shiva.',
  },
  {
    id: 4,
    title: 'Mangala Gauri Mandir Puja',
    location: 'Mangala Gauri Mandir, Kashi',
    image: '/images/chadhava/chadhava4.jpg',
    slug: 'mangala-gauri-mandir-puja',
    Description: 'A divine puja at the Mangala Gauri Mandir, known for its blessings and spiritual ambiance.',
  },
  {
    id: 5,
    title: 'Durga Kund Temple Puja',
    location: 'Durga Kund Mandir, Varanasi',
    image: '/images/chadhava/chadhava5.jpeg',
    slug: 'durga-kund-temple-puja',
    Description: 'A sacred puja at the Durga Kund Temple, dedicated to Goddess Durga, offering strength and blessings.',
  },
  {
    id: 6,
    title: 'Shitla Mata Temple Puja',
    location: 'Shitla Mata Mandir, Varanasi',
    image: '/images/chadhava/chadhava6.jpeg',
    slug: 'shitla-mata-temple-puja',
    Description: 'A spiritual puja at the Shitla Mata Temple, known for its healing powers and divine blessings.',
  },
]

export default function ChadhavaDetailsPage() {
  const { slug } = useParams()
  const prasad = chadhavaData.find((item) => item.slug === slug)

  if (!prasad) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Chadhava not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fff7ee] py-12 px-4 md:px-20">
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
