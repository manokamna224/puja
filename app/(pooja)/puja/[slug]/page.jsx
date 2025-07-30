 'use client'
 import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import PujaPackages from '@/components/pujaPackages'
import PujaBenefits from '@/components/pujaBenefits'
import PujaProcess from '@/components/pujaProcess'
import PujaFaqSection from '@/components/pujaFAQSection'
import PujaReviewSection from '@/components/pujaReview'
import Image from 'next/image'


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

export default function PujaDetailsPage() {
  const { slug } = useParams()
  const puja = pujasData.find(p => p.slug === slug)

  if (!puja) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-bold">
        ❌ Puja not found for: <span className="ml-2 text-gray-800">{slug}</span>
      </div>
    )
  }

  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      if (!puja) return
      const now = new Date().getTime()
      const event = new Date(puja.date).getTime()
      const diff = event - now
      if (diff <= 0) return

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimer({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [puja])

  if (!puja) return <div className="p-10 text-center text-red-600">Puja Not Found</div>

  return (
   <>
    <div className="min-h-fit px-6 py-10 bg-[#fff9f2] flex flex-col md:flex-row gap-10">
      {/* Left: Image section */}
      <div className="w-1/2 relative h-[400px] ">
        <Image fill src={puja.image} alt={puja.title} className="w-full rounded-xl shadow" />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {puja.title}
        </h1>
        <p className="text-gray-600 text-lg mb-4">{puja.benefits?.[0]}</p>

        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <span>📍</span>
          <p>{puja.temple}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-700 mb-4">
          <span>📅</span>
          <p>{new Date(puja.date).toLocaleDateString('en-GB', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}</p>
        </div>

        <div className="bg-yellow-100 w-[320px] border border-yellow-400 rounded p-4 inline-block">
          <p className="text-xs font-mono text-gray-900 font-semibold mb-3">Puja booking will close in:</p>
          <div className="flex gap-4 justify-around font-bold text-lg text-orange-600">
            <div className="text-center">
              <div>{timer.days}</div>
              <span className="text-xs">Day</span>
            </div>
            <div className="text-center">
              <div>{timer.hours}</div>
              <span className="text-xs">Hours</span>
            </div>
            <div className="text-center">
              <div>{timer.minutes}</div>
              <span className="text-xs">Mins</span>
            </div>
            <div className="text-center">
              <div>{timer.seconds}</div>
              <span className="text-xs">Secs</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 font-semibold">
            Select Package →
          </button>

          <a
            href={`https://wa.me/?text=I'm interested in booking ${puja.title}`}
            target="_blank"
            className="border border-green-600 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50"
          >
            Share Whatsapp
          </a>
        </div>
      </div>
    </div>
    <PujaPackages />
    <PujaBenefits />
    <PujaProcess />
    <PujaFaqSection />
    <PujaReviewSection />
    </> 
  )
}
