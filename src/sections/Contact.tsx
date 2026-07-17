import { motion } from 'framer-motion'
import { MessageCircle, AtSign, Mail, MapPin } from 'lucide-react'
import thumb1 from '../assets/images/thumb-set-1.jpg'
import thumb2 from '../assets/images/thumb-set-2.jpg'
import thumb3 from '../assets/images/thumb-mini.jpg'

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-eyebrow text-gold mb-5">Visitez ou Commandez</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">
            Venez le sentir
            <br />
            <span className="italic font-light text-gold-light">avant de l'acheter.</span>
          </h2>
          <p className="text-bone/70 leading-relaxed font-light max-w-md mb-10">
            La plupart de nos clients commandent directement via WhatsApp — envoyez-nous la
            saison, l\'occasion, ou un parfum que vous aimez déjà, et nous
            recommanderons à partir de là.
          </p>

          <a
            href="https://wa.me/221781357748"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-eyebrow hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={18} strokeWidth={1.75} />
            Écrivez-nous sur WhatsApp
          </a>

          <div className="mt-12 space-y-4 text-sm text-bone/60">
            <p className="flex items-center gap-3">
              <Mail size={16} strokeWidth={1.5} className="text-gold-deep" />
              hello@maisonbaraka.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={16} strokeWidth={1.5} className="text-gold-deep" />
              Atelier sur rendez-vous — Dakar, Keur Massar Cité Darou Salam
            </p>
            <p className="flex items-center gap-3">
              <AtSign size={16} strokeWidth={1.5} className="text-gold-deep" />
              maisonbaraka
            </p>
          </div>
        </motion.div>

        <motion.div
          className="self-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <p className="text-eyebrow text-bone/40 mb-4">De l\'Atelier</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[360px] md:h-[420px]">
            <div className="relative overflow-hidden col-span-2 row-span-2">
              <img
                src={thumb1}
                alt="Fragrance oils and bottles at the Maison Baraka atelier"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.25) saturate(0.85) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
            <div className="relative overflow-hidden col-span-1 row-span-1">
              <img
                src={thumb2}
                alt="Fragrance bottles displayed at the Maison Baraka atelier"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.25) saturate(0.85) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
            <div className="relative overflow-hidden col-span-1 row-span-1">
              <img
                src={thumb3}
                alt="A gift set of fragrance miniatures at the Maison Baraka atelier"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.25) saturate(0.85) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
