import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { products } from '../lib/products'

export function Collection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  return (
    <section id="collection" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-eyebrow text-gold-deep mb-4">La Collection</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
              Cinq heures, <span className="italic font-light">cinq parfums.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted leading-relaxed">
            Chaque fragrance porte le nom du moment qu’elle a été créée pour évoquer —
            à porter seule ou à superposer pour écrire votre propre heure de la journée.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-8 snap-x snap-mandatory scroll-pl-6 md:scroll-pl-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              className="snap-start shrink-0 w-[280px] md:w-[340px] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            >
              <div
                className="relative h-[420px] md:h-[480px] flex items-center justify-center rounded-3xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-5 left-5 text-eyebrow text-bone/50">
                  0{i + 1}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <span className="text-gold-deep font-medium">{p.price}</span>
                </div>
                <p className="text-eyebrow text-muted mt-1">{p.family}</p>
                <p className="mt-3 text-sm text-plum/70 leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.notes.map((n) => (
                    <li
                      key={n}
                      className="text-[11px] tracking-wide uppercase text-muted border border-bone-line px-2.5 py-1"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          <div className="shrink-0 w-1 md:w-2" aria-hidden="true" />
        </div>

        <div className="hidden md:flex items-center gap-3 mx-10 mt-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll collection left"
            className="w-11 h-11 flex items-center justify-center border border-bone-line rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll collection right"
            className="w-11 h-11 flex items-center justify-center border border-bone-line rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
