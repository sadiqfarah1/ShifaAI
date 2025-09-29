import { Clock, User, Phone } from "lucide-react"
import { RiskBadge } from "./risk-badge"
import { cn } from "@/lib/utils"

interface AlertCardProps {
  patientName: string
  riskLevel: "green" | "amber" | "red"
  message: string
  timestamp: string
  phoneNumber?: string
  className?: string
}

export function AlertCard({ 
  patientName, 
  riskLevel, 
  message, 
  timestamp, 
  phoneNumber,
  className 
}: AlertCardProps) {
  const riskLabels = {
    green: "LOW RISK",
    amber: "MODERATE RISK", 
    red: "HIGH RISK"
  }

  return (
    <div className={cn("card p-4 space-y-3", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{patientName}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{timestamp}</span>
          </div>
        </div>
        <RiskBadge level={riskLevel} label={riskLabels[riskLevel]} />
      </div>
      
      <p className="text-sm text-foreground">{message}</p>
      
      {phoneNumber && (
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Phone className="h-3 w-3" />
          <span>{phoneNumber}</span>
        </div>
      )}
    </div>
  )
}
