import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      "Oud Noir ne s'annonce pas. Les gens se penchent pour demander ce que c'est — c'est exactement ce que je voulais.",
    name: 'Awa Diop',
    place: 'Saint-Louis, Sénégal',
  },
  {
    quote:
      "J'ai porté Golden Hour tous les jours pendant un an. Il tient un quart complet et sent toujours intentionnel à minuit.",
    name: 'Moussa Ndiaye',
    place: 'Thiès, Sénégal',
  },
  {
    quote:
      "Je leur ai écrit sur WhatsApp sans presque aucune idée de ce que je voulais. Ils ont posé trois questions et m'ont envoyé Blush Mirage. Parfait.",
    name: 'Ndeye Fatou Sall',
    place: 'Ziguinchor, Sénégal',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-oxblood text-bone py-24 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/10 blur-[160px]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
        <p className="text-eyebrow text-gold-light mb-4 text-center">Du Journal</p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-center max-w-xl mx-auto mb-16">
          Porté, pas seulement <span className="italic font-light">acheté.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="border border-bone/10 p-8 h-full flex flex-col"
            >
              <span className="font-display text-5xl text-gold-light/70 leading-none mb-4">
                "
              </span>
              <blockquote className="flex-1 font-display text-lg md:text-xl italic font-light leading-relaxed text-bone/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-bone/10">
                <p className="text-eyebrow text-bone/90">{t.name}</p>
                <p className="text-xs text-bone/50 mt-1">{t.place}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
