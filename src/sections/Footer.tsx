import { AtSign, MessageCircle, Mail } from 'lucide-react'
import logoOne from '../assets/products/logo_one.jpeg'

const SITEMAP = [
  { label: 'Collection', href: '#collection' },
  { label: 'La Maison', href: '#story' },
  { label: 'Notes', href: '#notes' },
  { label: 'Journal', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-bone border-t border-bone/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logoOne}
              alt="Maison Baraka logo"
              className="h-10 w-10 rounded-full object-cover border border-gold/30"
            />
            <p className="font-display text-2xl tracking-[0.15em]">Maison Baraka</p>
          </div>
          <p className="text-sm text-bone/50 max-w-xs leading-relaxed">
            Essences de parfum décantées à la main, composées autour des heures de la
            journée. Fondée sur un brûleur d\'oud.
          </p>
        </div>

        <div>
          <p className="text-eyebrow text-bone/40 mb-5">Explorer</p>
          <ul className="space-y-3">
            {SITEMAP.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="text-sm text-bone/70 hover:text-gold transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-eyebrow text-bone/40 mb-5">Soins</p>
          <ul className="space-y-3 text-sm text-bone/70">
            <li>Livraison &amp; Expédition</li>
            <li>Retours</li>
            <li>Mélanges sur Mesure</li>
            <li>Cadeaux</li>
          </ul>
        </div>

        <div>
          <p className="text-eyebrow text-bone/40 mb-5">Connectez-vous</p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/221781357748"
              target="_blank"
              rel="noreferrer"
              aria-label="Message on WhatsApp"
              className="w-10 h-10 flex items-center justify-center border border-bone/20 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={17} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/maison_baraka.sn"
              target="_blank"
              rel="noreferrer"
              aria-label="Maison Baraka on Instagram"
              className="w-10 h-10 flex items-center justify-center border border-bone/20 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <AtSign size={17} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@maisonbaraka.com"
              aria-label="Email Maison Baraka"
              className="w-10 h-10 flex items-center justify-center border border-bone/20 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <Mail size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-bone/35">
          <p>© {new Date().getFullYear()} Maison Baraka. All rights reserved.</p>
          <p>Crafted with care — every batch, by hand.</p>
        </div>
      </div>
    </footer>
  )
}
