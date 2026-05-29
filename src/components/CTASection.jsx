'use client'

import styles from '@/styles/components/CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Take the full advantage of<br />
            going paper-less now.
          </h2>
          <p className={styles.ctaDescription}>
            N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonSecondary}>
              CONTACT US
            </button>
            <button className={styles.ctaButtonPrimary}>
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
