import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ScentTrail } from '../components/ScentTrail'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Static site: no backend configured. Wire this up to your ESP
    // (Mailchimp, Klaviyo, Netlify Forms, etc.) before launch.
    setSubmitted(true)
  }

  return (
    <section className="bg-bone-dim py-24 md:py-28">
      <ScentTrail className="mb-10 opacity-60" flip />
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <p className="text-eyebrow text-gold-deep mb-5">Restez dans le Cercle</p>
        <h2 className="font-display text-3xl md:text-4xl leading-[1.1] mb-6">
          De nouveaux parfums sont lancés deux fois par an,{' '}
          <span className="italic font-light">discrètement.</span>
        </h2>
        <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
          Rejoignez la liste pour être le premier à apprendre — pas de bruit, juste une courte note quand un
          nouveau flacon est prêt à être porté.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-eyebrow text-gold-deep"
          >
            Vous êtes sur la liste. Merci.
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <label htmlFor="email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 bg-transparent border border-plum/25 px-5 py-3.5 text-sm placeholder:text-muted focus:border-gold-deep transition-colors"
            />
            <button
              type="submit"
              className="bg-plum text-bone px-7 py-3.5 text-eyebrow hover:bg-gold-deep transition-colors duration-300"
            >
              S\'abonner
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
