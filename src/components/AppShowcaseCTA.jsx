'use client'

import styles from '@/styles/components/AppShowcaseCTA.module.css'

export default function AppShowcaseCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className={styles.ctaDescription}>
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>
          
          <div className={styles.rightContent}>
            <div className={styles.ctaButtons}>
              <button className={styles.contactButton}>
                CONTACT US
              </button>
              <button className={styles.demoButton}>
                REQUEST DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
