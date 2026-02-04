'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Home.css';

const Home = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images - replace with your actual images
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1600',
      title: 'Building Tomorrow\'s Leaders Today',
      subtitle: 'Join Samatat Open Scout Group and embark on a journey of character development, leadership, and community service.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1600',
      title: 'Adventure Awaits',
      subtitle: 'Experience outdoor adventures that build confidence, resilience, and teamwork in the heart of Bangladesh.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600',
      title: 'Inspiring Young Minds',
      subtitle: 'Developing character, leadership, and community spirit through scouting excellence since 1977.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600',
      title: 'Community Service',
      subtitle: 'Making a positive impact in our community through service, dedication, and scout values.'
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Gallery images for masonry section
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800',
      alt: 'Scouts camping outdoors with tents',
      caption: 'Summer Camp 2024',
      size: 'small'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
      alt: 'Scout group hiking in nature',
      caption: 'Mountain Hiking Adventure',
      size: 'small'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800',
      alt: 'Community service project',
      caption: 'Community Clean-up Day',
      size: 'small'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      alt: 'Leadership training session',
      caption: 'Leadership Workshop',
      size: 'small'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
      alt: 'Team building activities',
      caption: 'Team Building Games',
      size: 'small'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      alt: 'Scout ceremony and awards',
      caption: 'Annual Award Ceremony',
      size: 'small'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800',
      alt: 'Cooking outdoors',
      caption: 'Outdoor Cooking Skills',
      size: 'small'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
      alt: 'Rock climbing activity',
      caption: 'Adventure Training',
      size: 'small'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800',
      alt: 'Group photo of scouts',
      caption: 'Our Scout Family',
      size: 'small'
    },
  ];

  return (
    <div className="home">
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'carousel-slide--active' : ''}`}
            >
              <div className="carousel-slide__image">
                <img src={slide.image} alt={slide.title} />
                <div className="carousel-slide__overlay"></div>
              </div>
              <div className="container">
                <div className="carousel-slide__content">
                  <h1 className="carousel-slide__title">{slide.title}</h1>
                  <p className="carousel-slide__subtitle">{slide.subtitle}</p>
                  <div className="carousel-slide__actions">
                    <Link href="/contact" className="btn btn-primary">Join Us Today</Link>
                    <Link href="/about" className="btn btn-secondary">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            className="carousel-nav carousel-nav--prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="carousel-nav carousel-nav--next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'carousel-indicator--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="gallery-preview section">
        <div className="container">
          <div className="gallery-preview__header">
            <h2 className="section-title">Scout Life in Action</h2>
            <p className="gallery-preview__subtitle">
              Experience the adventure, friendship, and growth that define our scout community.
              From outdoor expeditions to community service, every moment is a learning opportunity.
            </p>
          </div>

          <div className="masonry-gallery">
            {galleryImages.map((image) => (
              <div key={image.id} className={`masonry-item masonry-item--${image.size}`}>
                <div className="masonry-item__inner">
                  <img src={image.url} alt={image.alt} loading="lazy" />
                  <div className="masonry-item__overlay">
                    <p className="masonry-item__caption">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-preview__cta">
            <Link href="/gallery" className="btn btn-primary">Explore Full Gallery</Link>
            <p className="gallery-preview__note">See hundreds more photos from our adventures</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats__grid">
            <div className="stat-item">
              <div className="stat-item__number">500+</div>
              <div className="stat-item__label">Active Scouts</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">25</div>
              <div className="stat-item__label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">100+</div>
              <div className="stat-item__label">Community Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-item__number">50+</div>
              <div className="stat-item__label">Trained Leaders</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Overview */}
      <section className="programs section pattern-bg">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="programs__grid">
            <div className="program-card program-card--cub">
              <div className="program-card__header">
                <h3 className="program-card__title">Cub Scouts</h3>
                <span className="program-card__age program-card__age--cub">Ages 6-10</span>
              </div>
              <p className="program-card__description">
                Young explorers learn basic scouting skills through fun activities, games, and outdoor adventures.
              </p>
              <ul className="program-card__features">
                <li>Fun outdoor activities</li>
                <li>Character development</li>
                <li>Basic life skills</li>
              </ul>
              <div className="program-card__cta">
                <a href="#cubs" className="btn btn-cub">Learn More</a>
              </div>
            </div>

            <div className="program-card program-card--scout program-card--featured">
              <div className="program-card__header">
                <h3 className="program-card__title">Scouts</h3>
                <span className="program-card__age program-card__age--scout">Ages 11-16</span>
              </div>
              <p className="program-card__description">
                Build leadership skills, earn badges, and participate in camping, hiking, and community service.
              </p>
              <ul className="program-card__features">
                <li>Advanced outdoor skills</li>
                <li>Leadership training</li>
                <li>Community projects</li>
              </ul>
              <div className="program-card__cta">
                <a href="#scouts" className="btn btn-scout">Learn More</a>
              </div>
            </div>

            <div className="program-card program-card--rover">
              <div className="program-card__header">
                <h3 className="program-card__title">Rover Scouts</h3>
                <span className="program-card__age program-card__age--rover">Ages 17-25</span>
              </div>
              <p className="program-card__description">
                Young adults take on leadership roles, organize activities, and serve as mentors for younger scouts.
              </p>
              <ul className="program-card__features">
                <li>Leadership opportunities</li>
                <li>Mentorship roles</li>
                <li>Service projects</li>
              </ul>
              <div className="program-card__cta">
                <a href="#rovers" className="btn btn-rover">Learn More</a>
              </div>
            </div>
          </div>
          <div className="programs__cta">
            <Link href="/programs" className="btn btn-primary">Explore All Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;