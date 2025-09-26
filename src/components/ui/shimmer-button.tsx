"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  borderRadius?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          // Remove default background from Button component
          "bg-transparent hover:bg-transparent",
          className
        )}
        style={{
          borderRadius,
          background,
        }}
        {...props}
      >
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 -top-px overflow-hidden"
          style={{
            borderRadius,
          }}
        >
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            }}
          />
        </div>
        
        {/* Content */}
        <span className="relative z-10">{children}</span>
      </Button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"

export { ShimmerButton }
