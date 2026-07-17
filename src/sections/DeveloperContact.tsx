import { MessageCircle, GitBranch, Mail } from 'lucide-react'

export function DeveloperContact() {
  return (
    <section className="bg-ink text-bone border-y border-bone/10 py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col items-center gap-3">
        <p className="text-eyebrow uppercase tracking-[0.2em] text-gold">Contacter le développeur</p>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/221783690413"
            target="_blank"
            rel="noreferrer"
            aria-label="Contact on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="mailto:djaangal@gmail.com"
            aria-label="Send an email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-gold hover:text-gold"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/Mousow2023/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-gold hover:text-gold"
          >
            <GitBranch size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
