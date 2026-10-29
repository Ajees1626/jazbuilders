import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiChevronRight, FiMail, FiMapPin, FiX } from 'react-icons/fi'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { GiRotaryPhone } from 'react-icons/gi'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [activePopup, setActivePopup] = useState(null)

  const services = [
    { label: 'Construction Project', to: '/service/construction-project' },
    { label: 'PEB (Pre-Engineered Buildings)', to: '/service/peb' },
    { label: 'Real Estate', to: '/service/real-estate' },
    { label: 'Joint Venture', to: '/service/joint-venture' },
    { label: 'Architectural Design', to: '/service/architectural-design' },
    { label: 'Project Consulting', to: '/service/project-consulting' },
  ]

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Service', to: '/service' },
    { label: 'Project', to: '/project' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact Us', to: '/contact' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaz-builders-and-promoters-11aa662b1/', icon: FaLinkedinIn },
    { label: 'Instagram', href: 'https://www.instagram.com/jazbuilders_promoters/', icon: FaInstagram },
    { label: 'Facebook', href: 'https://www.facebook.com/people/Jaz-Builders-And-Promoters/61587101391523/', icon: FaFacebookF },
    { label: 'YouTube', href: 'https://www.youtube.com/@jazbuilderspromoters', icon: FaYoutube },
    { label: 'X', href: 'https://x.com/builders_jaz', icon: FaXTwitter },
  ]

  const popupContent = {
    privacy: {
      title: 'Privacy Policy',
      paragraphs: [
        'Privacy Policy - We value your privacy. Any personal information shared through this website is used only to respond to your enquiries and provide our services. We do not share your information with third parties, except when required by law.',
        'When you contact us through our website, we may collect personal information such as your name, email address, phone number, and any other details you choose to provide. This information is used solely for the purpose of responding to your inquiries and providing you with the services you have requested.',
        'We are committed to protecting your personal information and maintaining your privacy. We implement appropriate security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.',
        'We do not sell, trade, or rent your personal information to third parties. Your information may only be disclosed if required by law or if we believe such disclosure is necessary to protect our rights or comply with a judicial proceeding, court order, or legal process.',
      ],
    },
    terms: {
      title: 'Terms of Service',
      paragraphs: [
        'Terms of Service - By using this website, you agree to these terms. All information on this site is for general reference and may change without notice. JAZ Builders & Promoters shall not be held liable for any loss or damage arising from the use of this website.',
        'The content provided on this website is intended for informational purposes only. While we strive to ensure accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.',
        'Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.',
      ],
    },
  }

  const selectedPopup = activePopup ? popupContent[activePopup] : null

  useEffect(() => {
    document.body.style.overflow = activePopup ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activePopup])

  return (
    <>
      <footer className="mt-auto bg-jaz-dark text-[15px] text-white" role="contentinfo">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="grid items-start gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.9fr_1.1fr] lg:gap-12">
            <div>
              <Link to="/" className="inline-flex items-center">
                <img
                  src="https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp"
                  alt="JAZ Builders and Promoters"
                  className="h-16 w-auto max-w-full object-contain sm:h-24 md:h-32 lg:h-40"
                />
              </Link>

              <p className="mt-6 max-w-[280px] text-base leading-relaxed text-justify text-white/85">
                Building dreams with precision and excellence. We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/22 hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.7),inset_0_1px_0_rgba(255,255,255,0.28)]"
                  >
                    <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-xl font-medium">Our Services</h3>
              <div className="mb-4 h-0.5 w-12 bg-white/80" />
              <ul className="space-y-1.5">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-start gap-2 text-base text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]"
                    >
                      <FiChevronRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-1 text-xl font-medium">Company</h3>
              <div className="mb-4 h-0.5 w-12 bg-white/80" />
              <ul className="space-y-1.5">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 text-base text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]"
                    >
                      <FiChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                to="/contact"
                className="mb-1 inline-block text-xl font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]"
              >
                Contact Us
              </Link>
              <div className="mb-4 h-0.5 w-12 bg-white/80" />

              <ul className="space-y-3 text-base">
                <li className="group flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/22 group-hover:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <GiRotaryPhone className="h-4 w-4" />
                  </span>
                  <a href="tel:+914633210218" className="text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]">04633 210218</a>
                </li>
                <li className="group flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/22 group-hover:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <MdOutlinePhoneIphone  className="h-4 w-4" />
                  </span>
                  <a href="tel:+919486322351" className="text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]">+91 9486322351</a>
                </li>
                <li className="group flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/22 group-hover:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <FaWhatsapp className="h-4 w-4" />
                  </span>
                  <a href="https://wa.me/919363933050" target="_blank" rel="noreferrer" className="text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]">
                    +91 9363933050
                  </a>
                </li>
                <li className="group flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/22 group-hover:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <FiMail className="h-4 w-4" />
                  </span>
                  <a href="mailto:info@jazbuildersgroup.com" className="text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]">
                    info@jazbuildersgroup.com
                  </a>
                </li>
              </ul>

              <div className="mt-5 border-t border-white/20 pt-4">
                <div className="mb-3 flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/22 hover:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <div className="text-base text-white/90">
                    <p className="font-medium text-white">Head Office:</p>
                    <p>69/1, Kattubava Pallivasal Street, Tenkasi - 627811.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/22 hover:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <div className="text-base text-white/90">
                    <p className="font-medium text-white">Branch Office:</p>
                    <p>174/5-5, Railway Road, Tenkasi-627811</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-3 border-t border-white/20 pt-6 text-center text-xs text-white/85 sm:grid-cols-3 sm:gap-4">
            <p className="sm:text-left">
              Copyright © {currentYear} JAZ Builders and Promoters. All Rights Reserved.
            </p>
            <a
              href="https://www.pixdotsolutions.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 transition-all duration-300 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]"
            >
              Developed by{' '}
              <span className="font-semibold underline decoration-white/40 underline-offset-2 hover:decoration-white">
                Pixdot
              </span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end sm:gap-3">
              <button
                type="button"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]"
                onClick={() => setActivePopup('privacy')}
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">|</span>
              <button
                type="button"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.45)]"
                onClick={() => setActivePopup('terms')}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {selectedPopup && (
        <div
          className="fixed inset-0 z-120 flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm sm:px-6 md:px-8"
          onClick={() => setActivePopup(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPopup.title}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6 md:px-8 md:py-5">
              <h3 className="text-xl font-medium text-jaz-dark sm:text-2xl md:text-3xl">{selectedPopup.title}</h3>
              <button
                type="button"
                onClick={() => setActivePopup(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close popup"
              >
                <FiX className="h-7 w-7" />
              </button>
            </div>

            <div className="max-h-[72vh] overflow-y-auto px-4 py-4 sm:px-6 md:px-8 md:py-6">
              {selectedPopup.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-base leading-relaxed text-justify text-slate-700 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
