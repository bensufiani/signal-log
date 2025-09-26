"use client"

import { Badge } from "@/components/ui/badge"
import { 
  AnimatedText, 
  DotPattern, 
  GradientText, 
  FadeIn 
} from "@/components/ui/magic-ui"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Background Pattern */}
      <DotPattern 
        className="fixed inset-0 opacity-30 dark:opacity-20 -z-10" 
        width={20} 
        height={20} 
        cx={2} 
        cy={2} 
        cr={1} 
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn delay={0.2}>
          <Badge variant="secondary" className="mb-6">
            Coming Soon
          </Badge>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center">
            <div className="mb-4 flex justify-center">
              <AnimatedText 
                text="AI Project Journal" 
                className="justify-center"
                delay={0.6}
              />
            </div>
            <GradientText 
              from="from-primary" 
              to="to-primary/80"
              className="text-4xl md:text-6xl lg:text-7xl font-bold block text-center"
            >
              for Indie SaaS Founders
            </GradientText>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.8}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Turn scattered ideas into evolving narratives. Validate experiments faster 
            with less cognitive overhead and keep multiple ideas moving forward.
          </p>
        </FadeIn>

        <FadeIn delay={1.0}>
          <div className="flex flex-col items-center gap-6">
            <RainbowButton 
              onClick={() => scrollToSection("problem")}
              className="text-lg px-8 py-4"
            >
              Discover the Problem →
            </RainbowButton>
            <p className="text-sm text-muted-foreground">
              Learn how we&apos;re solving the founder&apos;s dilemma
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
