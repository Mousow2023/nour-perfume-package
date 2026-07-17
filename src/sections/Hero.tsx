import { motion } from 'framer-motion'
import { products } from '../lib/products'

const flagship = products[0]

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] bg-ink bg-grain overflow-hidden flex items-center"
    >
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-oxblood/30 blur-[160px]" />

      {/* wisp of smoke, ambient, behind bottle */}
      <motion.svg
        viewBox="0 0 400 700"
        className="pointer-events-none absolute right-[6%] top-0 h-full w-[420px] hidden md:block opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <motion.path
          d="M200 700 C 180 600, 240 560, 210 480 S 150 380, 210 300 S 260 160, 190 60"
          fill="none"
          stroke="#c6974e"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
      </motion.svg>

      <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-10 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            className="text-eyebrow text-gold mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Maison Baraka — Essences Précieuses
          </motion.p>

          <motion.h1
            className="font-display text-bone text-[13vw] leading-[0.95] md:text-[5.2vw] md:leading-[0.95]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Lumière, retenue
            <br />
            <span className="italic font-light text-gold-light">dans le verre.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-md text-bone/70 text-base md:text-lg leading-relaxed font-light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            Cinq essences précieuses, chacune distillée d\'une seule heure de la
            journée — fumée d\'oud au crépuscule, safran à l\'aube, air marin avant la pluie.
            Décantées à la main en petits lots.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <a
              href="#collection"
              className="bg-gold text-ink px-8 py-4 text-eyebrow hover:bg-gold-light transition-colors duration-300"
            >
              Explorer la Collection
            </a>
            <a
              href="#story"
              className="text-bone/80 text-eyebrow border-b border-bone/30 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Notre Histoire
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <img
            src={flagship.image}
            alt={flagship.name}
            className="w-[220px] md:w-[280px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] object-cover rounded-3xl"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-6 md:left-10 flex items-center gap-3 text-bone/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="w-8 h-px bg-bone/40" />
        <span className="text-eyebrow">Défiler</span>
      </motion.div>
    </section>
  )
}
