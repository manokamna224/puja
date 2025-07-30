'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const pujasData = [
  {
    id: 1,
    title: 'Adi Kailash Navgraha Shanti',
    temple: 'Adi Kailash Shiv Mandir, Bhimtal',
    subtitle: 'Sawan Somvar Vishesh Abhishek',
    image: '/images/puja/puja1.jpeg',
    slug: 'adi-kailash-navgraha-shanti',
    date: '2025-08-04',
    packages: [
      { label: 'Single', price: 551, persons: '1 Person' },
      { label: 'Couple', price: 1100, persons: '2 Persons' },
      { label: 'Family', price: 2100, persons: 'Up to 6' },
      { label: 'VIP', price: 3100, persons: 'Corporate' }
    ],
    benefits: [
      'Protection from untimely death & bad health',
      'Spiritual upliftment and peace',
      'Removes obstacles and negativity'
    ],
    prasadDelivery: '5–7 days',
  },
  {
    id: 2,
    title: 'Laghu Rudrabhishek Puja',
    temple: 'Trimbakeshwar Temple, Nashik',
    subtitle: 'Performed by Vedic Pandits',
    image: '/images/puja/puja2.jpeg',
    slug: 'laghu-rudrabhishek-puja',
    date: '2025-08-05',
    packages: [
      { label: 'Single', price: 751, persons: '1 Person' },
      { label: 'Couple', price: 1400, persons: '2 Persons' },
      { label: 'Family', price: 2500, persons: 'Up to 6' },
      { label: 'VIP', price: 3500, persons: 'Corporate' }
    ],
    benefits: [
      'Eliminates planetary doshas',
      'Improves overall well-being',
      'Fulfills desires and grants prosperity'
    ],
    prasadDelivery: '4–6 days',
  },
  {
    id: 3,
    title: 'Mangal Dosh Nivaran Puja',
    temple: 'Shree Mangalnath Mandir, Ujjain',
    subtitle: 'Mangalwar Special Puja',
    image: '/images/puja/puja3.jpeg',
    slug: 'mangal-dosh-nivaran-puja',
    date: '2025-08-06',
    packages: [
      { label: 'Single', price: 601, persons: '1 Person' },
      { label: 'Couple', price: 1200, persons: '2 Persons' },
      { label: 'Family', price: 2000, persons: 'Up to 6' },
      { label: 'VIP', price: 3200, persons: 'Corporate' }
    ],
    benefits: [
      'Resolves marriage delays',
      'Reduces aggression and anxiety',
      'Boosts career stability'
    ],
    prasadDelivery: '3–5 days',
  },
  {
    id: 4,
    title: 'Kaal Sarp Dosh Puja',
    temple: 'Trimbakeshwar Jyotirlinga, Nashik',
    subtitle: 'Powerful planetary peace ritual',
    image: '/images/puja/puja4.jpeg',
    slug: 'kaal-sarp-dosh-puja',
    date: '2025-08-07',
    packages: [
      { label: 'Single', price: 851, persons: '1 Person' },
      { label: 'Couple', price: 1600, persons: '2 Persons' },
      { label: 'Family', price: 2900, persons: 'Up to 6' },
      { label: 'VIP', price: 4000, persons: 'Corporate' }
    ],
    benefits: [
      'Removes fear and anxiety',
      'Neutralizes Rahu-Ketu doshas',
      'Attracts peace and positivity'
    ],
    prasadDelivery: '4–6 days',
  },
  {
    id: 5,
    title: 'Mahamrityunjaya Jaap',
    temple: 'Kashi Vishwanath Temple, Varanasi',
    subtitle: '108x chanting for health & longevity',
    image: '/images/puja/puja5.jpeg',
    slug: 'mahamrityunjaya-jaap',
    date: '2025-08-08',
    packages: [
      { label: 'Single', price: 1001, persons: '1 Person' },
      { label: 'Couple', price: 1800, persons: '2 Persons' },
      { label: 'Family', price: 3200, persons: 'Up to 6' },
      { label: 'VIP', price: 4500, persons: 'Corporate' }
    ],
    benefits: [
      'Promotes healing and recovery',
      'Protects from sudden death',
      'Invokes blessings of Lord Shiva'
    ],
    prasadDelivery: '5–7 days',
  },
  {
    id: 6,
    title: 'Navagraha Shanti Puja',
    temple: 'Konark Sun Temple, Odisha',
    subtitle: 'Balance planetary influences',
    image: '/images/puja/puja6.jpeg',
    slug: 'navagraha-shanti-puja',
    date: '2025-08-09',
    packages: [
      { label: 'Single', price: 701, persons: '1 Person' },
      { label: 'Couple', price: 1350, persons: '2 Persons' },
      { label: 'Family', price: 2400, persons: 'Up to 6' },
      { label: 'VIP', price: 3600, persons: 'Corporate' }
    ],
    benefits: [
      'Removes malefic effects of 9 planets',
      'Improves relationships and finance',
      'Creates harmony and mental clarity'
    ],
    prasadDelivery: '4–6 days',
  },
  {
    id: 7,
    title: 'Chandi Path & Havan',
    temple: 'Kamakhya Devi Temple, Assam',
    subtitle: 'Powerful Devi invocation',
    image: '/images/puja/puja7.jpeg',
    slug: 'chandi-path-havan',
    date: '2025-08-10',
    packages: [
      { label: 'Single', price: 951, persons: '1 Person' },
      { label: 'Couple', price: 1700, persons: '2 Persons' },
      { label: 'Family', price: 3000, persons: 'Up to 6' },
      { label: 'VIP', price: 4300, persons: 'Corporate' }
    ],
    benefits: [
      'Destroys negative energies',
      'Blessings of Divine Mother',
      'Victory in endeavors'
    ],
    prasadDelivery: '5–8 days',
  },
  {
    id: 8,
    title: 'Satyanarayan Katha',
    temple: 'Jagannath Temple, Puri',
    subtitle: 'Blessing for new beginnings',
    image: '/images/puja/puja8.jpeg',
    slug: 'satyanarayan-katha',
    date: '2025-08-11',
    packages: [
      { label: 'Single', price: 551, persons: '1 Person' },
      { label: 'Couple', price: 1100, persons: '2 Persons' },
      { label: 'Family', price: 2100, persons: 'Up to 6' },
      { label: 'VIP', price: 3100, persons: 'Corporate' }
    ],
    benefits: [
      'Brings peace and abundance',
      'Ideal for home & career success',
      'Removes hurdles from life path'
    ],
    prasadDelivery: '4–5 days',
  },
  {
    id: 9,
    title: 'Durga Saptashati Path',
    temple: 'Vaishno Devi Temple, Katra',
    subtitle: 'Invoking Shakti energy',
    image: '/images/puja/puja9.jpeg',
    slug: 'durga-saptashati-path',
    date: '2025-08-12',
    packages: [
      { label: 'Single', price: 851, persons: '1 Person' },
      { label: 'Couple', price: 1600, persons: '2 Persons' },
      { label: 'Family', price: 2900, persons: 'Up to 6' },
      { label: 'VIP', price: 4000, persons: 'Corporate' }
    ],
    benefits: [
      'Removes fears & negative karma',
      'Increases divine protection',
      'Victory over challenges'
    ],
    prasadDelivery: '5–7 days',
  }
]


