// components/FeatureGrid.js
import { FaBell, FaBook, FaMusic, FaStar, FaHandsHelping } from 'react-icons/fa';
import { GiHinduTemple } from 'react-icons/gi';
import { MdFestival } from 'react-icons/md';
import { SiTaichilang } from 'react-icons/si';

const features = [
  {
    icon: <FaBell size={30} className="text-white" />,
    bg: 'bg-indigo-900',
    title: 'Divine Temple',
    description: 'Set up your temple on your phone, dedicated to your beloved deities and seek their blessings, anytime, anywhere.',
  },
  {
    icon: <FaBook size={30} className="text-white" />,
    bg: 'bg-orange-800',
    title: 'Hindu Literature',
    description: 'Get specially curated books, articles and videos based on Sanatan Dharma',
  },
  {
    icon: <FaMusic size={30} className="text-white" />,
    bg: 'bg-teal-600',
    title: 'Devotional Music',
    description: 'Get access to 5000+ Ad-Free Devotional Music. Listen to Aarti, Mantra, Bhajan, and Chalisa.',
  },
  {
    icon: <MdFestival size={30} className="text-white" />,
    bg: 'bg-red-600',
    title: 'Panchang, Horoscope & Festivals',
    description: 'Get regular updates on Daily Horoscope, Panchang, and upcoming Fasts- Festivals.',
  },
  {
    icon: <FaHandsHelping size={30} className="text-white" />,
    bg: 'bg-yellow-500',
    title: 'Puja and Chadhava Seva',
    description: 'Book personalized Puja and Chadhava Seva in your and your family’s name at 1000+ renowned temples across India.',
  },
  {
    icon: <SiTaichilang size={30} className="text-white" />,
    bg: 'bg-orange-500',
    title: 'Sanatani Community',
    description: 'Be a part of India’s largest devotional community and connect with Sanatanis worldwide.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16 px-2 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">One App for all your devotional needs</h2>
      <p className="text-gray-600 max-sm:text-xs max-sm:px-4 mb-12">
        Puja Nivaran brings these amazing features for you, get these features for free and start your devotional journey now.
      </p>

      <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${feature.bg} flex items-center justify-center`}>
              {feature.icon}
            </div>
            <div>
              <h3 className="text-md md:text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
