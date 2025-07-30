'use client'

import { useParams } from 'next/navigation';
import { useState } from 'react'
// data/pujaFaqs.js
export const pujaFaqs = {
  'adi-kailash-navgraha-shanti': [
    {
      question: 'What is the purpose of the Navgraha Shanti Puja?',
      answer: 'This puja is performed to reduce the negative effects of the nine planets (Navgraha) and bring harmony in life.'
    },
    {
      question: 'Can I perform this puja without knowing my Gotra?',
      answer: 'Yes, our priests can still perform the puja with your name and intention if Gotra is unknown.'
    },
    {
      question: 'What items are needed from my side?',
      answer: 'You only need to share your name and intention; we will handle all rituals and materials.'
    },
  ],
  'maha-mrityunjay-jaap': [
    {
      question: 'Why is 125000 Mrityunjay Jaap special?',
      answer: 'It provides protection from untimely death, severe illnesses, and grants inner strength and peace.'
    },
    {
      question: 'How will I know the puja was done in my name?',
      answer: 'You’ll receive personalized puja video and photo proof on WhatsApp within 2–3 days.'
    },
    {
      question: 'Is there any prasad delivery for this puja?',
      answer: 'Yes, prasad will be shipped to your home within 5–7 days.'
    }
  ],
  'kaal-sarp-dosh-nivaran': [
    {
      question: 'Which temple is best for Kaal Sarp Dosh Nivaran?',
      answer: 'Ujjain, Trimbakeshwar, and Varanasi are renowned temples for this powerful puja.'
    },
    {
      question: 'What are the benefits of doing this puja?',
      answer: 'It removes astrological defects and brings peace, stability, and growth in life.'
    },
    {
      question: 'Will I receive proof of puja?',
      answer: 'Yes, darshan and full puja video will be shared with your name and Gotra.'
    }
  ],
  'laghu-rudrabhishek-puja': [
    {
      question: 'What is Rudrabhishek Puja and its benefits?',
      answer: 'It is a sacred ritual to worship Lord Shiva, bringing positivity, health, and financial blessings.'
    },
    {
      question: 'How long does the Rudrabhishek Puja take?',
      answer: 'It generally takes 1–2 hours to perform with all Vedic rituals and mantras.'
    },
    {
      question: 'Do I need to attend the puja physically?',
      answer: 'No, our priests will perform the puja on your behalf and share complete media proof.'
    }
  ],
  'sundarkand-path': [
    {
      question: 'What is the importance of Sundarkand Path?',
      answer: 'It invokes blessings of Hanumanji, removes fears, boosts confidence, and ensures protection.'
    },
    {
      question: 'Can Sundarkand be performed for someone else?',
      answer: 'Yes, you can book this path for your family member or friend with their name and Gotra.'
    },
    {
      question: 'What is included in the puja package?',
      answer: 'It includes chanting, video proof, and prasad delivery to your given address.'
    }
  ],
  'mangal-dosh-nivaran-puja': [
    {
      question: 'Who should perform Mangal Dosh Nivaran Puja?',
      answer: 'Individuals with Manglik dosh in their horoscope should perform this puja to balance planetary effects.'
    },
    {
      question: 'What problems does it resolve?',
      answer: 'It resolves marriage delays, disputes in relationships, and health-related issues.'
    },
    {
      question: 'Is this performed by expert astrologers?',
      answer: 'Yes, experienced Vedic priests conduct the puja with accurate rituals and procedures.'
    }
  ],
  'kaal-sarp-dosh-puja': [
    {
    question: "What is Kaal Sarp Dosh and why should I perform this puja?",
    answer: "Kaal Sarp Dosh occurs when all planets are positioned between Rahu and Ketu. This puja helps reduce negative effects and promotes peace, success, and well-being."
  },
  {
    question: "Which temple is best for Kaal Sarp Dosh Nivaran Puja?",
    answer: "Trimbakeshwar Temple in Nashik and Mahakaleshwar Temple in Ujjain are considered highly auspicious for this puja."
  },
  {
    question: "Do I need to be present physically for the Kaal Sarp Puja?",
    answer: "No, our expert pandits perform the puja in your name. You receive video proof and prasad delivered to your doorstep."
  }
  ],
  'mahamrityunjaya-jaap': [
    {
    question: "Why is the Maha Mrityunjay Jaap so powerful?",
    answer: "Chanting the Maha Mrityunjay Mantra 125,000 times protects from untimely death, major health issues, and brings inner strength and divine blessings."
  },
  {
    question: "How long does the 125,000 Jaap take to complete?",
    answer: "It typically takes 7–9 days of continuous chanting by trained Vedic priests to complete the full Jaap with Hawan."
  },
  {
    question: "Will I get proof of the Jaap being done for me?",
    answer: "Yes, you’ll receive video footage and personalized photo proof via WhatsApp, along with prasad delivery."
  }
  ],
  'navagraha-shanti-puja': [
    {
    question: "What is the benefit of doing Navgraha Shanti Puja?",
    answer: "This puja reduces malefic effects of the 9 planets and balances planetary energies to bring peace, stability, and prosperity in life."
  },
  {
    question: "When should Navgraha Puja be performed?",
    answer: "Ideally, it is done when planetary transitions or doshas are affecting your career, marriage, or health based on horoscope."
  },
  {
    question: "Is the horoscope required for this puja?",
    answer: "It is helpful but not mandatory. Even without a horoscope, the puja can be customized using your name and intention."
  }
  ],
  'chandi-path-havan': [
    {
    question: "What is the purpose of Chandi Path and Havan?",
    answer: "Chandi Path invokes Goddess Durga’s fierce form for strength, protection, and removal of negative energies through sacred mantras and fire ritual."
  },
  {
    question: "How many priests are needed for Chandi Path?",
    answer: "This powerful anushthan is usually done by a group of 5+ Vedic priests trained in Devi Saptashati recitation and fire rituals."
  },
  {
    question: "Can Chandi Havan be done online?",
    answer: "Yes, the havan is streamed or recorded and performed in your name. You’ll receive the video and prasad at home."
  }
],
'satyanarayan-katha': [
  {
    question: "Why should I do the Satyanarayan Katha?",
    answer: "It is performed for family harmony, success, and to express gratitude to Lord Vishnu. Ideal after marriage, new house, or child birth."
  },
  {
    question: "What is the best day for this puja?",
    answer: "It is commonly done on Purnima (full moon day) but can be done on any auspicious day or personal milestone."
  },
  {
    question: "Can I do this puja at home?",
    answer: "Yes, it can be performed at home or temple. We also offer online puja with experienced priests and prasad delivery."
  }
],
'durga-saptashati-path': [
  {
    question: "What are the benefits of Durga Saptashati Paath?",
    answer: "Reciting 700 verses from Devi Mahatmyam brings spiritual awakening, protection from evil forces, and fulfills wishes."
  },
  {
    question: "How long does the Saptashati Path take?",
    answer: "The full path takes around 2–3 hours and is usually performed with rituals like sankalp, avahan, and a concluding aarti."
  },
  {
    question: "When is the best time to perform this puja?",
    answer: "Navratri is the most auspicious time, but it can be performed on Fridays, Ashtami, or any day seeking divine feminine energy."
  }
]
}


export default function PujaFaqSection() {
  const {slug} = useParams();
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">❓ Frequently Asked Questions</h2>
      <div className="space-y-4">
        {pujaFaqs[slug]?.map((faq, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-orange-50 font-medium flex justify-between items-center text-gray-800"
            >
              {faq.question}
              <span className="text-orange-500">
                {activeIndex === idx ? '▲' : '▼'}
              </span>
            </button>
            {activeIndex === idx && (
              <div className="bg-orange-50 px-6 py-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {pujaFaqs?.length === 0 && (
          <p className="text-gray-500 text-center">No FAQs available for this puja yet.</p>
        )}
      </div>
    </div>
  )
}
