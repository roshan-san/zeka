
type MarcusLogoProps = {
  className?: string
}

// Simple geometric mark: three upward chevrons over a centered diamond.
export function MarcusLogo({ className = 'w-6 h-6' }: MarcusLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chevrons */}
      <path d="M12 34 L32 14 L52 34" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 42 L32 26 L48 42" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 50 L32 38 L44 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Diamond */}
      <path d="M32 56 L24 48 L32 40 L40 48 Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default MarcusLogo


