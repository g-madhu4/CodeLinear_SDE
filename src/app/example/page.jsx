'use client'

import Image from 'next/image'
import styles from './example.module.css'

export default function ExamplePage() {
  // Example: Parameter-based styling
  const [theme, setTheme] = React.useState('dark')

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>How to Add Images</h1>

        {/* EXAMPLE 1: Local Static Image */}
        <div className={styles.exampleBlock}>
          <h2>Example 1: Using Local Images</h2>
          <p>Place images in /public folder, then reference them:</p>
          
          <div className={styles.code}>
            {/* 
              To use this, first add an image file to /public:
              1. Save image as /public/sample-image.jpg
              2. Then use it like this:
            */}
            {/* <Image
              src="/sample-image.jpg"
              alt="Sample Image"
              width={400}
              height={300}
              priority
            /> */}
            <p style={{ color: '#888' }}>
              (Uncomment the Image component above and add image to /public)
            </p>
          </div>
        </div>

        {/* EXAMPLE 2: Image with CSS Styling */}
        <div className={styles.exampleBlock}>
          <h2>Example 2: Styled Images with CSS Modules</h2>
          <div className={styles.imageGrid}>
            {/* Placeholder for your images */}
            <div className={styles.imagePlaceholder}>
              <p>400x300</p>
              <small>Replace with your image</small>
            </div>
            <div className={styles.imagePlaceholder}>
              <p>400x300</p>
              <small>Replace with your image</small>
            </div>
            <div className={styles.imagePlaceholder}>
              <p>400x300</p>
              <small>Replace with your image</small>
            </div>
          </div>
        </div>

        {/* EXAMPLE 3: Parameter-based Image Display */}
        <div className={styles.exampleBlock}>
          <h2>Example 3: Parameter-Based Image Styling</h2>
          <div className={styles.themeSelector}>
            <button
              onClick={() => setTheme('dark')}
              className={theme === 'dark' ? styles.active : ''}
            >
              Dark Theme
            </button>
            <button
              onClick={() => setTheme('light')}
              className={theme === 'light' ? styles.active : ''}
            >
              Light Theme
            </button>
          </div>
          
          <div className={`${styles.imageContainer} ${styles[theme]}`}>
            {/* Your image here - changes style based on theme */}
            <div className={styles.imagePlaceholder}>
              <p>Dynamic Image with {theme} theme</p>
            </div>
          </div>
        </div>

        {/* EXAMPLE 4: Responsive Image Gallery */}
        <div className={styles.exampleBlock}>
          <h2>Example 4: Responsive Image Gallery</h2>
          <div className={styles.gallery}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.galleryItem}>
                <div className={styles.imagePlaceholder}>
                  Image {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div className={styles.reference}>
          <h2>📋 Quick Reference</h2>
          
          <div className={styles.code}>
            <p><strong>Import Image component:</strong></p>
            <code>{'import Image from \'next/image\''}</code>
          </div>

          <div className={styles.code}>
            <p><strong>Use in JSX:</strong></p>
            <code>{`<Image
  src="/image-name.jpg"
  alt="Description"
  width={400}
  height={300}
  priority
/>`}</code>
          </div>

          <div className={styles.code}>
            <p><strong>Image folder structure:</strong></p>
            <code>{`public/
├── image1.jpg
├── image2.png
├── images/
│   ├── hero.jpg
│   └── profile.jpg`}</code>
          </div>

          <div className={styles.code}>
            <p><strong>CSS Module styling:</strong></p>
            <code>{`import styles from './page.module.css'
<div className={styles.imageContainer}>
  <Image ... />
</div>`}</code>
          </div>
        </div>

        {/* Tips */}
        <div className={styles.tips}>
          <h3>💡 Best Practices</h3>
          <ul>
            <li>✅ Use Next.js Image component for optimization</li>
            <li>✅ Add the priority attribute to above-the-fold images</li>
            <li>✅ Use responsive image sizes with the sizes prop</li>
            <li>✅ Keep images under 500KB for better performance</li>
            <li>✅ Use descriptive alt text for accessibility</li>
            <li>✅ Use WebP format when possible</li>
            <li>✅ Test images on mobile and desktop</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

// Temporarily fix React import for this example
import React from 'react'
