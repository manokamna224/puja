'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import ChadhavaDetailsPage from '@/modules/chadava/ui/components/chadhava-seva'
import ChadhavaCardList from '@/modules/chadava/ui/components/card-list'
import { chadhavaCardData } from '@/tempdata/chadhava/chadhava-card-list'

const page = () => {
    const { slug } = useParams()

  return (
    <>
      <ChadhavaDetailsPage slug={slug} />
     <div>
      {chadhavaCardData.filter((item) => item.slug === slug )
      .map((card, index) => (
      <ChadhavaCardList
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        description={card.description}
        events={card.events}
        price={card.price}
        image={card.image}
        slug={slug}
        offer={card.title}
        />
      ))}
     </div>
    </>
  )
}

export default page