import { CheckCircle, AlertTriangle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface RiskBadgeProps {
  level: "green" | "amber" | "red"
  label: string
  className?: string
}

const riskConfig = {
  green: {
    icon: CheckCircle,
    className: "risk-badge-green",
    iconClassName: "text-green-600"
  },
  amber: {
    icon: AlertTriangle,
    className: "risk-badge-amber", 
    iconClassName: "text-amber-600"
  },
  red: {
    icon: AlertCircle,
    className: "risk-badge-red",
    iconClassName: "text-red-600"
  }
}

export function RiskBadge({ level, label, className }: RiskBadgeProps) {
  const config = riskConfig[level]
  const Icon = config.icon

  return (
    <span className={cn(config.className, className)}>
      <Icon className={cn("mr-1.5 h-3 w-3", config.iconClassName)} aria-hidden="true" />
      {label}
    </span>
  )
}
