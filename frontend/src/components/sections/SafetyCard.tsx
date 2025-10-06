"use client";
import { ChevronDown, ShieldCheck, Lock, Users, AlertTriangle, Eye, FileCheck, KeyRound, Clock } from "lucide-react";

type SafetyCardProps = {
  icon?: "shield" | "lock" | "users" | "alert" | "eye" | "file" | "key" | "clock";
  title: string;
  summary: string;
  bullets: readonly string[];
  defaultOpen?: boolean;
  className?: string;
};

const Icon = ({ name }: { name?: SafetyCardProps["icon"] }) => {
  const base = "h-5 w-5";
  switch (name) {
    case "lock": return <Lock className={base} aria-hidden />;
    case "users": return <Users className={base} aria-hidden />;
    case "alert": return <AlertTriangle className={base} aria-hidden />;
    case "eye": return <Eye className={base} aria-hidden />;
    case "file": return <FileCheck className={base} aria-hidden />;
    case "key": return <KeyRound className={base} aria-hidden />;
    case "clock": return <Clock className={base} aria-hidden />;
    default: return <ShieldCheck className={base} aria-hidden />;
  }
};

export function SafetyCard({ icon="shield", title, summary, bullets, defaultOpen=false, className }: SafetyCardProps) {
  return (
    <div className={className ?? "rounded-2xl border p-6 shadow-sm bg-white/70"}>
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
          <Icon name={icon} />
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
        </div>
      </div>

      <details className="group mt-4">
        <summary className="flex cursor-pointer select-none items-center gap-2 text-sm font-medium underline decoration-dotted underline-offset-4">
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden />
          View details
        </summary>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
