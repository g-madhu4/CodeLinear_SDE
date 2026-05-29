'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/components/Insights.module.css' // Component styles
import insightImage2 from '../app/assets/Home.png'
import insightImage3 from '../app/assets/Home.png'
import insightImage1 from '../app/assets/Vector (5).png'

export default function Insights() {
  const [selectedCard, setSelectedCard] = useState(0)

  const insightsData = [
    {
      id: 1,
      title: 'How to transition from a traditional to a digital bank',
      author: 'David Grohl',
      date: '17/08/24',
      image: insightImage1,
      category: 'GETTING STARTED',
    },
    {
      id: 2,
      title: 'How to transition from a traditional to a digital bank',
      author: 'David Grohl',
      date: '17/08/24',
      image: insightImage2,
      category: 'GETTING STARTED',
    },
    {
      id: 3,
      title: 'How to transition from a traditional to a digital bank',
      author: 'David Grohl',
      date: '17/08/24',
      image: insightImage3,
      category: 'GETTING STARTED',
    },
  ]

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h2 className={styles.mainTitle}>
            Get yourself up-to-speed on<br />
            all the things happening in<br />
            fintech
          </h2>
          <button className={styles.insightsButton}>
            INSIGHTS
          </button>
        </div>

        <div className={styles.rightCardsSection}>
          <div className={styles.card}>
            <div className={styles.iconsGrid}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={styles.iconBox}>
                  <Image
                    src={insightsData[0].image}
                    alt={`Icon ${item}`}
                    width={80}
                    height={80}
                    className={styles.icon}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{insightsData[0].category}</span>
                <h3 className={styles.cardTitle}>{insightsData[0].title}</h3>
                <div className={styles.cardMeta}>
                  <span className={styles.author}>{insightsData[0].author}</span>
                  <span className={styles.date}>{insightsData[0].date}</span>
                </div>
              </div>
              <button className={styles.readMoreBtn}>READ MORE</button>
            </div>
          </div>

          <div className={styles.cardsSubGrid}>
            {insightsData.slice(1).map((insight, index) => (
              <div
                key={insight.id}
                className={`${styles.card} ${
                  selectedCard === index + 1 ? styles.cardSelected : ''
                }`}
                onClick={() => setSelectedCard(index + 1)}
              >
                <div className={styles.cardContent}>
                  <span className={styles.category}>{insight.category}</span>
                  <h3 className={styles.cardTitle}>{insight.title}</h3>
                  <div className={styles.cardMeta}>
                    <span className={styles.author}>{insight.author}</span>
                    <span className={styles.date}>{insight.date}</span>
                  </div>
                </div>
                <button className={styles.readMoreBtn}>READ MORE</button>
              </div>
            ))}
          </div>

          <a href="#" className={styles.readAllLink}>
            READ ALL INSIGHTS →
          </a>
        </div>
      </div>
    </section>
  )
}
