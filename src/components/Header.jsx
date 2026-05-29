'use client'

import { useState } from 'react'
import styles from '@/styles/components/Header.module.css'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const navigationItems = [
    { label: 'SOLUTIONS', href: '#' },
    { label: 'RESOURCES', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>N7</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navItem}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          REQUEST DEMO
        </button>
      </div>
    </header>
  )
}
