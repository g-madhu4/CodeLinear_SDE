'use client'

import styles from '@/styles/components/Card.module.css'

export default function Card({ 
  title, 
  children, 
  variant = 'default',
  className = '' 
}) {
  const variantClasses = {
    default: styles.cardDefault,
    primary: styles.cardPrimary,
    secondary: styles.cardSecondary,
  }

  return (
    <div className={`${styles.card} ${variantClasses[variant]} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  )
}
