'use client'

import Image from 'next/image'
import styles from '@/styles/components/Benefits.module.css'
import benefitImage from '../app/assets/FeaturesIcons/Frame 99 (1).png'
import checkIcon from '../app/assets/FeaturesIcons/Frame 15.png'

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'Real-time Transactions',
    },
    {
      id: 2,
      title: 'Managing deposits and withdrawals',
    },
    {
      id: 3,
      title: 'Advanced Data Analytics',
    },
    {
      id: 4,
      title: 'Instant Confirmations',
    },
    {
      id: 5,
      title: 'CRM Analytics',
    },
    {
      id: 6,
      title: 'Configuring new banking packages',
    },
  ]

  const additionalBenefits = [
    {
      id: 1,
      title: 'Seamless Integration',
    },
    {
      id: 2,
      title: 'Establishing entire for standard practices',
    },
    {
      id: 3,
      title: 'Security First Approach',
    },
    {
      id: 4,
      title: 'Enhanced platform Capability',
    },
  ]

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.leftContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={benefitImage}
              alt="Banking Platform"
              className={styles.benefitImage}
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.rightContent}>
          <h2 className={styles.mainHeading}>
            Run a more efficient, flexible and digitally connected
            corebanking system
          </h2>

          <div className={styles.benefitsGrid}>
            {/* Left Column */}
            <div className={styles.benefitsColumn}>
              <h3 className={styles.columnLabel}>What you will get </h3>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit) => (
                  <li key={benefit.id} className={styles.benefitItem}>
                    <Image
                      src={checkIcon}
                      alt="check"
                      width={32}
                      height={32}
                      className={styles.checkmark}
                    />
                    <span className={styles.benefitText}>{benefit.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className={styles.benefitsColumn}>
              <h3 className={styles.columnLabel}>&nbsp;</h3>
              <ul className={styles.benefitsList}>
                {additionalBenefits.map((benefit) => (
                  <li key={benefit.id} className={styles.benefitItem}>
                    <Image
                      src={checkIcon}
                      alt="check"
                      width={32}
                      height={32}
                      className={styles.checkmark}
                    />
                    <span className={styles.benefitText}>{benefit.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
