import { motion } from 'framer-motion'
import { products } from '../lib/products'

const bestseller = products[2] // Golden Hour

export function Bestseller() {
  return (
    <section className="bg-ink text-bone bg-grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gold/10 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex justify-center md:justify-start order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={bestseller.image}
            alt={bestseller.name}
            className="w-[240px] md:w-[300px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)] object-cover rounded-3xl"
          />
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-eyebrow text-gold mb-5">Plus Demandé</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
            {bestseller.name}
          </h2>
          <p className="text-bone/70 leading-relaxed font-light max-w-md mb-8">
            {bestseller.description} C\'est le flacon que nous réapprovisionnons le plus —
            assez chaud pour les soirées hivernales, assez léger pour un
            après-midi d\'été.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="bg-gold text-ink px-8 py-4 text-eyebrow hover:bg-gold-light transition-colors duration-300"
            >
              Acheter {bestseller.name} — {bestseller.price}
            </a>
            <a
              href="#collection"
              className="text-bone/80 text-eyebrow border-b border-bone/30 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Voir la Collection Complète
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
