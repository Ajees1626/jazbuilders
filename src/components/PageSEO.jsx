import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'JAZ Builders and Promoters'
const BASE_URL = 'https://jazbuildersgroup.com'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/dz8q7z6vq/image/upload/v1769839658/LOGO_1_wfi62m.webp'

/**
 * SEO-friendly meta tags and document title. Use on every page.
 * @param {string} title - Page title (e.g. "About Us")
 * @param {string} [fullTitle] - Override full document title (e.g. "JAZ Builders and Promoters: Home")
 * @param {string} description - Meta description (155 chars or less)
 * @param {string} [keywords] - Comma-separated keywords
 * @param {string} [image] - Full URL for og:image
 * @param {string} [path] - Override path for canonical/og:url
 * @param {boolean} [noindex] - Set noindex for this page
 * @param {object} [jsonLd] - JSON-LD structured data object
 */
function PageSEO({ title, fullTitle: fullTitleProp, description, keywords = '', image = DEFAULT_IMAGE, path, noindex = false, jsonLd }) {
  const location = useLocation()
  const fullTitle = fullTitleProp || (title ? `${title} | ${SITE_NAME}` : SITE_NAME)
  const pathname = path ?? location.pathname
  const pathNorm = pathname.startsWith('/') ? pathname : `/${pathname}`
  const canonicalUrl = `${BASE_URL}${pathNorm}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (nameOrProp, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, nameOrProp)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content || '')
    }

    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)

    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:image', image, true)
    setMeta('og:url', canonicalUrl, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', SITE_NAME, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)

    if (noindex) {
      setMeta('robots', 'noindex,nofollow')
    } else {
      setMeta('robots', 'index, follow')
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (!linkCanonical && canonicalUrl) {
      linkCanonical = document.createElement('link')
      linkCanonical.rel = 'canonical'
      document.head.appendChild(linkCanonical)
    }
    if (linkCanonical) linkCanonical.href = canonicalUrl

    return () => {
      document.title = SITE_NAME
    }
  }, [fullTitle, description, keywords, image, pathname, noindex])

  useEffect(() => {
    if (!jsonLd) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    script.id = 'page-json-ld'
    const existing = document.getElementById('page-json-ld')
    if (existing) existing.remove()
    document.head.appendChild(script)
    return () => {
      const el = document.getElementById('page-json-ld')
      if (el) el.remove()
    }
  }, [jsonLd])

  return null
}

export default PageSEO
export { SITE_NAME, BASE_URL, DEFAULT_IMAGE }
