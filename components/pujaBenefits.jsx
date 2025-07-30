'use client'
import { useParams } from 'next/navigation';
import React from 'react'


export const pujaBenefitsData = {
  'adi-kailash-navgraha-shanti': [
    {
      title: 'Protection from Untimely Death and Health Blessings',
      description: 'This powerful Navgraha Shanti Puja at Adi Kailash invokes the blessings of all 9 planets and Lord Shiva to eliminate health issues, fear of untimely death, and chronic ailments.',
      icon: '🛡️',
      slug: 'adi-kailash-navgraha-shanti'
    },
    {
      title: 'Astrological Relief and Peace',
      description: 'Neutralizes malefic planetary influences and doshas in your horoscope. Ideal for those suffering from constant struggles, mental stress, or family unrest.',
      icon: '🪐',
      slug: 'adi-kailash-navgraha-shanti'
    },
    {
      title: 'Spiritual Transformation',
      description: 'Get spiritual upliftment, karmic cleansing, and overall well-being through Vedic mantras and Abhishekam performed at a divine location.',
      icon: '🌼',
      slug: 'adi-kailash-navgraha-shanti'
    },
  ],
  'mahamrityunjaya-jaap': [
    {
      title: 'Protection from Untimely Death',
      description: 'The Maha Mrityunjay Jaap protects devotees from life-threatening diseases and accidents, providing longevity and divine blessings.',
      icon: '🧘',
      slug: 'mahamrityunjaya-jaap'
    },
    {
      title: 'Spiritual Upliftment and Peace',
      description: 'This Jaap, Hawan, and Rudrabhishek bring mental clarity, spiritual strength, and peace to mind, body, and soul.',
      icon: '🕉️',
      slug: 'mahamrityunjaya-jaap'
    },
    {
      title: 'Removal of Obstacles and Prosperity',
      description: 'Removes personal, professional, and health-related blockages. Brings positivity and paves way for success and prosperity.',
      icon: '🚪',
      slug: 'mahamrityunjaya-jaap'
    },
  ],
  'kaal-sarp-dosh-puja': [
    {
      title: 'Kaal Sarp Dosh Removal',
      description: 'Helps nullify the ill effects of Rahu and Ketu due to Kaal Sarp Dosh and promotes overall peace and prosperity.',
      icon: '🐍',
      slug: 'kaal-sarp-dosh-puja'
    },
    {
      title: 'Career and Relationship Growth',
      description: 'Resolve career stagnation, misunderstandings, and delays in marriage or childbirth caused by astrological imbalance.',
      icon: '🌱',
      slug: 'kaal-sarp-dosh-puja'
    },
    {
      title: 'Spiritual & Emotional Healing',
      description: 'This puja provides deep spiritual healing and mental stability by calming planetary turbulence.',
      icon: '🧠',
      slug: 'kaal-sarp-dosh-puja'
    },
  ],
  'laghu-rudrabhishek-puja': [
    {
      title: 'Emotional and Mental Healing',
      description: 'Rudrabhishek calms the mind and heart, relieves depression, anxiety, and brings emotional stability.',
      icon: '💧',
      slug: 'rudrabhishek-puja'
    },
    {
      title: 'Wealth and Career Growth',
      description: 'It removes barriers in professional growth and attracts wealth and abundance.',
      icon: '💰',
      slug: 'rudrabhishek-puja'
    },
    {
      title: 'Fulfills Desires and Brings Harmony',
      description: 'Helps fulfill desires related to health, marriage, education, and career while harmonizing family relations.',
      icon: '🙏',
      slug: 'rudrabhishek-puja'
    },
  ],
  'mangal-dosh-nivaran-puja': [
    {
      title: 'Removes Mangal Dosh',
      description: 'This puja pacifies Mars (Mangal) and eliminates dosha that causes delay in marriage, disputes, and aggression.',
      icon: '🔥',
      slug: 'mangal-dosh-nivaran-puja'
    },
    {
      title: 'Improved Marital Life',
      description: 'Ideal for resolving issues in love and marriage and establishing peaceful relationships.',
      icon: '💑',
      slug: 'mangal-dosh-nivaran-puja'
    },
    {
      title: 'Reduces Aggression and Insecurity',
      description: 'Calms fiery nature, reduces accidents and impulsive decisions influenced by strong Mars.',
      icon: '🕊️',
      slug: 'mangal-dosh-nivaran-puja'
    },
  ],
  'durga-saptashati-path': [
    {
      title: 'Advanced Healing & Detox',
      description: 'Massive scale chanting removes deep-seated karma blocks and brings rejuvenation.',
      icon: '🔱',
      slug: 'durga-saptashati-path'
    },
    {
      title: 'Deep Spiritual Cleansing',
      description: 'This path provides intense soul purification and sharpens spiritual intuition.',
      icon: '🧿',
      slug: 'durga-saptashati-path'
    },
    {
      title: 'Family Protection and Energy Shield',
      description: 'Protects the entire family from negative energy, premature death, and diseases.',
      icon: '🛡️',
      slug: 'durga-saptashati-path'
    },
  ],
  'chandi-path-havan': [
    {
      title: 'Best for Career & Government Work',
      description: 'Laghu Rudra is known for removing obstacles in job promotions, exams, and government-related work.',
      icon: '📜',
      slug: 'chandi-path-havan'
    },
    {
      title: 'Mantra Power & Energetic Clarity',
      description: 'It channels strong Vedic energies and helps the devotee gain clarity and confidence.',
      icon: '🗣️',
      slug: 'chandi-path-havan'
    },
    {
      title: 'Blessings of Matarani',
      description: 'Havan grants specific benefits such as wealth, strength, health, and victory.',
      icon: '🙏',
      slug: 'chandi-path-havan'
    },
  ],
  'satyanarayan-katha': [
    {
      title: 'Massive Blessings & Protection',
      description: 'Satyanarayan katha is one of the most powerful katha for universal protection and blessings.',
      icon: '🌪️',
      slug: 'satyanarayan-katha'
    },
    {
      title: 'Planetary Alignment & Harmony',
      description: 'It removes all planetary doshas and aligns energies for life success.',
      icon: '🪐',
      slug: 'satyanarayan-katha'
    },
    {
      title: 'Ritual with Lifelong Impact',
      description: 'Very few people perform this ritual due to its grandeur, but it grants lifelong divine grace.',
      icon: '🎇',
      slug: 'satyanarayan-katha'
    },
  ],
  'navagraha-shanti-puja': [
    {
      title: 'Balancing All Nine Planets',
      description: 'This puja neutralizes malefic effects and strengthens favorable grahas for health, wealth & peace.',
      icon: '🛸',
    },
    {
      title: 'Perfect for Career, Finance, and Marriage',
      description: 'Ideal for those struggling with finance, job instability, or delayed marriage.',
      icon: '💼',
      slug: 'navagraha-shanti-puja'
    },
    {
      title: 'Gives Mental Peace and Focus',
      description: 'By balancing cosmic energies, it enhances decision-making and mental clarity.',
      icon: '🧠',
    },
  ]
}



export default function PujaBenefits() {

  const {slug} = useParams();
  

  return (
    <section className="py-12 bg-white px-4 md:px-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🙏 Puja Benefits</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {pujaBenefitsData[slug]?.map((benefit, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-orange-100 bg-orange-50 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-200 text-orange-800 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-orange-800">{benefit.title}</h3>
            </div>
            <p className="text-gray-700 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
