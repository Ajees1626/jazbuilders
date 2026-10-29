import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import SmoothParagraph from './SmoothParagraph'
import { submitWeb3FormFromForm } from '../api'

const WEB3FORMS_ACCESS_KEY_HOME_CONTACT = '1006224c-81de-4e38-ae7b-cfbdaa174740'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaz-builders-and-promoters-11aa662b1/', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com/jazbuilders_promoters/', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/people/Jaz-Builders-And-Promoters/61587101391523/', icon: FaFacebookF },
  { label: 'YouTube', href: 'https://www.youtube.com/@jazbuilderspromoters', icon: FaYoutube },
  { label: 'X', href: 'https://x.com/builders_jaz', icon: FaXTwitter },
]

function HomeContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFeedback(null)
    if (!name.trim() || !email.trim()) {
      setFeedback({ type: 'error', text: 'Name and email are required.' })
      return
    }
    setLoading(true)
    try {
      await submitWeb3FormFromForm(e.target)
      setFeedback({ type: 'success', text: 'Thank you! Your message has been sent. We will get back to you soon. A confirmation email has been sent to you.' })
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setFeedback({ type: 'error', text: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section aria-labelledby="contact-heading" className="overflow-hidden bg-[#f7f8fa] py-14 sm:py-16 md:py-20 lg:py-24">
      
      {/* Proper Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading Animation */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-normal text-jaz-dark sm:text-5xl"
        >
          Contact Us
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-stretch">

          {/* FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex min-h-[560px] flex-col rounded-lg bg-white p-6 shadow-md sm:p-7"
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex h-full flex-col space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY_HOME_CONTACT} />
              {feedback && (
                <p className={`rounded-md px-3 py-2 text-sm ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {feedback.text}
                </p>
              )}
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  viewport={{ once: true }}
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-12 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
                />
              </div>

              <motion.textarea
                rows={6}
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="min-h-[180px] w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-300 focus:scale-[1.02] focus:border-jaz-dark focus:ring-1 focus:ring-jaz-dark"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className="mt-auto inline-flex w-full items-center justify-center rounded-md bg-jaz px-4 py-3.5 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-jaz-dark hover:shadow-lg disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Submit'}
              </motion.button>
            </form>
          </motion.div>

          {/* ASIDE SECTION */}
          <motion.aside
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex min-h-[560px] flex-col rounded-lg bg-jaz-dark p-6 text-white shadow-md sm:p-7"
          >
            <h3 className="mb-5 text-3xl font-medium">Follow Us</h3>

            {/* Social Icons */}
            <div className="mb-5 flex w-full flex-wrap items-center justify-center gap-3">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white transition hover:bg-white/25"
                >
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            <div className="mx-auto mb-8 h-2.5 w-2.5 rounded-full bg-white/60" />

            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-auto flex w-full items-center justify-center pt-6"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/image/logo.png"
                alt="JAZ Builders and Promoters"
                className="h-28 w-auto object-contain sm:h-36 md:h-40"
              />
            </motion.div>
          </motion.aside>

        </div>
      </div>
    </section>
  )
}

export default HomeContactSection
