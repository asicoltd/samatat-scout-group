'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about/', label: 'About' },
    { path: '/programs/', label: 'Programs' },
    { path: '/gallery/', label: 'Gallery' },
    { path: '/events/', label: 'Events' },
    { path: '/contact/', label: 'Contact' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.headerLogo}>
            <div className={styles.headerLogoImage}>
              <Image 
                src="/images/samatat.png" 
                alt="Samatat Scout Group Logo" 
                width={50}
                height={50}
                priority
              />
            </div>
            <div className={styles.headerLogoText}>
              <span className={styles.headerLogoName}>Samatat Scout Group</span>
              <span className={styles.headerLogoTagline}>Since 1977</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.headerNav}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.headerNavLink} ${pathname === item.path ? styles.headerNavLinkActive : ''}`}
              >
                {item.label}
                <span className={styles.headerNavLinkLine}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className={styles.headerCta}>
            <Link href="/contact/" className={styles.headerBtn}>
              Join Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`${styles.headerMobileToggle} ${isMobileMenuOpen ? styles.headerMobileToggleOpen : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.headerMobileMenu} ${isMobileMenuOpen ? styles.headerMobileMenuOpen : ''}`}>
        <nav className={styles.headerMobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.headerMobileLink} ${pathname === item.path ? styles.headerMobileLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className={styles.headerMobileBtn}>
            Join Us Today
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.headerOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Header