'use client'

import Image from 'next/image'
import styles from '@/styles/components/Solutions.module.css'
import icon1 from '../app/assets/SolutionIcons/Vector.png'
import icon2 from '../app/assets/SolutionIcons/Vector (1).png'
import icon3 from '../app/assets/SolutionIcons/Vector (2).png'
import icon4 from '../app/assets/SolutionIcons/Vector (3).png'
import icon5 from '../app/assets/SolutionIcons/Group.png'

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'Core Banking CB7',
      description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
      icon: icon1,
    },
    {
      id: 2,
      title: 'Digital Banking N7',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
      icon: icon2,
    },
    {
      id: 3,
      title: 'Open Banking',
      description: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamlining customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
      icon: icon3,
    },
    {
      id: 4,
      title: 'Loan Origination System',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed for institutions.',
      icon: icon4,
    },
    {
      id: 5,
      title: 'Loan Management System',
      description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
      icon: icon5,
    },
  ]

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.mainContainer}>
        {/* Left Side - Title and Button */}
        <div className={styles.leftContent}>
          <h2 className={styles.mainTitle}>
            All of our solutions are<br />
            tailor-made to your needs
          </h2>
          <button className={styles.headerButton}>
            REQUEST DEMO
          </button>
        </div>

        {/* Right Side - Solutions Grid */}
        <div className={styles.rightContent}>
          <div className={styles.solutionsGrid}>
            {solutions.map((solution) => (
              <div key={solution.id} className={styles.solutionCard}>
                <div className={styles.cardIcon}>
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    className={styles.iconImage}
                  />
                </div>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDescription}>{solution.description}</p>
                <a href="#" className={styles.learnMore}>
                  LEARN MORE <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
