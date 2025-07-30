'use client'

import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlineLocalOffer } from 'react-icons/md'

const prasadItems = [
  {
    id: 1,
    title: 'Kashi Vishwanath Prasad',
    location: 'Kashi Vishwanath Temple, Varanasi',
    image: '/images/prasad/prasad1.jpeg',
    slug: 'kashi-vishwanath-prasad',
  },
  {
    id: 2,
    title: 'Sankat Mochan Ladoo Prasad',
    location: 'Sankat Mochan Temple, Varanasi',
    image: '/images/prasad/prasad2.jpeg',
    slug: 'sankat-Mochan-Ladoo-Prasad',
  },
  {
    id: 3,
    title: 'Baba Baidyanath Dry Fruit Prasad',
    location: 'Baidyanath Dham, Deoghar',
    image: '/images/prasad/prasad3.jpeg',
    slug: 'baba-Baidyanath-Dry-Fruit-Prasad',
  },
  {
    id: 4,
    title: 'Hanuman Garhi Boondi Prasad',
    location: 'Hanuman Garhi, Ayodhya',
    image: '/images/prasad/prasad4.jpeg',
    slug: 'hanuman-garhi-boondi-prasad'
  },
  {
    id: 5,
    title: 'Pashupatinath Laddu Prasad',
    location: 'Pashupatinath Temple, Nepal',
    image: '/images/prasad/prasad5.jpeg',
    slug: 'pashupatinath-laddu-prasad'
  },
  {
    id: 6,
    title: 'Durga Kund Coconut Prasad',
    location: 'Durga Kund Mandir, Varanasi',
    image: '/images/prasad/prasad6.jpeg',
    slug: 'durga-kund-mandir-prasad'
  },
]

export default function PrasadSection() {
  return (
    <section className="bg-[#fffaf3] py-14 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
        Buy Prasad
      </h2>
      <div className="w-16 h-1 mx-auto bg-orange-500 rounded mb-8"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {prasadItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="flex items-center text-sm text-gray-600 mt-1">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                {item.location}
              </p>
               <Link href={`/prasad/${item.slug}`}>
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white flex justify-center items-center gap-2 py-2 rounded-md font-medium transition">
              <MdOutlineLocalOffer />
              Buy Prasad
            </button>
           </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
