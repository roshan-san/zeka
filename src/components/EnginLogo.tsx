
type EnginLogoProps = {
  className?: string
}

// Upright uppercase E using currentColor, bold and minimal
export function EnginLogo({ className = 'w-6 h-6' }: EnginLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M18 16 V48 M18 16 H48 M18 32 H42 M18 48 H48"
        stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export default EnginLogo


