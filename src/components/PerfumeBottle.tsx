type PerfumeBottleProps = {
  color: string
  colorDeep: string
  className?: string
}

/**
 * A hand-drawn vector bottle: faceted glass body with a domed, textured
 * gold cap — the recurring hardware motif pulled from the brand's real
 * product photography (jewel-toned oils, ornate brass spheres).
 */
export function PerfumeBottle({ color, colorDeep, className }: PerfumeBottleProps) {
  const uid = color.replace('#', '')

  return (
    <svg
      viewBox="0 0 240 420"
      className={className}
      role="img"
      aria-label="Perfume bottle illustration"
    >
      <defs>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="45%" stopColor={color} stopOpacity="0.92" />
          <stop offset="100%" stopColor={colorDeep} stopOpacity="0.98" />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gold-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2ddab" />
          <stop offset="45%" stopColor="#c6974e" />
          <stop offset="100%" stopColor="#8a6530" />
        </linearGradient>
        <radialGradient id="cap-dome" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f6e6bd" />
          <stop offset="55%" stopColor="#c6974e" />
          <stop offset="100%" stopColor="#7c5a28" />
        </radialGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="120" cy="404" rx="58" ry="10" fill="#0e0c11" opacity="0.16" />

      {/* neck */}
      <rect x="105" y="70" width="30" height="34" rx="3" fill={`url(#glass-${uid})`} />

      {/* faceted body */}
      <path
        d="M64 118
           C64 104 76 98 92 96
           L148 96
           C164 98 176 104 176 118
           L182 370
           C182 388 168 398 150 398
           L90 398
           C72 398 58 388 58 370
           Z"
        fill={`url(#glass-${uid})`}
        stroke={colorDeep}
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* facet lines for a cut-glass feel */}
      <path d="M96 97 L88 397" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
      <path d="M144 97 L154 397" stroke="#0e0c11" strokeOpacity="0.12" strokeWidth="1.5" />
      {/* light sheen sweep */}
      <path
        d="M64 118 C64 104 76 98 92 96 L118 96 L100 398 L90 398 C72 398 58 388 58 370 Z"
        fill={`url(#sheen-${uid})`}
      />

      {/* label */}
      <rect
        x="82"
        y="210"
        width="76"
        height="56"
        rx="2"
        fill="#f5efe3"
        opacity="0.92"
      />
      <rect x="90" y="224" width="60" height="1" fill="#96702f" opacity="0.6" />
      <rect x="90" y="250" width="60" height="1" fill="#96702f" opacity="0.6" />

      {/* gold collar */}
      <rect x="100" y="66" width="40" height="10" rx="2" fill="url(#gold-cap)" />

      {/* domed textured cap */}
      <g>
        <path
          d="M92 66 C92 40 148 40 148 66 Z"
          fill="url(#gold-cap)"
        />
        <ellipse cx="120" cy="40" rx="30" ry="26" fill="url(#cap-dome)" />
        {/* textured studs suggesting the ornate brass sphere */}
        {[
          [104, 26], [120, 20], [136, 26],
          [98, 40], [120, 36], [142, 40],
          [104, 54], [120, 58], [136, 54],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={4.2} fill="#f2ddab" opacity={0.5} />
        ))}
      </g>
    </svg>
  )
}
