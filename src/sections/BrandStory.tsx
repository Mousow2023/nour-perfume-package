import { motion } from 'framer-motion'
import heritageImg from '../assets/images/heritage-vessel.jpg'

export function BrandStory() {
  return (
    <section id="story" className="bg-ink text-bone relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-eyebrow text-gold mb-6">La Maison</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] mb-8">
            Construite sur un brûleur d
            <span className="italic font-light text-gold-light">oud</span>,
            pas une formule.
          </h2>
          <div className="space-y-5 text-bone/70 leading-relaxed font-light">
            <p>
              Maison Baraka a commencé dans une petite arrière-salle où des copeaux d\'oud étaient
              réchauffés sur du charbon chaque soir, et la fumée était la seule mesure qui
              comptait. Cet instinct — pour quelque chose ressenti avant qu\'il ne puisse être
              expliqué — guide toujours chaque mélange que nous libérons.
            </p>
            <p>
              Nous travaillons avec un petit cercle de parfumeurs et de producteurs d\'essences à travers
              le Golfe et Grasse, testant chaque composition sur la peau pendant
              des mois avant qu\'elle ne mérite un flacon. Rien n\'est précipité, et rien ne
              s\'expédie avant d\'avoir été porté une journée complète.
            </p>
          </div>

          <div className="mt-10 pl-6 border-l border-gold/40">
            <p className="font-display italic text-xl md:text-2xl text-gold-light leading-snug">
              « Un parfum devrait arriver comme un souvenir —
              avant que vous ayez décidé d\'en avoir un. »
            </p>
            <p className="mt-3 text-eyebrow text-bone/40">Note du Fondateur</p>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={heritageImg}
              alt="Traditional mabkhara incense burner with agarwood resin, part of Maison Baraka's heritage"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-ink border border-gold/30 px-6 py-4 hidden sm:block">
            <p className="text-eyebrow text-gold">Est. Heritage</p>
            <p className="font-display text-lg mt-1">Bakhoor &amp; Oud, since always.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
