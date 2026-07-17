import { motion } from 'framer-motion'
import { ScentTrail } from '../components/ScentTrail'

const PYRAMID = [
  {
    stage: 'Note de Tête',
    time: 'Les 15 premières minutes',
    notes: ['Bergamote', 'Poivre Rose', 'Sel Marin', 'Cardamome'],
    detail:
      "L'introduction — lumineux et citronné, disparu avant d'être étudié.",
  },
  {
    stage: 'Note de Cœur',
    time: "De l'heure 1 à 4",
    notes: ['Safran', 'Rose', 'Pivoine', 'Oud'],
    detail:
      "Le caractère du parfum s'établit ici, et reste le plus proche de la peau.",
  },
  {
    stage: 'Note de Base',
    time: "À partir de l'heure 4",
    notes: ['Ambre', 'Santal', 'Musc', 'Vanille'],
    detail:
      'Ce qui persiste sur une écharpe, une manche, un oreiller — la note dont on se souvient.',
  },
]

export function FragranceNotes() {
  return (
    <section id="notes" className="bg-bone-dim py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-xl mb-16">
          <p className="text-eyebrow text-gold-deep mb-4">Comment un Parfum se Déploie</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Chaque flacon est <span className="italic font-light">trois histoires</span>,
            racontées dans l'ordre.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-bone-line">
          {PYRAMID.map((stage, i) => (
            <motion.div
              key={stage.stage}
              className="bg-bone-dim p-8 md:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-eyebrow text-gold-deep">{stage.stage}</span>
                <span className="text-xs text-muted">{stage.time}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {stage.notes.map((n) => (
                  <li
                    key={n}
                    className="font-display text-2xl md:text-3xl leading-tight text-plum/90"
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted leading-relaxed">{stage.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ScentTrail className="mt-20 opacity-70" />
    </section>
  )
}
