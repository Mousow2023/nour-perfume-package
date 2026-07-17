import { motion } from 'framer-motion'
import { Droplets, Clock3, Gem, MessageCircleHeart } from 'lucide-react'

const FEATURES = [
  {
    icon: Droplets,
    title: "À base d'huile, sans alcool",
    body: "Essences de parfum concentrées portées près de la peau — pas de piqûre d'alcool, pas de décoloration à midi.",
  },
  {
    icon: Gem,
    title: 'Sourcés, pas synthétisés',
    body: 'Véritable oud cambodgien, safran du Cachemire et absolues de Grasse, assemblés à la main en petits lots.',
  },
  {
    icon: Clock3,
    title: 'Conçus pour durer toute la journée',
    body: 'Chaque formule est testée 12+ heures avant de mériter sa place dans la collection.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Une personne, pas une caisse enregistreuse',
    body: 'Commandez, posez des questions ou demandez un mélange sur mesure directement sur WhatsApp — nous répondons nous-mêmes.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] max-w-lg">
            Pourquoi les gens <span className="italic font-light">reviennent</span> à Maison Baraka.
          </h2>
          <div className="rule-gold flex-1 hidden md:block max-w-[220px] mb-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="border-t border-plum/15 pt-6"
            >
              <f.icon className="text-gold-deep mb-6" size={28} strokeWidth={1.25} />
              <h3 className="font-display text-xl mb-3">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
