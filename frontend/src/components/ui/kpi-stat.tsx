import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPIStatProps {
  label: string
  value: string | number
  change?: number
  changeLabel?: string
  className?: string
}

export function KPIStat({ label, value, change, changeLabel, className }: KPIStatProps) {
  const getTrendIcon = () => {
    if (change === undefined) return Minus
    if (change > 0) return TrendingUp
    if (change < 0) return TrendingDown
    return Minus
  }

  const getTrendColor = () => {
    if (change === undefined) return "text-muted-foreground"
    if (change > 0) return "text-green-600"
    if (change < 0) return "text-red-600"
    return "text-muted-foreground"
  }

  const TrendIcon = getTrendIcon()

  return (
    <div className={cn("space-y-2", className)}>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
      {change !== undefined && (
        <div className={cn("flex items-center space-x-1 text-xs", getTrendColor())}>
          <TrendIcon className="h-3 w-3" />
          <span>{Math.abs(change)}%</span>
          {changeLabel && <span>{changeLabel}</span>}
        </div>
      )}
    </div>
  )
}
