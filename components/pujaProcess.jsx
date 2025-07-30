// PujaProcess.js (React / Next.js Component)
import { FaRegListAlt, FaHandHoldingHeart, FaUserEdit, FaBell, FaPhotoVideo, FaShippingFast } from 'react-icons/fa'

const steps = [
  {
    icon: <FaRegListAlt size={24} className="text-orange-500" />,
    title: '1. Discover Your Puja',
    description: 'Browse and select from a curated list of sacred pujas aligned to your intentions and traditions.',
  },
  {
    icon: <FaHandHoldingHeart size={24} className="text-orange-500" />,
    title: '2. Choose a Package',
    description: 'Pick a participation package that fits your spiritual needs—Single, Couple, Family, or VIP.',
  },
  {
    icon: <FaUserEdit size={24} className="text-orange-500" />,
    title: '3. Personalize Your Details',
    description: 'Enter devotee name, gotra, and other preferences for a meaningful puja experience.',
  },
  {
    icon: <FaBell size={24} className="text-orange-500" />,
    title: '4. Get Reminders & Updates',
    description: 'Receive timely SMS/WhatsApp reminders and updates about your upcoming puja.',
  },
  {
    icon: <FaPhotoVideo size={24} className="text-orange-500" />,
    title: '5. Watch the Puja Footage',
    description: 'Receive personalized photos and videos of your puja, delivered digitally within 2–3 days.',
  },
  {
    icon: <FaShippingFast size={24} className="text-orange-500" />,
    title: '6. Prasad Delivered to Your Door',
    description: 'Sacred prasad is packed and shipped directly to your address within 5–7 days.',
  }
]

export default function PujaProcess() {
  return (
    <section className="bg-[#fffaf2] py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📿 How Our Puja Service Works</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg border border-orange-100 hover:shadow-xl transition">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-orange-600 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
