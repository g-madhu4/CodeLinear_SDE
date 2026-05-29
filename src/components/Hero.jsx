'use client'

import Image from 'next/image'
import styles from '@/styles/components/Hero.module.css'
import userImage from '../app/assets/Pexels Photo by Andrea Piacquadio@2x.png'
import headerImage from '../app/assets/Home.png'
import logo1 from '../app/assets/TrustedBy/logo.png'
import logo2 from '../app/assets/TrustedBy/logo (1).png'
import logo3 from '../app/assets/TrustedBy/logo (2).png'
import logo4 from '../app/assets/TrustedBy/logo (3).png'
import logo5 from '../app/assets/TrustedBy/logo (4).png'
import logo6 from '../app/assets/TrustedBy/logo (5).png'
import dollarIcon from '../app/assets/HeroIcons/dollar 1.png'
import transferIcon from '../app/assets/HeroIcons/transfer-money 1.png'
import arrowIcon from '../app/assets/HeroIcons/up-right-arrow 1.png'
import profileIcon from '../app/assets/HeroIcons/Rectangle 11.png'
import bellIcon from '../app/assets/HeroIcons/Group (1).png'


export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Elements */}
      <div className={styles.gradientBlob}></div>

      {/* Hero Content Container */}
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            The new foundation<br />
            of modern banking
          </h1>

          <p className={styles.description}>
            We drive innovation and growth, provide seamless<br />
            customer experience and operational excellence
          </p>

          {/* CTA Buttons */}
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>
              REQUEST DEMO
            </button>
            <button className={styles.secondaryBtn}>
              CONTACT US
            </button>
          </div>

          {/* Trusted By Section */}
          <div className={styles.trustedSection}>
            <p className={styles.trustedLabel}>Trusted By:</p>
            <div className={styles.trustedLogos}>
              <Image
                src={logo1}
                alt="Logo 1"
                width={150}
                height={60}
                className={styles.logoImage}
              />
              <Image
                src={logo2}
                alt="Logo 2"
                width={150}
                height={60}
                className={styles.logoImage}
              />
              <Image
                src={logo3}
                alt="Logo 3"
                width={150}
                height={60}
                className={styles.logoImage}
              />
              <Image
                src={logo4}
                alt="Logo 4"
                width={150}
                height={60}
                className={styles.logoImage}
              />
              <Image
                src={logo5}
                alt="Logo 5"
                width={150}
                height={60}
                className={styles.logoImage}
              />
              <Image
                src={logo6}
                alt="Logo 6"
                width={150}
                height={60}
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            {/* Background user image */}
            <Image
              src={userImage}
              alt="Banking App User"
              width={363}
              height={301}
              priority
              className={styles.userImage}
            />

            {/* Activity Card - Left Bottom */}
            <div className={styles.activityCard}>
              <div className={styles.cardTitle}>Recent activity</div>
              <div className={styles.tabs}>
                <div className={styles.tab}>This Day</div>
                <div className={`${styles.tab} ${styles.activeTab}`}>This Week</div>
                <div className={styles.tab}>This Month</div>
                <div className={styles.tab}>6 Month</div>
              </div>
              <div className={styles.activityRow}>
                <div className={styles.activityLeft}>
                  <div className={styles.activityIcon}>
                    <Image
                      src={arrowIcon}
                      alt="Arrow"
                      width={24}
                      height={24}
                      className={styles.iconImage}
                    />
                  </div>
                  <div>
                    <div className={styles.activityName}>To Jim . Work</div>
                    <div className={styles.activityDate}>12 Jun 2022</div>
                  </div>
                </div>
                <div className={styles.activityAmount}>-$59</div>
              </div>
            </div>

            {/* Profile Card - Top Right */}
            <div className={styles.mockupCard}>
              <div className={styles.profileRow}>
                <div className={styles.profileLeft}>
                  <Image
                    src={profileIcon}
                    alt="Profile"
                    width={38}
                    height={38}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.profileName}>Toni Kross</div>
                    <div className={styles.profileSub}>Good Morning</div>
                  </div>
                </div>
                <div className={styles.notification}>
                  <Image
                    src={bellIcon}
                    alt="Notification"
                    width={100}
                    height={100}
                    className={styles.iconImage}
                  />
                </div>
              </div>

              <div className={styles.balanceLabel}>Total balance</div>
              <div className={styles.balance}>$42,295.00 USD</div>

              <div className={styles.cardDivider}></div>

              <div className={styles.cardActions}>
                <div className={styles.actionItem}>
                  <div className={styles.actionIcon}>
                    <Image
                      src={transferIcon}
                      alt="Transfer"
                      width={24}
                      height={24}
                      className={styles.iconImage}
                    />
                  </div>
                  <span>Fund Transfer</span>
                </div>
                <div className={styles.actionItem}>
                  <div className={styles.actionIcon}>
                    <Image
                      src={dollarIcon}
                      alt="Dollar"
                      width={24}
                      height={24}
                      className={styles.iconImage}
                    />
                  </div>
                  <span>Add Money</span>
                </div>
                <div className={styles.actionItem}>
                  <div className={styles.actionIcon}>
                    ⋯
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
