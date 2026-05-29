'use client'

import Link from 'next/link'
import styles from '@/styles/components/Footer.module.css'

export default function Footer() {
  const locations = [
    {
      city: 'London',
      company: 'Linkita Infosystems Ltd - CB7',
      address: '26 Main Road Sunderidge, TN14 6EP, England, United Kingdom',
    },
    {
      city: 'Dubai',
      company: 'Linkita Infosystems Ltd - CB7',
      address: 'Jumeirah Business Center 5, Cluster M, Jumeirah Lake Towers, Dubai, United Arab Emirates',
    },
    {
      city: 'London',
      company: 'Linkita Infosystems Ltd - CB7',
      address: 'Nirmal, Anand Nagar, Sutton Road, Pune, Maharashtra, 411043, India',
    },
  ]

  const solutions = [
    { label: 'Core Banking CB7', href: '#', highlight: true },
    { label: 'Digital Banking N7', href: '#' },
    { label: 'Open Banking', href: '#' },
    { label: 'Loan Origination System', href: '#' },
    { label: 'Loan Management System', href: '#' },
    { label: 'Digital Transformation', href: '#' },
  ]

  const n7Banking = [
    { label: 'About Us', href: '#' },
    { label: 'Solutions', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Company', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Insights', href: '#' },
    { label: 'Core Team', href: '#' },
    { label: 'Brand Center', href: '#' },
  ]

  const socials = [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <div className={styles.logo}>N7</div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className={styles.contentSection}>
          {/* Locations */}
          <div className={styles.locationsGrid}>
            {locations.map((location, index) => (
              <div key={index} className={styles.locationCard}>
                <h3 className={styles.locationCity}>{location.city}</h3>
                <p className={styles.company}>{location.company}</p>
                <p className={styles.address}>{location.address}</p>
              </div>
            ))}
          </div>

          {/* Links Grid */}
          <div className={styles.linksGrid}>
            {/* Solutions Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Solutions</h4>
              <ul className={styles.linksList}>
                {solutions.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`${styles.link} ${
                        item.highlight ? styles.linkHighlight : ''
                      }`}
                    >
                      {item.label}
                      <span className={styles.arrow}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* N7 Banking Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>N7 Banking</h4>
              <ul className={styles.linksList}>
                {n7Banking.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                      <span className={styles.arrow}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Socials Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Our Socials</h4>
              <ul className={styles.linksList}>
                {socials.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                      <span className={styles.arrow}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          Copyright © 2022 by Linkita Infosystems Limited — (CB7 and N7 as Commercial Brand) — [Registered
          under the Companies Act 2006 in England and Wales | Incorporation 13100863]
        </p>
      </div>
    </footer>
  )
}
