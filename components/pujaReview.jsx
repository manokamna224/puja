'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const reviews = [
  {
    name: 'Harshit Srivastva',
    location: 'Banaras',
    stars: 5,
    review: 'I am very happy pandit ji, thank you so much.',
    slug: 'adi-kailash-navgraha-shanti'
  },
  {
    name: 'Harshit Verma',
    location: 'Mumbai',
    stars: 5,
    review: 'I am very happy pandit ji, thank you so much.',
    slug: 'kaal-sarp-dosh-puja'
  },
  {
    name: 'Ritik Sharma',
    location: 'Bangalore',
    stars: 5,
    review: 'Such a peaceful and divine experience.',
    slug: 'laghu-rudrabhishek-puja'
  },
  {
    name: 'Amit Bhatt',
    location: 'Pune',
    stars: 5,
    review: 'The arrangements were so perfect like a real temple.',
    slug: 'mangal-dosh-nivaran-puja'
  },
  {
    name: 'Snehil Rao',
    location: 'Bangalore',
    stars: 5,
    review: 'A blissful experience, everything was smooth and divine.',
    slug: 'kaal-sarp-dosh-puja'

  },
  {
    name: 'Rajeev Mishra',
    location: 'Kerala',
    stars: 4.5,
    review: 'Authentic rituals, experienced pandits.',
    slug: 'laghu-rudrabhishek-puja'

  }
];

const StarRating = ({ stars }) => {  
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;

  return (
    <div className="flex gap-0.5 text-orange-500 text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
    </div>
  );
};

const PujaReviewSection = () => {
  // Duplicate reviews for seamless looping
    const {slug} = useParams();
  // const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="px-4">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Puja Nivran's Devotee Reviews
        </h2>

        <div className="relative w-full">
          <div className="flex gap-6 flex-wrap animate-scroll-loop md:whitespace-nowrap">
            {reviews.filter(review => review.slug === slug)
            .map((review, idx) => (
              <div
                key={idx}
                className="md:min-w-[260px] min-w-full max-sm:flex-1 bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {review.location}
                </p>
                <StarRating stars={review.stars} />
                <p className="italic line-clamp-2 text-sm text-gray-700 mt-2">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PujaReviewSection;
