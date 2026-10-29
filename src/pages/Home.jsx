import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageSEO from '../components/PageSEO'
import SmoothParagraph from '../components/SmoothParagraph'
import AnimatedLetters from '../components/AnimatedLetters'
import HomeAboutSection from '../components/HomeAboutSection'
import HomeServicesSection from '../components/HomeServicesSection'
import HomeWhyChooseSection from '../components/HomeWhyChooseSection'
import HomeProjectsSection from '../components/HomeProjectsSection'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'
import HomeTestimonialsSection from '../components/HomeTestimonialsSection'
import HomeFaqSection from '../components/HomeFaqSection'
import HomeContactSection from '../components/HomeContactSection'

const HERO_IMAGES = [
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839288/h2_b7vxdv.webp',
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1770963793/h1_pxqeah.webp',
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839248/h3_zgwgo4.webp',
  'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839305/h4_h7v16z.webp',
]

const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Jaz Builders Group',
  alternateName: 'JAZ Builders and Promoters',
  url: 'https://jazbuildersgroup.com',
  logo: 'https://jazbuildersgroup.com/image/logo.png',
  image: 'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp',
  description: 'JAZ Builders offers a comprehensive range of construction services including building construction, architecture design, building renovation, and more. Trusted builders in Tenkasi, Tamil Nadu.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '69/1, Kattubava Pallivasal Street',
    addressLocality: 'Tenkasi',
    addressRegion: 'Tamil Nadu',
    postalCode: '627811',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.9604,
    longitude: 77.3085,
  },
  areaServed: [{ '@type': 'State', name: 'Tamil Nadu' }, { '@type': 'City', name: 'Tenkasi' }],
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+91-93639-33050', contactType: 'customer service', areaServed: 'IN' },
    { '@type': 'ContactPoint', telephone: '+91-94863-22351', contactType: 'customer service' },
  ],
  email: 'info@jazbuildersgroup.com',
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
}

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Preload first hero image for faster LCP (helps Performance score)
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = HERO_IMAGES[0]
    document.head.appendChild(link)
    return () => { if (link.parentNode) link.parentNode.removeChild(link) }
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <PageSEO
        fullTitle="JAZ Builders and Promoters: Home"
        title="Home"
        description="JAZ Builders offers a comprehensive range of construction services including building construction, architecture design, building renovation, building ...Read more"
        keywords="JAZ Builders and Promoters, building construction, architecture design, building renovation, construction Tenkasi, real estate, Tenkasi builders"
        jsonLd={HOME_JSON_LD}
      />
      <section
        id="hero"
        aria-label="Hero"
        className="relative min-h-screen overflow-hidden bg-slate-100 pt-20"
      >
        {/* Background slideshow */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((url, index) => (
            <div
              key={url}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll transition-opacity duration-700 ease-out md:bg-fixed"
              style={{
                backgroundImage: `url('${url}')`,
                opacity: index === currentImageIndex ? 1 : 0,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-1 bg-black/40"
          aria-hidden
        />

        <div
          id="content"
          className="relative z-10 flex min-h-[calc(110vh-5rem)] w-full items-center justify-center px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10"
        >
          <div className="mx-auto w-full max-w-6xl rounded-2xl bg-white/10 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12 md:px-12 md:py-14">
            
            <SmoothParagraph className="mb-3 text-sm uppercase tracking-[0.14em] text-white/95 sm:text-base md:text-lg">
              Welcome to JAZ Builders and Promoters
            </SmoothParagraph>

            <h1 className="mb-7 text-3xl leading-[1.1] font-normal text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <AnimatedLetters delayPerLetter={40} durationMs={500}>
                A Foundation for
              </AnimatedLetters>
              <br />
              <AnimatedLetters
                delayPerLetter={40}
                durationMs={500}
                startDelay={280}
              >
                Your Future
              </AnimatedLetters>
            </h1>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              
              <Link
                to="/contact"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-md border border-white/80 bg-black/10 px-6 py-3 text-base font-medium lowercase text-white transition-colors duration-200 ease-out hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto sm:px-7 sm:text-lg"
                aria-label="Get started - go to contact"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white text-white" aria-hidden="true">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                get started
              </Link>

              <Link
                to="/project"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-md px-6 py-3 text-base font-medium text-[#0d5c5f] transition-opacity duration-200 ease-out hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d5c5f] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto sm:px-7 sm:text-lg"
                style={{ backgroundColor: '#8FD8D3' }}
                aria-label="View projects"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded bg-white/25" aria-hidden="true">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </span>
                view Projects
              </Link>

            </div>
          </div>
        </div>
      </section>

      <HomeAboutSection />
      <HomeServicesSection />
      <HomeWhyChooseSection />
      <HomeProjectsSection />
      <HomeBuildTogetherSection />
      <HomeTestimonialsSection />
      <HomeFaqSection />
      <HomeContactSection />
    </>
  )
}

export default Home
