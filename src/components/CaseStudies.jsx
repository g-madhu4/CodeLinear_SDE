'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/components/CaseStudies.module.css'
// import caseImage1 from '../app/assets/Home.png'
// import caseImage2 from '../app/assets/Home.png'
// import caseImage3 from '../app/assets/Home.png'

import caseImage1 from '../app/assets/Vector (5).png'
import caseImage2 from '../app/assets/Vector (5).png'
import caseImage3 from '../app/assets/Vector (5).png'

export default function CaseStudies() {
  const [selectedCard, setSelectedCard] = useState(0)

  const caseStudies = [
    {
      id: 1,
      title: 'How we help brand reach out to more people',
      company: 'Zoomerr',
      category: 'GETTING STARTED',
      image: caseImage1,
      badge: 'Tushar',
    },
    {
      id: 2,
      title: 'Streamlining banking operations for enterprises',
      company: 'FinanceHub',
      category: 'CASE STUDY',
      image: caseImage2,
      badge: 'Sarah',
    },
    {
      id: 3,
      title: 'Digital transformation success story',
      company: 'TechBank',
      category: 'SUCCESS STORY',
      image: caseImage3,
      badge: 'Mike',
    },
  ]

  const handlePrevious = () => {
    setSelectedCard((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedCard((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index) => {
    setSelectedCard(index)
  }

  const current = caseStudies[selectedCard]

  return (
    <section className={styles.caseStudiesSection}>
      <div className={styles.container}>
        {/* Main Title */}
        <h2 className={styles.mainTitle}>Our Case Studies</h2>

        {/* Featured Card */}
        <div className={styles.card}>
          {/* Left - Icons Grid */}
          <div className={styles.iconsGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.iconBox}>
                <Image
                  src={current.image}
                  alt={`Icon ${item}`}
                  width={100}
                  height={100}
                  className={styles.icon}
                />
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div className={styles.cardContent}>
            <span className={styles.category}>{current.category}</span>
            <h3 className={styles.cardTitle}>{current.title}</h3>

            <div className={styles.cardMeta}>
              <span className={styles.author}>{current.company}</span>
              <span className={styles.date}>{current.badge}</span>
            </div>

            <button className={styles.readMoreBtn}>READ MORE</button>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className={styles.navigationControls}>
          <button className={styles.navButton} onClick={handlePrevious}>
            ←
          </button>

          <div className={styles.dotsContainer}>
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === selectedCard ? styles.dotActive : ''
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button className={styles.navButton} onClick={handleNext}>
            →
          </button>
          
        </div>

        {/* View All Link */}
        <a href="#" className={styles.viewAllLink}>
          VIEW ALL →
        </a>
      </div>
    </section>
  )
}
