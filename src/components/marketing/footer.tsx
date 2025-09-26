"use client"

import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">S</span>
            </div>
            <span className="font-semibold">Signal Log</span>
          </div>

          {/* Center - Made with AARRR */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <a 
              href="https://pirateskills.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              AARRR
            </a>
            <span>in Cologne</span>
            <span className="text-lg">🏴‍☠️</span>
          </div>

          {/* Right side - Links and Theme Toggle */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="https://pirateskills.com/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a 
                href="https://www.iubenda.com/privacy-policy/8183741/full-legal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile-friendly stacked version */}
        <div className="md:hidden mt-4 pt-4 border-t border-border/50">
          <div className="text-center text-xs text-muted-foreground">
            © 2025 Signal Log. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
