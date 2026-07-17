import { motion } from 'framer-motion'

type ScentTrailProps = {
  className?: string
  flip?: boolean
}

/**
 * The page's signature element: a single wisp line, drawn from the
 * curling smoke of the oud burner in the brand's own photography.
 * Used as the recurring transition device between sections instead of
 * a generic rule or numbered marker.
 */
export function ScentTrail({ className = '', flip = false }: ScentTrailProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 80"
        className={`w-full h-16 md:h-20 ${flip ? 'scale-y-[-1]' : ''}`}
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 60 C 150 10, 260 70, 400 40 S 620 -5, 760 35 S 980 75, 1200 20"
          fill="none"
          stroke="url(#trail-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c6974e" stopOpacity="0" />
            <stop offset="15%" stopColor="#c6974e" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#c6974e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c6974e" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
