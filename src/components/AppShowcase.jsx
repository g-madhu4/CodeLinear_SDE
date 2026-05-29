'use client'

import Image from 'next/image'
import styles from '@/styles/components/AppShowcase.module.css'
import AppShowcaseCTA from './AppShowcaseCTA'
import phoneImage1 from '../app/assets/AppShowCaseIcons/iPhone 13 Pro.png'
import phoneImage2 from '../app/assets/AppShowCaseIcons/iPhone 13 Pro (1).png'
import phoneImage3 from '../app/assets/AppShowCaseIcons/iPhone-13-Pro-Front.png'

export default function AppShowcase() {
  return (
    <section className={styles.showcaseSection}>
      {/* Scrolling Marquee Banner */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          <span>Say 👋 to the new way of banking</span>
          <span className={styles.separator}>✨</span>
          <span className={styles.brandName}>CB7</span>
          <span className={styles.separator}>✨</span>
          <span>Say 👋 to the new way of banking</span>
          <span className={styles.separator}>✨</span>
          <span className={styles.brandName}>CB7</span>
          <span className={styles.separator}>✨</span>
          <span>Say 👋 to the new way of banking</span>
        </div>
      </div>

      {/* SECTION 1: Digital Banking Out-of-the-Box */}
      <div className={styles.section1}>
        <div className={styles.section1Container}>
          {/* Left Content */}
          <div className={styles.section1Left}>
            <h2 className={styles.section1Title}>
              Digital banking<br />out-of-the-box
            </h2>
            <p className={styles.sectionDescription}>
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
            
            <button className={styles.primaryButton}>
              REQUEST DEMO
            </button>
            <a href="#" className={styles.learnMoreLink}>
              LEARN MORE →
            </a>
          </div>

          {/* Center Phone */}
          <div className={styles.phoneWrapper}>
            <Image
              src={phoneImage1}
              alt="Digital Banking App Interface"
              width={280}
              height={560}
              className={styles.phoneImg}
              priority
            />
          </div>

          {/* Right Content */}
          <div className={styles.section1Right}>
            <div className={styles.infoBox}>
              <h3>Fully compliant with regulatory requirement</h3>
              <p>The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.</p>
              
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Pre-integrated Security System</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Fully Compliant With Regulatory Requirement</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Digitally Connected Core</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Analytics & Insights */}
      <div className={styles.section2}>
        <div className={styles.section2Container}>
          {/* Left Content */}
          <div className={styles.section2Left}>
            <h2 className={styles.section2Title}>
              Analytics & Insights
            </h2>
            <p className={styles.sectionDescription}>
              Our Digital Banking solution with advanced analytics helps financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            {/* hii */}
            <button className={styles.primaryButton}>
              REQUEST DEMO
            </button>
            <a href="#" className={styles.learnMoreLink}>
              LEARN MORE →
            </a>
          </div>

          {/* Center Features */}
          <div className={styles.section1Right}>
            <div className={styles.infoBox}>
              <h3>Real-time Analytics Dashboard</h3>
              <p>Our advanced analytics dashboard provides real-time insights into customer behavior, transaction patterns, and financial trends to help you make data-driven decisions.</p>
              
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Real-time Analytics Dashboard</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Advanced Reporting Tools</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>AI-Powered Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone */}
          <div className={styles.phoneWrapper}>
            <Image
              src={phoneImage2}
              alt="Banking Analytics Dashboard"
              width={280}
              height={560}
              className={styles.phoneImg}
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: No Traditional Branches */}
      <div className={styles.section3}>
        <div className={styles.section3Container}>
          {/* Left Content */}
          <div className={styles.section2Left}>
            <h2 className={styles.section3Title}>
              No traditional<br />branches
            </h2>
            <p className={styles.sectionDescription}>
              Our Digital Banking out-of-the-box helps you accelerate innovation while reducing risks and optimizing operational costs for a seamless branchless experience.
            </p>
            
            <button className={styles.primaryButton}>
              REQUEST DEMO
            </button>
            <a href="#" className={styles.learnMoreLink}>
              LEARN MORE →
            </a>
          </div>

          {/* Center Phone */}
          <div className={styles.phoneWrapper}>
            <Image
              src={phoneImage3}
              alt="User Profile & Settings"
              width={280}
              height={560}
              className={styles.phoneImg}
            />
          </div>

          {/* Right Content */}
          <div className={styles.section1Right}>
            <div className={styles.infoBox}>
              <h3>Branchless & Paperless Banking</h3>
              <p>Provide your customers with a complete digital banking experience without the need for physical branches, reducing operational costs and improving service delivery.</p>
              
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Branchless & Paperless Banking</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Digital Transformation Capability</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#0080ff"/>
                      <path d="M8 12l2 2 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Optimized, Adoptable and Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <AppShowcaseCTA />
    </section>
  )
}
