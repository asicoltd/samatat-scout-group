import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* About Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Samatat Open Scout Group</h3>
              <p className={styles.footerText}>
                Building character, leadership, and community through scouting. 
                We are committed to developing young people to reach their full potential.
              </p>
              <div className={styles.footerBadges}>
                <div className={styles.footerBadge} title="Bangladesh Scouts">
                  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 5L30 20L45 20L33 29L38 44L25 35L12 44L17 29L5 20L20 20L25 5Z" 
                          fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerSubtitle}>Quick Links</h4>
              <nav className={styles.footerLinks}>
                <Link href="/about/" className={styles.footerLink}>About Us</Link>
                <Link href="/programs/" className={styles.footerLink}>Programs</Link>
                <Link href="/events/" className={styles.footerLink}>Events</Link>
                <Link href="/gallery/" className={styles.footerLink}>Gallery</Link>
              </nav>
            </div>

            {/* Programs */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerSubtitle}>Our Programs</h4>
              <nav className={styles.footerLinks}>
                <a href="#cubs" className={styles.footerLink}>Cub Scouts</a>
                <a href="#scouts" className={styles.footerLink}>Scouts</a>
                <a href="#rovers" className={styles.footerLink}>Rover Scouts</a>
                <a href="#training" className={styles.footerLink}>Leader Training</a>
              </nav>
            </div>

            {/* Contact */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerSubtitle}>Get In Touch</h4>
              <div className={styles.footerContact}>
                <p className={styles.footerContactItem}>
                  <strong>Location:</strong>
                  142 Crescent road,<br/> Dhanmondi, Dhaka-1205
                </p>
                <p className={styles.footerContactItem}>
                  <strong>Email:</strong>
                  <a href="mailto:info@samatatscouts.org">info@samatatscouts.org</a>
                </p>
                <p className={styles.footerContactItem}>
                  <strong>Phone:</strong>
                  <a href="tel:+8801234567890">01550032232</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p className={styles.footerCopyright}>
              © {currentYear} Samatat Open Scout Group. All rights reserved.
            </p>
            <p className={styles.footerAffiliation}>
              Affiliated with Bangladesh Scouts
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer