"use client"

import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
  via?: string
}

export function GradientText({ 
  children, 
  className,
  from = "from-blue-600",
  to = "to-violet-600", 
  via
}: GradientTextProps) {
  const gradientClasses = via 
    ? `bg-gradient-to-r ${from} ${via} ${to}`
    : `bg-gradient-to-r ${from} ${to}`

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        gradientClasses,
        className
      )}
    >
      {children}
    </span>
  )
}
