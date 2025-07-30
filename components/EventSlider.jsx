'use client';
import { useEffect, useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Rameshwaram Sawan Somwar Abhishek',
    location: 'Rameshwaram Jyotirlinga',
    date: '28th July 2025, Monday',
    image: '/images/rameshwaram.jpg',
    tags: ['Peaceful Life', 'Ancestral Peace', 'Wish Fulfillment', 'Mental Health'],
  },
  {
    id: 2,
    title: 'Kedarnath Sawan Rudrabhishek',
    location: 'Kedarnath Dham',
    image: '/images/kedarnath.jpg',
    date: '28th July 2025, Monday',
    tags: ['Divine Protection', 'Family Harmony'],
  },
  {
    id: 3,
    title: 'Somnath Maha Puja',
    location: 'Somnath Temple',
    date: '29th July 2025, Tuesday',
    image: '/images/somnath.jpg',
    tags: ['Career Success', 'Blessings', 'Peace'],
  },
];

export default function EventSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 6000); // 2 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative border text-white py-6 md:px-12 flex justify-center overflow-hidden">
      <div className="relative w-full md:px-24 h-[22rem] rounded-lg shadow-lg overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="w-full mx-2 rounded-md flex flex-shrink-0 relative">
              {/* Background Image */}
             

              {/* Content Overlay */}
              <div className="absolute w-full rounded-md bg-gradient-to-r from-black to-black/60 inset-0 px-8 max-sm:py-8 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center z-10">
                <div className="text-left max-sm:space-y-4 md:space-y-2 max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">{event.title}</h2>
                  <p className="text-sm pl-1">{event.location}</p>
                  <p className="text-sm pl-1">{event.date}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-300/80 text-black text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 cursor-pointer bg-red-600 hover:bg-red-800 px-4 py-2 text-white rounded-full text-sm font-semibold">
                    Participate Now 
                  </button>
                </div>
              </div>

               <img
                src={event.image}
                alt={event.title}
                className="w-full h-[22rem] border object-cover opacity-30"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
