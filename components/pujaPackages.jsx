'use client'

import Link from "next/link"
import { useParams, useRouter } from "next/navigation";

const packages = [
  {
    label: 'SINGLE',
    persons: '1 Person',
    price: 551,
    image: '/images/puja/single.jpeg',
    color: 'bg-blue-100',
    buttonColor: 'bg-blue-600',
  },
  {
    label: 'COUPLE',
    persons: '2 Persons',
    price: 1100,
    image: '/images/puja/couple.jpeg',
    color: 'bg-purple-100',
    buttonColor: 'bg-purple-600',
  },
  {
    label: 'FAMILY',
    persons: 'upto 6',
    price: 2100,
    image: '/images/puja/family.jpeg',
    color: 'bg-orange-100',
    buttonColor: 'bg-orange-500',
  },
  {
    label: 'VIP',
    persons: 'Corporate',
    price: 3100,
    image: '/images/puja/vip.jpeg',
    color: 'bg-green-100',
    buttonColor: 'bg-green-600',
  },
]

export default function PujaPackages() {
  const {slug} = useParams();
  // console.log(slug, 'kjkjkj');
  return (
    <section className="py-12 px-6 md:px-20 bg-[#fff9f2]">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Puja Package</h2>
      <p className="text-gray-600 mb-8">Choose the perfect puja package according to your spiritual needs and preferences.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <Link
            href={`/puja/${slug}/${pkg.label.toLowerCase()}`}
            key={index}
            className={`rounded-xl shadow-md border border-gray-200 overflow-hidden ${pkg.color} flex flex-col justify-between`}
          >
            <div className="flex">
            <img src={pkg.image} alt={pkg.label} className="w-center h-24 object-cover rounded-lg mt-3" />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-800">{pkg.label}</h3>
              <span className="inline-block bg-white px-2 py-1 text-xs font-medium rounded-full text-gray-600 border">{pkg.persons}</span>
              <p className="text-2xl font-semibold text-gray-700">₹ {pkg.price}/-</p>
              </div>
            </div>
            <div className="bg-white px-4 py-2 text-sm font-semibold border-t">
              <p>➤ About Package</p>
            </div>
            <button className={`${pkg.buttonColor} text-white text-center py-2 font-semibold hover:opacity-90`}>
              Participate →
            </button>
          </Link>
        ))}
      </div>
    </section>
  )
}
