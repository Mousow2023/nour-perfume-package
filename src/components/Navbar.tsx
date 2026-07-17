import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoOne from '../assets/products/logo_new.jpeg'

const LINKS = [
  { href: '#collection', label: 'Collection' },
  { href: '#story', label: 'La Maison' },
  { href: '#notes', label: 'Notes' },
  { href: '#testimonials', label: 'Journal' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bone/80 backdrop-blur-md border-b border-bone-line/60 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          className={`flex items-center gap-3 transition-colors duration-500 ${
            scrolled ? 'text-plum' : 'text-bone'
          }`}
        >
          <img
            src={logoOne}
            alt="Maison Baraka logo"
            className="h-10 w-10 rounded-full object-cover border border-gold/30"
          />
          <span className="font-display text-lg tracking-[0.15em]">Maison Baraka</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-eyebrow transition-colors duration-500 hover:text-gold ${
                scrolled ? 'text-plum/70' : 'text-bone/80'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden md:inline-flex items-center border px-5 py-2.5 text-eyebrow transition-all duration-500 hover:bg-gold hover:border-gold hover:text-ink ${
            scrolled ? 'border-plum/30 text-plum' : 'border-bone/40 text-bone'
          }`}
        >
          Commandez via WhatsApp
        </a>

        <button
          className={`md:hidden ${scrolled ? 'text-plum' : 'text-bone'}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink text-bone flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <div className="flex items-center gap-3">
                <img
                  src={logoOne}
                  alt="Maison Baraka logo"
                  className="h-9 w-9 rounded-full object-cover border border-gold/30"
                />
                <span className="font-display text-lg tracking-[0.15em]">Maison Baraka</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col gap-8 px-8 mt-12">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl italic font-light"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-auto mx-8 mb-10 border border-gold text-gold text-eyebrow text-center py-4"
            >
              Order via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
