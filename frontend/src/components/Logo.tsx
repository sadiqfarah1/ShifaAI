import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  variant?: 'default' | 'minimal' | 'icon-only'
}

export function Logo({ 
  className = '', 
  size = 'md', 
  showText = true, 
  variant = 'default' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-3xl'
  }

  const Icon = () => (
    <svg
      className={`${sizeClasses[size]} transition-transform duration-200 hover:scale-105`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="healingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#5EEAD4" />
        </linearGradient>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0D9488" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#5EEAD4" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D9488" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      {/* Main healing heart shape */}
      <path
        d="M16 28C16 28 4 20 4 12C4 8.68629 6.68629 6 10 6C12.5 6 14.5 7.5 16 9.5C17.5 7.5 19.5 6 22 6C25.3137 6 28 8.68629 28 12C28 20 16 28 16 28Z"
        fill="url(#healingGradient)"
        className="drop-shadow-sm"
      />
      
      {/* Inner pulse lines */}
      <path
        d="M16 24C16 24 8 18 8 12C8 10.5 9 9.5 10.5 9.5C11.5 9.5 12.5 10.5 16 13C19.5 10.5 20.5 9.5 21.5 9.5C23 9.5 24 10.5 24 12C24 18 16 24 16 24Z"
        fill="white"
        fillOpacity="0.3"
      />
      
      {/* Healing spark/pulse animation */}
      <circle
        cx="16"
        cy="12"
        r="2"
        fill="url(#pulseGradient)"
        className="animate-pulse"
      />
      
      {/* Subtle Arabic-inspired curve accent */}
      <path
        d="M8 16C8 16 10 14 12 16C14 18 16 16 16 16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )

  if (variant === 'icon-only') {
    return <Icon />
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <Icon />
        <span className={`font-bold text-text-primary ${textSizes[size]}`}>
          Shifa
        </span>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Icon />
      {showText && (
        <div className="flex items-baseline space-x-1">
          <span className={`font-bold text-text-primary ${textSizes[size]} tracking-tight`}>
            Shifa
          </span>
          <span className={`font-medium text-primary ${textSizes[size]} tracking-wide`}>
            AI
          </span>
        </div>
      )}
    </div>
  )
}

// Favicon version (16x16)
export function FaviconLogo() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#5EEAD4" />
        </linearGradient>
      </defs>
      <path
        d="M16 28C16 28 4 20 4 12C4 8.68629 6.68629 6 10 6C12.5 6 14.5 7.5 16 9.5C17.5 7.5 19.5 6 22 6C25.3137 6 28 8.68629 28 12C28 20 16 28 16 28Z"
        fill="url(#faviconGradient)"
      />
      <circle
        cx="16"
        cy="12"
        r="2"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  )
}
