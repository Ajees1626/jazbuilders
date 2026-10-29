import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import PageSEO from '../components/PageSEO'
import HomeBuildTogetherSection from '../components/HomeBuildTogetherSection'
import SmoothParagraph from '../components/SmoothParagraph'
import { submitWeb3FormFromForm } from '../api'

const WEB3FORMS_ACCESS_KEY_CAREERS = '9a405910-ad66-45df-8d08-f72fee42f121'

function Careers() {
  const heroRef = useRef(null)
  const careerFormRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [careerForm, setCareerForm] = useState({
    full_name: '', email: '', phone: '', graduation_year: '', gender: '',
    experience: '', current_ctc: '', expected_ctc: '', notice_period: '', location: '',
  })
  const [careerLoading, setCareerLoading] = useState(false)
  const [careerFeedback, setCareerFeedback] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  const jobs = [
    {
      title: 'Site Engineer',
      description:
        'Responsible for managing day-to-day site operations and ensuring construction work is executed as per drawings and specifications. Coordinates with contractors and supervises site activities to maintain quality and safety standards. Must ensure timely completion of project milestones.',
    },
    {
      title: 'Structural Engineer',
      description:
        'Responsible for designing, analyzing, and reviewing structural elements to ensure stability and safety. Collaborates with architects and project teams to develop efficient structural solutions. Ensures compliance with building codes and project requirements.',
    },
    {
      title: 'Marketing Manager',
      description:
        'Leads the development and execution of marketing strategies to enhance brand visibility and drive business growth. Manages campaigns, digital presence, and market research initiatives. Collaborates with sales and creative teams to achieve marketing goals.',
    },
    {
      title: 'Designer - CAD 2D & 3D',
      description:
        'Creates precise 2D drawings and 3D models using CAD software for architectural and structural designs. Works closely with engineers and project teams to translate concepts into detailed plans. Ensures accuracy and adherence to project specifications.',
    },
  ]

  useEffect(() => {
    if (!selectedJob) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedJob])

  const openApplyModal = (job) => {
    setSelectedJob(job)
    setCareerForm({ full_name: '', email: '', phone: '', graduation_year: '', gender: '', experience: '', current_ctc: '', expected_ctc: '', notice_period: '', location: '' })
    setCareerFeedback(null)
  }

  const closeApplyModal = () => {
    setSelectedJob(null)
  }

  const doSubmitCareer = async () => {
    if (!careerFormRef.current) return
    try {
      await submitWeb3FormFromForm(careerFormRef.current)
      setCareerFeedback({ type: 'success', text: 'Thank you! Your application has been submitted. We will review it and get in touch. A confirmation email has been sent to you.' })
      setCareerForm({ full_name: '', email: '', phone: '', graduation_year: '', gender: '', experience: '', current_ctc: '', expected_ctc: '', notice_period: '', location: '' })
      setTimeout(() => closeApplyModal(), 2500)
    } catch (err) {
      setCareerFeedback({ type: 'error', text: err.message || 'Something went wrong. Please try again or email your CV to us.' })
    } finally {
      setCareerLoading(false)
    }
  }

  const AnimatedLetters = ({ text, visible }) => (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{ transitionDelay: `${i * 35}ms` }}
          className={`inline-block transition-all duration-500 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )

  return (
    <>
      <PageSEO
        title="Careers"
        description="Join JAZ Builders and Promoters – Careers in construction, site engineering, structural engineering, marketing and CAD design. Apply now in Tenkasi."
        keywords="careers JAZ Builders, construction jobs Tenkasi, site engineer, structural engineer jobs"
      />
      <section
        ref={heroRef}
        aria-label="Careers hero"
        className="relative flex min-h-[110vh] items-center justify-center overflow-hidden pt-20"
      >
        <div
          className={`hero-bg-zoom absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat ${
            heroVisible ? 'is-visible' : ''
          }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839697/Career_wvucaf.webp')",
          }}
        />
        <div className="relative z-10 w-full overflow-hidden px-4 text-center text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <h1 className="mb-5 text-4xl font-normal sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedLetters text="CAREERS" visible={heroVisible} />
          </h1>
          <div
            className={`flex items-center justify-center gap-3 text-base text-white/90 transition-all duration-500 ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <Link to="/" className="transition-colors duration-200 ease-out hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </div>
        </div>
      </section>

      <article className="relative z-20 -mt-8 overflow-hidden rounded-t-2xl bg-white sm:-mt-12 sm:rounded-t-3xl md:-mt-16 md:rounded-t-[40px] lg:-mt-20 lg:rounded-t-[60px] xl:rounded-t-[80px]">
        <section aria-label="Job openings" className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h2 className="mb-8 text-center text-3xl font-normal text-slate-900 sm:mb-10 sm:text-4xl md:text-5xl py-8">
              We&apos;re Hiring
            </h2>

            <div className="space-y-6 sm:space-y-7">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-6 md:p-8"
                  itemScope
                  itemType="https://schema.org/JobPosting"
                >
                  <h3 className="mb-3 text-3xl py-2 font-normal text-slate-800 sm:text-4xl" itemProp="title">
                    {job.title}
                  </h3>
                  <SmoothParagraph className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg" itemProp="description">
                    {job.description}
                  </SmoothParagraph>
                  <button
                    type="button"
                    onClick={() => openApplyModal(job)}
                    className="inline-flex items-center justify-center rounded-xl bg-jaz-dark px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-jaz sm:px-6 sm:py-3 sm:text-base"
                    aria-label={`Apply for ${job.title} position`}
                  >
                    Apply Now
                  </button>
                </article>
              ))}
            </div>

            <SmoothParagraph className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              We&apos;re on the lookout for a skilled and experienced professional to join our
              dynamic team and grow with us. If you&apos;re passionate about making an impact with
              your expertise, please send your CV to{' '}
              <a
                href="mailto:info@jazbuildersgroup.com"
                className="font-normal text-jaz-dark transition-colors duration-300 hover:text-jaz"
                aria-label="Send email to info@jazbuildersgroup.com"
              >
                info@jazbuildersgroup.com
              </a>
              .
            </SmoothParagraph>
          </div>
        </section>
      </article>

      {selectedJob && (
        <div
          className="fixed inset-0 z-120 flex items-center justify-center bg-black/55 px-3 py-6 sm:px-6"
          onClick={closeApplyModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Apply for ${selectedJob.title}`}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-linear-to-r from-jaz-dark to-jaz px-6 py-4 text-white sm:px-8">
              <h3 className="text-xl font-medium sm:text-2xl">
                Apply for <span className="font-semibold">{selectedJob.title}</span>
              </h3>
              <button
                type="button"
                onClick={closeApplyModal}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/40 hover:scale-105"
                aria-label="Close apply form"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <form
              ref={careerFormRef}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="max-h-[76vh] overflow-y-auto px-5 py-5 sm:px-8 sm:py-6"
              onSubmit={async (event) => {
                event.preventDefault()
                setCareerFeedback(null)
                if (!careerForm.full_name.trim() || !careerForm.email.trim()) {
                  setCareerFeedback({ type: 'error', text: 'Name and email are required.' })
                  return
                }
                setCareerLoading(true)
                await doSubmitCareer()
              }}
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY_CAREERS} />
              <input type="hidden" name="subject" value={`Career Application: ${selectedJob?.title ?? ''}`} />
              <input type="hidden" name="job_title" value={selectedJob?.title ?? ''} />
              {careerFeedback && (
                <p className={`mb-4 rounded-xl px-3 py-2 text-sm ${careerFeedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {careerFeedback.text}
                </p>
              )}
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="full_name"
                    required
                    placeholder="Enter your full name"
                    value={careerForm.full_name}
                    onChange={(e) => setCareerForm((p) => ({ ...p, full_name: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={careerForm.email}
                    onChange={(e) => setCareerForm((p) => ({ ...p, email: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    value={careerForm.phone}
                    onChange={(e) => setCareerForm((p) => ({ ...p, phone: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="graduationYear" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Year of Graduation <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="graduationYear"
                    type="number"
                    name="graduation_year"
                    min="1980"
                    max="2100"
                    required
                    placeholder="e.g., 2020"
                    value={careerForm.graduation_year}
                    onChange={(e) => setCareerForm((p) => ({ ...p, graduation_year: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={careerForm.gender}
                    onChange={(e) => setCareerForm((p) => ({ ...p, gender: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Experience in Years <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="experience"
                    type="number"
                    name="experience"
                    min="0"
                    max="60"
                    required
                    placeholder="e.g., 5"
                    value={careerForm.experience}
                    onChange={(e) => setCareerForm((p) => ({ ...p, experience: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="currentCtc" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Current CTC <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="currentCtc"
                    type="text"
                    name="current_ctc"
                    required
                    placeholder="e.g., 5,00,000"
                    value={careerForm.current_ctc}
                    onChange={(e) => setCareerForm((p) => ({ ...p, current_ctc: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="expectedCtc" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Expected CTC <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="expectedCtc"
                    type="text"
                    name="expected_ctc"
                    required
                    placeholder="e.g., 7,00,000"
                    value={careerForm.expected_ctc}
                    onChange={(e) => setCareerForm((p) => ({ ...p, expected_ctc: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="noticePeriod" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Notice Period <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="noticePeriod"
                    type="text"
                    name="notice_period"
                    required
                    placeholder="e.g., 30 days"
                    value={careerForm.notice_period}
                    onChange={(e) => setCareerForm((p) => ({ ...p, notice_period: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    required
                    placeholder="Enter your current location"
                    value={careerForm.location}
                    onChange={(e) => setCareerForm((p) => ({ ...p, location: e.target.value }))}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-800 placeholder:text-slate-400 outline-none transition hover:border-slate-400 focus:border-jaz-dark focus:ring-2 focus:ring-jaz-dark/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={careerLoading}
                className="mt-5 w-full rounded-xl bg-linear-to-r from-jaz-dark to-jaz px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:opacity-95 hover:shadow-lg active:scale-[0.99] disabled:opacity-70"
              >
                {careerLoading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}
      <HomeBuildTogetherSection/>
    </>
  )
}

export default Careers
