'use client'

import Image from 'next/image'
import styles from '@/styles/components/Features.module.css'
import dashboardImage from '../app/assets/FeaturesIcons/MacBook Pro 16.png'

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.mainHeading}>
            A complete cloud-based<br />
            core banking.
          </h2>
          
          <p className={styles.description}>
            Faster time to market with our cloud-based<br />
            core banking services
          </p>

          <button className={styles.primaryButton}>
            REQUEST DEMO
          </button>

          <a href="#" className={styles.learnMoreLink}>
            LEARN MORE <span>→</span>
          </a>
        </div>

        {/* Right Content - Dashboard Image */}
        <div className={styles.rightContent}>
          <div className={styles.dashboardWrapper}>
            <Image
              src={dashboardImage}
              alt="AML Dashboard"
              className={styles.dashboardImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
