'use client'
import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'

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

export default function ChadhavaSection() {
  return (
    <section className="bg-[#fff7ee] py-14 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">Chadhava
      </h2>
      <div className="w-16 h-1 mx-auto bg-orange-500 rounded mb-8"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {chadhavaData.map((item) => (
          <Link 
            href={`/chadhava/${item.slug}`}
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
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white flex justify-center items-center gap-2 py-2 rounded-md font-medium transition">
                <MdOutlineShoppingBag />
                Offer Chadhava
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
