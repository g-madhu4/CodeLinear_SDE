'use client'

import styles from '@/styles/components/CTABanner.module.css'

export default function CTABanner() {
  return (
    <section className={styles.ctaBannerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Take the full advantage of<br />
            going paper-less now.
          </h2>
          
          <p className={styles.description}>
            CB7 helps your financial institution improve the client experience,<br />
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.buttonSecondary}>
            CONTACT US
          </button>
          <button className={styles.buttonPrimary}>
            REQUEST DEMO
          </button>
        </div>
      </div>
    </section>
  )
}