export default function PujaSection() {
  const [query, setQuery] = useState('')

  const handleSearchClick = (term) => {
    setQuery(term)
  }

  return (
    <section className="bg-[#fef6ec] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 leading-snug">
        Explore <span className="text-orange-500">Upcoming</span> Pujas
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for Bankey Bihari Puja"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-2xl px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base shadow-md"
        />
      </div>

      {/* Popular Searches */}
      <div className="text-center mb-8">
        <p className="font-medium text-gray-600 text-sm sm:text-base">Popular Searches:</p>
        <div className="flex justify-center gap-3 flex-wrap mt-3">
          {['Bankey Bihari', 'Kashi', 'Mangalnath'].map((term, idx) => (
            <button
              key={idx}
              onClick={() => handleSearchClick(term)}
              className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-sm hover:bg-orange-100 transition text-gray-700"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Puja Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {pujasData
          .filter((puja) =>
            puja.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((puja) => (
            <Link
              href={`/puja/${puja.slug}`}
              key={puja.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={puja.image}
                alt={puja.title}
                className="w-full h-52 sm:h-60 object-cover"
              />
              <div className="p-4 space-y-1">
                <p className="text-sm text-purple-700 font-medium">{puja.temple}</p>
                <p className="text-xs text-gray-600">{puja.subtitle}</p>
                <h3 className="font-bold text-md text-gray-800">{puja.title}</h3>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
