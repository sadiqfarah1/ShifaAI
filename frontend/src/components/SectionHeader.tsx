import React from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-4xl mx-auto ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
          {eyebrow}
        </div>
      )}
      <h2 className="text-section text-balance mb-6 font-serif text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lead text-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
