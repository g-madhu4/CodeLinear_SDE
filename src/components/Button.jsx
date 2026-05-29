'use client'

import styles from '@/styles/components/Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
  }

  const sizeClasses = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  }

  return (
    <button
      className={`
        ${styles.button}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? styles.disabled : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
