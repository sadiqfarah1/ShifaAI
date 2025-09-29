import React from 'react'
import { AlertTriangle, Info, Shield, HeartPulse } from 'lucide-react'

interface CalloutProps {
  type: 'info' | 'warning' | 'success' | 'error'
  title?: string
  children: React.ReactNode
  className?: string
}

const calloutStyles = {
  info: {
    container: 'bg-slate-50 text-slate-800 border border-slate-200',
    icon: 'text-slate-600',
    IconComponent: Info
  },
  warning: {
    container: 'bg-amber-50 text-amber-900 border border-amber-200',
    icon: 'text-amber-600',
    IconComponent: AlertTriangle
  },
  success: {
    container: 'bg-green-50 text-green-800 border border-green-200',
    icon: 'text-green-600',
    IconComponent: Shield
  },
  error: {
    container: 'bg-red-50 text-red-800 border border-red-200',
    icon: 'text-red-600',
    IconComponent: HeartPulse
  }
}

export function Callout({ type, title, children, className = '' }: CalloutProps) {
  const { container, icon, IconComponent } = calloutStyles[type]
  
  return (
    <div className={`rounded-2xl border p-6 md:p-8 ${container} ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <IconComponent className={`h-6 w-6 ${icon}`} />
        </div>
        <div className="flex-1">
          {title && (
            <h3 className="font-semibold text-lg mb-3">{title}</h3>
          )}
          <div className="prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
